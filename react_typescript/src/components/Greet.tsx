type personName = {
  name: string
}

const Greet = (props : personName) => {
  return (
    <div>Hello MR. {props.name}</div>
  )
}

export default Greet