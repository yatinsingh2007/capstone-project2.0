import { ThumbsUp, ThumbsDown, Tag } from 'lucide-react';
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { toast } from 'react-toastify';

const PostCard = ({ post }) => {
  const [isLikeClicked, setisLikeClicked] = useState(null);
  const [isDisLikeClicked, setIsDislikeClicked] = useState(null);
  const [like, setLike] = useState(post.likes);
  const [disLike, setDislike] = useState(post.dislikes);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const [interested, setInterested] = useState(false);

  const cardBase = "border rounded-xl p-4 md:p-6 transition duration-300 shadow-sm hover:shadow-xl bg-opacity-90";
  const cardClass = isDark ? "bg-black text-white" : "bg-white text-black";
  const mutedText = isDark ? "text-gray-400" : "text-gray-600";
  const subText = mutedText;
  const tagBg = isDark ? "border border-gray-700 text-gray-300" : "border border-gray-300 text-gray-600";
  const ourUser = JSON.parse(localStorage.getItem("userData") || "{}")?.user_data || {};

  useEffect(() => {
    if (post.interested.includes(ourUser._id)) {
      setInterested(true);
    }
  }, [post , ourUser]);

  useEffect(() => {
    if (post.likedBy.includes(ourUser._id)) {
      setisLikeClicked(true);
    }
    if (post.dislikedBy.includes(ourUser._id)) {
      setIsDislikeClicked(true);
    }
  }, [post, ourUser]);

  return (
    <div className={`${cardBase} ${cardClass} max-w-2xl mx-auto mb-6 rounded-2xl`}>      
      <div className="flex items-center gap-3 mb-4">
        <img
          src={post.companyLogo}
          alt="Company Logo"
          className={`w-12 h-12 rounded-full object-cover border ${isDark ? "border-gray-600" : "border-gray-300"}`}
        />
        <div>
          <h2 className="text-lg md:text-xl font-semibold tracking-tight">{post.title}</h2>
          <p className={`text-sm ${subText}`}>{post.company}</p>
        </div>
      </div>
      {post.postImage && (
        <img
          src={post.postImage}
          alt="Post Visual"
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
      )}
      <p className={`text-sm mb-4 ${mutedText}`}>{post.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags?.map((tag, idx) => (
          <span
            key={idx}
            className={`flex items-center gap-1 px-2 py-1 rounded-full ${tagBg}`}
          >
            <Tag size={12} /> {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 text-sm">
        <div className="flex gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              const newLikeState = isLikeClicked === true ? null : true;
              setisLikeClicked(newLikeState);
              setIsDislikeClicked(null);
              fetch(`http://localhost:7777/feed/like`, {
                method: 'PATCH',
                credentials: 'include',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ _id: post._id, isLikeClicked: newLikeState, isDisLikeClicked: null }),
              })
                .then((resp) => resp.json())
                .then((data) => { setLike(data.updatedPost.likes); setDislike(data.updatedPost.dislikes); })
                .catch((err) => console.error(`Error Occurred ${err.message}`));
            }}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 transition text-sm ${isLikeClicked ? (isDark ? 'bg-white text-black' : 'bg-black text-white') : 'border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            <ThumbsUp size={18} /> {like}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              const newDisLikeState = isDisLikeClicked === true ? null : true;
              setIsDislikeClicked(newDisLikeState);
              setisLikeClicked(null);
              fetch(`http://localhost:7777/feed/dislike`, {
                method: 'PATCH',
                credentials: 'include',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ _id: post._id, isLikeClicked: null, isDisLikeClicked: newDisLikeState }),
              })
                .then((resp) => resp.json())
                .then((data) => { setDislike(data.updatedPost.dislikes); setLike(data.updatedPost.likes); })
                .catch((err) => console.error(`Error Occurred ${err.message}`));
            }}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 transition text-sm ${isDisLikeClicked ? (isDark ? 'bg-white text-black' : 'bg-black text-white') : 'border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            <ThumbsDown size={18} /> {disLike}
          </button>
        </div>
        <button
          onClick={async () => {
            try {
                const response = await fetch(`http://localhost:7777/post/interested`, {
                  method: 'PATCH',
                  headers: { 'content-type': 'application/json' },
                  body: JSON.stringify({ post_id: post._id, user_id: ourUser._id }),
                });
                const data = await response.json();
                if (data.message === `Your Interest request has already been sent`){
                  toast.dark(`Your interest has already been sent.`)
                  return
                }else{
                  toast.success('Your interest has been recorded.');
                  return
                }
            } catch (err) {
              console.error(err);
              toast.error('Error recording interest.');
            }
          }}
          className={`px-4 py-2 rounded-full transition text-sm ${interested ? 'cursor-not-allowed bg-gray-700 text-gray-300 border border-gray-600' : isDark ? 'border border-gray-600 text-white hover:bg-white hover:text-black' : 'border border-gray-600 text-black hover:bg-black hover:text-white'}`}
        >
          Interested
        </button>
      </div>
    </div>
  );
};

export default PostCard;