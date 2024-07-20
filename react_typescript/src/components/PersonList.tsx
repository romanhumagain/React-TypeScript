type personList = {
  names:{
    first:string
    last :string
  }[]
}

const PersonList = (props: personList) => {
  return (
    <>
      {props.names.map((name) =>
        <div>{name.first}  {name.last}</div>
      )}
    </>
  )
}

export default PersonList