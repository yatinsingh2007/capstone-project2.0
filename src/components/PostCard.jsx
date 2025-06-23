import { ThumbsUp, ThumbsDown, ExternalLink, Tag } from 'lucide-react';
import { useState } from 'react';

const PostCard = ({ post }) => {
  const [isLikeClicked , setisLikeClicked] = useState(null)
  const [like , setLike] = useState(post.likes)
  const [disLike , setDislike] = useState(post.dislikes)
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">
      <img
        src={post.postImage}
        alt="Post Visual"
        className="w-full h-40 object-cover rounded-xl mb-4"
      />

      <div className="flex items-center gap-3 mb-4">
        <img
          src={post.companyLogo}
          alt="Company Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{post.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400" style={{ fontFamily: "'Nunito Sans'" }}>{post.company}</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3" style={{ fontFamily: "'Nunito Sans'" }}>
        {post.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1 text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
          >
            <Tag size={12} /> {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <ThumbsUp size={14} onClick={(e) => {
              e.preventDefault();
              const newLikeState = isLikeClicked === true ? null : true;
              setisLikeClicked(newLikeState);
              fetch(`http://localhost:7777/feed/like` , {
                method : 'PATCH',
                credentials : 'include',
                headers : {
                  'content-type' : 'application/json' 
                },
                body : JSON.stringify({
                  _id : post._id,
                  isLikeClicked : newLikeState
                })
              }).then((resp) => resp.json())
                .then((data) => {
                  setLike(data.likes)
                }).catch((err) => {
                  throw new Error(`Error Occured ${err.message}`)
                })
            }} className={`${isLikeClicked === true ? 'bg-blue-500 cursor-pointer rounded-full' : 'cursor-pointer'}`}/> {like}
          </span>
          <span className="flex items-center gap-1">
            <ThumbsDown size={14} onClick={(e) => {
              e.preventDefault()
              const newLikeState = isLikeClicked === false ? null : false;
              setisLikeClicked(newLikeState)
              fetch(`http://localhost:7777/feed/dislike` , {
                method : 'PATCH',
                credentials : 'include',
                headers : {
                  'content-type' : 'application/json'
                },
                body : JSON.stringify({
                  _id : post._id,
                  isLikeClicked : newLikeState
                })
              }).then((resp) => resp.json())
                .then((data) => {
                  setDislike(data.dislikes)
                }).catch((err) => {
                  throw new Error(`Error Occured ${err.message}`)
                })
            }} className={`${isLikeClicked === false ? 'bg-blue-500 cursor-pointer rounded-full' : 'cursor-pointer'}`}/> {disLike}
          </span>
        </div>
        <a
          href={post.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
        >
          Apply <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default PostCard;