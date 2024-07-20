type personName = {
  personName : {
  first:string, 
  last :string
}
}

const Person = (props : personName) => {
  return (
    <div>{props.personName.first} {props.personName.last}</div>
  )
}

export default Person