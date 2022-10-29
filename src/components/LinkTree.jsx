import React from 'react';
import { arrow, profileImg, slack, github, zuri, i4g, dot } from '../assets';

function LinkTree() {
  return (
    <section>
        <div className='main'>
            
            <div className='arrow'><img src={arrow} alt="Arrow" /></div>

            <div className='dot'><img src={dot} alt="Dot" /></div>

            <div className='header'>
                <div>
                    <img src={profileImg} alt="profile" />
                    <h1>Eguoba E. Barth</h1>       
                </div>
            </div>
            
            <div className='content'>

                <a href="#" className='btn'>Twitter Link</a>
                <a href="#" className='btn'>Zuri Team</a>
                <a href="#" className='btn'>Zuti Books</a>
                <a href="#" className='btn'>Python Books</a>
                <a href="#" className='btn'>Background Check for Coders</a>
                <a href="#" className='btn'>Design Books</a>
            </div>

        </div>

        <div className='socials'>
            <div>
                <img src={slack} alt="slack" />
                <img src={github} alt="github" />
            </div>
        </div>


        <footer>
            <hr />
            <div className='footer'>
                <div><img src={zuri} alt="zuri" /></div>
                <div><h3>HNG Internship 9 Frontend Task</h3></div>
                <div><img src={i4g} alt="i4g" /></div>
            </div>
        </footer>
    </section>
  )
}

export default LinkTree