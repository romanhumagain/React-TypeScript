
type statusProps = {
  status :'loading' | 'success' | 'error'
}

const Status = ({status}:statusProps) => {
  let message

  if(status === "loading"){
    message = "Loading....."
  }
  else if(status === "success"){
    message = "Data fetched Successfully"
  }
  else if (status === "error"){
    message = "Error occurs"
  }

  return (
    <div>{message}</div>
  )
}

export default Status