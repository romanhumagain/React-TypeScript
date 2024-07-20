import Button from "./components/Button"
import Greet from "./components/Greet"
import Heading from "./components/Heading"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"
function App() {

  const name = "Roman Humagain"

  const personName = {
    first: 'Roman',
    last: 'Humagain'
  }

  const personList = [
    {
      first: 'Roman',
      last: 'Humagain'
    },
    {
      first: 'Raemon',
      last: 'Thapa'
    },
    {
      first: 'Rooman',
      last: 'Hmgn'
    }
  ]

  return (
    <>
      <Heading>Hello I am Learning React Typescript</Heading>
      <Greet name={name} messageCount={20} isLoggedin={true} />
      <Person personName={personName} />
      <PersonList names={personList} />

      <Status status="success" />

      <Button handleClick = {(event)=>{
        alert(event)
      }}/>
    </>
  )
}

export default App
