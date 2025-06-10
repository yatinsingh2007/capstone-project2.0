import {useEffect , useState} from 'react'
import OpportunityCard from './OppertunitieCard'
import Nav from './Nav'
const Oppertunities = () => {
  const [persons , setPersons] = useState([])
  useEffect(() => {
    fetch(`https://mocki.io/v1/5062a989-533b-42fb-af6f-28d0e1607bf8`)
    .then((resp) => resp.json())
    .then((data) => {
      setPersons(data)
  })
  },[])
  return (
    <>
        <Nav/>
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center pt-48">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {persons.map((person) => (
                <OpportunityCard key={person.id} photo={person.photo} bio={person.bio} name={person.name} job={person.job} company={person.company} />
              ))}
            </div>
          </div>
        </div>
    </>
  )
}

export default Oppertunities
