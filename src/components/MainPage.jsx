import React, { useEffect , useState} from 'react'
import Card from './Card'
import Nav from './Nav'
const MainPage = () => {
  const [data , setData] = useState([])
  useEffect(() => {
    fetch(`https://mocki.io/v1/75672d1d-baf0-4e14-8ae5-24f2dff346df`)
    .then((resp) => resp.json())
    .then((data) => {
      setData(data);
    })
  },[])
  return (
    <>
    <div className='bg-slate-100 min-h-screen w-full pt-8'>
      <Nav/>
      <div className='mt-12 md:mr-32 mr-0 md:ml-28'>
        {data.map((ele) => {
          return <Card key = {ele.id} company={ele.company} title = {ele.title} image={ele.postImage} details = {ele.description} companyLogo = {ele.companyLogo}/>
        })}
      </div>
    </div>
    </>
  )
}

export default MainPage
