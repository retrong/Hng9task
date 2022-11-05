import React from 'react';
import { arrow, profileImg, slack, github, dot } from '../assets';
import Footer from "./Footer";

function LinkTree() {
  return (
    <section>
        <div className='main'>
            
            <div className='arrow'><img src={arrow} alt="Arrow" /></div>

            <div className='dot'><img src={dot} alt="Dot" /></div>

            <div className='header'>
                <div>
                    <img src={profileImg} alt="profile" id='profile__img'/>
                    <h1 id='twitter'>FvtvreAce</h1>

                    {/* slack username */}

                    {/* <h2 id='slack'>@Xavier</h2>*/}
                </div>
            </div>
            
            <div className='content'>

                <a href="https://twitter.com/FvtvreAce" className='btn'>Twitter Link</a>

                <a href="https://training.zuri.team/" id='btn__zuri' className='btn'>Zuri Team</a>
                <a href="http://books.zuri.team/" id='books' className='btn'>Zuti Books</a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=Xavier_fury" id='book__python' className='btn'>Python Books</a>
                <a href="https://background.zuri.team/" id='pitch' className='btn'>Background Check for Coders</a>
                <a href="https://books.zuri.team/design-rules" id='book__design' className='btn'>Design Books</a>
                <a href="./Contact" id='Contact' className='btn'>Contact Me</a>
            </div>

        </div>

        <div className='socials'>
            <div>
                <img src={slack} alt="slack" />
                <img src={github} alt="github" />
            </div>
        </div>

        <Footer />
    </section>
  )
}

export default LinkTree