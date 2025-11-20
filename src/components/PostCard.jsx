import { ThumbsUp, ThumbsDown, Tag } from 'lucide-react';
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';

const PostCard = ({ post }) => {
  const [isLikeClicked, setisLikeClicked] = useState(null);
  const [isDisLikeClicked, setIsDislikeClicked] = useState(null);
  const [like, setLike] = useState(post.likes);
  const [disLike, setDislike] = useState(post.dislikes);
  const [interested, setInterested] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const { user } = useContext(AuthContext)



  useEffect(() => {
    if (post.interested.includes(user._id)) setInterested(true);
    if (post.likedBy.includes(user._id)) setisLikeClicked(true);
    if (post.dislikedBy.includes(user._id)) setIsDislikeClicked(true);
  }, [post, user]);

  return (
    <section
      className={`border p-6 md:p-8 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-xl rounded-3xl relative group ${isDark
          ? 'bg-gray-900/60 border-gray-700/50 text-white hover:bg-gray-900/80'
          : 'bg-white/70 border-white/50 text-gray-900 hover:bg-white/90'
        }`}
    >
      <div className="flex items-center gap-4 mb-6">
        <img
          src={post.companyLogo}
          alt="Company Logo"
          className={`w-14 h-14 rounded-xl object-cover shadow-md border-2 ${isDark ? 'border-gray-700' : 'border-white'
            }`}
        />
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-tight">{post.title}</h2>
          <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {post.company}
          </p>
        </div>
      </div>

      {post.postImage && (
        <div className="mb-6 overflow-hidden rounded-2xl shadow-md">
          <img
            src={post.postImage}
            alt="Post Visual"
            className="w-full h-64 md:h-80 object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {post.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags?.map((tag, idx) => (
          <span
            key={idx}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${isDark
                ? 'bg-gray-800 text-gray-300 border border-gray-700'
                : 'bg-gray-100 text-gray-600 border border-gray-200'
              }`}
          >
            <Tag size={12} /> {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 pt-4 border-t border-opacity-10 border-gray-500">
        <div className="flex gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              const newLike = isLikeClicked === true ? null : true;
              setisLikeClicked(newLike);
              setIsDislikeClicked(null);
              fetch(`https://nexthorizon-backend-1.onrender.com/feed/like`, {
                method: 'PATCH',
                credentials: 'include',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ _id: post._id, isLikeClicked: newLike, isDisLikeClicked: null }),
              })
                .then((res) => res.json())
                .then((data) => {
                  setLike(data.updatedPost.likes);
                  setDislike(data.updatedPost.dislikes);
                });
            }}
            className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-200 font-medium ${isLikeClicked
                ? isDark
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                  : 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            <ThumbsUp size={18} className={isLikeClicked ? 'fill-current' : ''} />
            <span>{like}</span>
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              const newDisLike = isDisLikeClicked === true ? null : true;
              setIsDislikeClicked(newDisLike);
              setisLikeClicked(null);
              fetch(`https://nexthorizon-backend-1.onrender.com/feed/dislike`, {
                method: 'PATCH',
                credentials: 'include',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ _id: post._id, isLikeClicked: null, isDisLikeClicked: newDisLike }),
              })
                .then((res) => res.json())
                .then((data) => {
                  setLike(data.updatedPost.likes);
                  setDislike(data.updatedPost.dislikes);
                });
            }}
            className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-200 font-medium ${isDisLikeClicked
                ? isDark
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/20'
                  : 'bg-red-600 text-white shadow-lg shadow-red-200'
                : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            <ThumbsDown size={18} className={isDisLikeClicked ? 'fill-current' : ''} />
            <span>{disLike}</span>
          </button>
        </div>

        <button
          onClick={async (e) => {
            e.preventDefault();
            try {
              const res = await fetch(`https://nexthorizon-backend-1.onrender.com/post/interested`, {
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ post_id: post._id, user_id: user.user_data[0]._id }),
                credentials: 'include',
              });
              const data = await res.json();
              if (data.message === `Your Interest request has already been sent`) {
                toast.dark(data.message);
              } else {
                toast.success('Your interest has been recorded.');
              }
            } catch (err) {
              console.error(err.message);
              toast.error('Error recording interest.');
            }
          }}
          className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform active:scale-95 ${interested
              ? 'cursor-not-allowed bg-gray-500/20 text-gray-400 border border-gray-500/30'
              : isDark
                ? 'bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-white/10'
                : 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-black/20'
            }`}
        >
          {interested ? 'Interested' : 'I\'m Interested'}
        </button>
      </div>
    </section>
  );
};

export default PostCard;