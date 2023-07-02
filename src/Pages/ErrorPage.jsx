import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h3>page no found.....</h3>
      <p>
        back to 
        <Link to='/'> home </Link>
        page
      </p>
    </div>
    
  )
}

export default ErrorPage