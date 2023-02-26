import  spinner from "../assets/loading-gif.gif"
function Spinner() {
  return (
    <img src={spinner} alt="Loading..." style={{width:"50px",margin:"auto",display:"block",backgroundColor:"inherit"}} />
  )
}

export default Spinner