import React , {useState} from 'react'
import {ThumbsUp , ThumbsDown} from 'lucide-react'
const Card = ({key , company , title  , image , details , companyLogo}) => {
  const [like , setLike] = useState(null)
  const [unlike , setUnlike] = useState(null)
  return (
   <>
      <div className='p-4 bg-white border-2 border-neutral-600 m-2 rounded-lg md:mx-56 lg:mx-96 mx-16 w-full md:w-auto mb-8' key={key}>
        <div>
          <img src={companyLogo} className='rounded-full h-10 w-10'/>
          <h1 className='font-semibold p-2 text-xl' style={{fontFamily : "'Nunito Sans'"}}>{company}</h1>
        </div>
          <p className='md:text-base p-2 text-xs sm:mr-5' style={{fontFamily : "'Lexend Zetta'" , letterSpacing : '1px'}}>{title}</p>
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
        <input type='text' placeholder='Enter a message' className='w-full rounded-full p-3 border-2 border-gray-800 text-center'/>
      </div>
   </>
  )
}

export default Card
