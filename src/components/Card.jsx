import React , {useState , useRef} from 'react'
import {ThumbsUp , ThumbsDown , LucideShare2} from 'lucide-react'
const Card = ({key , company , title  , image , details , companyLogo}) => {
  const [like , setLike] = useState(null)
  const [unlike , setUnlike] = useState(null)
  const [messages , setMessages] = useState([])
  const messageRef = useRef(null)
  return (
   <>
      <div className='p-4 bg-white border-2 border-blue-500 m-2 rounded-lg md:mx-56 lg:mx-96 mx-16 w-full md:w-auto' key={key}>
        <div>
          <img src={companyLogo} className='rounded-full h-10 w-10'/>
          <h1 className='font-semibold p-2 text-xl' style={{fontFamily : "'Nunito Sans'"}}>{company}</h1>
        </div>
          <p className='md:text-base p-2 text-xs sm:mr-5 font-bold' style={{fontFamily : "'MontSerrat'" , letterSpacing : '1px'}}>{title}</p>
          <div>
            <img src = {image} className='w-full rounded-3xl p-2' />
          </div>
          <div className='p-3'>
            <p style={{fontFamily : "'Jost'"}} className='md:text-3xl text-xl'>{details}</p>
          </div>
        <div className='flex gap-10 p-3'>
          <div className='flex flex-col justify-center items-center'>
            <ThumbsUp onClick={(e) => {
              e.preventDefault();
              setUnlike(null)
              setLike(!like)
            }} fill={like  ? 'green' : 'white'}/>
            <p className='md:text-base text-sm'>Like</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <ThumbsDown onClick={(e) => {
              e.preventDefault();
              setLike(null);
              setUnlike(!unlike)
            }} fill={!unlike ? 'white' : 'red'}/>
            <p className='md:text-base text-sm'>Dislike</p>
          </div>
          </div>
            {messages.length > 0 && (
          <div className="w-full bg-slate-100 h-40 overflow-y-auto flex flex-col-reverse p-3 space-y-2 space-y-reverse rounded-md mt-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className='max-w-[70%] px-4 py-2 rounded-lg text-sm break-words shadow bg-white text-gray-800 self-start'>
                {message}
              </div>
            ))}
          </div>
          )}
          <div className='flex justify-center items-center gap-6'>
          <input type="text" placeholder="Enter a message" className="w-full rounded-full p-3 text-left text-gray-800 placeholder:text-gray-400 border-2 border-blue-600" ref={messageRef}/>
          <div className='hover:cursor-pointer'>
            <LucideShare2 onClick={(e) => {
              e.preventDefault();
              const message = messageRef.current?.value.trim()
              if(!message)return;
              setMessages((messages) => [...messages , message]);
              messageRef.current.value = ``;
              return
            }}/>
          </div>
        </div>
      </div>
   </>
  )
}

export default Card
