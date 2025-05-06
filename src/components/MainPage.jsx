import React, { useEffect , useState} from 'react'
import Card from './Card'
import Nav from './Nav'
const MainPage = () => {
  const [data , setData] = useState([])
  useEffect(() => {
    fetch(`https://mocki.io/v1/4a3967d9-ec73-4232-885e-c1b03f41d49c`)
    .then((resp) => resp.json())
    .then((data) => {
      setData(data);
      console.log(data)
    })
  },[])
  return (
    <>
    <div className='bg-slate-100 min-h-screen w-full pt-8'>
      <Nav/>
      <div className='mt-12'>
        {data.map((ele) => {
          return <Card key = {ele.id} title = {ele.title}  />
        })}
      </div>
    </div>
    </>
  )
}

export default MainPage
