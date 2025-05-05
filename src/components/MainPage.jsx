import React, { useEffect , useState} from 'react'
import Card from './Card'
const MainPage = () => {
  const [data , setData] = useState([])
  useEffect(() => {
    fetch(`https://mocki.io/v1/eff78c85-f307-4093-9841-7f88b1d1e752`)
    .then((resp) => resp.json())
    .then((data) => setData(data))
  },[])
  return (
    <>
      {data.map((ele) => {
        return <Card key = {ele.id}/>
      })}
    </>
  )
}

export default MainPage
