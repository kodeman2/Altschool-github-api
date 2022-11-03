import React from 'react'
import {Link} from 'react-router-dom'





export default function ErrorPage() {

  return (
    <div className='errorpage'>
     <div className="errorcont">

     <h1>Test Errors Here</h1>
     <Link to="*">Error 404</Link>
     <Link to="/errortest">ErrorBoundaryTest</Link>
     </div>


    </div>
  )
}
