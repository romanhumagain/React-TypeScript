type personNames = {
  name: string
  messageCount? : number
  isLoggedin : boolean
}

const Greet = (props : personNames) => {
  const {messageCount = 0} = props
  return (
    props.isLoggedin ? (
      <div>Hello MR. {props.name}. You have {messageCount} unread messages.</div>
    ):
    (
      <p>Welcome Guest !</p>
    )
    
  )
}

export default Greet