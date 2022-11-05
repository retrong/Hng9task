import React from 'react'
import { zuri, i4g } from "../assets"

function footer() {
  return (
    <footer>
        <hr />
        <div className='footer'>
            <div><img src={zuri} alt="zuri" /></div>
            <div><h3>HNG Internship 9 Frontend Task</h3></div>
             <div><img src={i4g} alt="i4g" /></div>
        </div>
    </footer>
  )
}

export default footer