import Nav from "../nav"
import ApplyForm from '../ApplyForm'
import "./Landing.css"
import  "./apply.css"

function Apply() {
  
    return (
      <div className='Landing apply'>
          <Nav/>
          <ApplyForm/>
          <div className='light-box'>   
          </div>
      </div>
    )
  }
  
  export default Apply