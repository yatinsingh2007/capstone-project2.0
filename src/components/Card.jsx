import React from 'react'

const Card = ({key , title , content , date , deadline , image}) => {
  return (
   <>
      <div className='p-2 bg-white border-2 border-neutral-600 m-2 rounded-lg mx-48' key={key}>
          <h1>{title}</h1>
          <p>{content}</p>
          <div>
            <img src = {image}/>
          </div>
      </div>
   </>
  )
}

export default Card
