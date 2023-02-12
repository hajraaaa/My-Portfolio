import React from 'react'
import { MdEmail } from 'react-icons/md'
import { VscGithubInverted } from 'react-icons/vsc'
import { SiLinkedin } from 'react-icons/si'

const Contact = () => {
    return (
        <>
            <h1 className='text-center my-5'>Contact Me</h1>

            <div id='contact' className='container d-lg-flex d-sm-flex justify-content-around  p-5'>

                <div className='head '>
                    <h2>Want to Contact Me?</h2>
                    <p className='text'>You can find me on these platforms:</p>
                </div>

                <div className='logo'>
                    <p>
                        <MdEmail />
                        <a href="http://github.com/hajraaa"> hajramasood134@gmail.com</a>
                    </p>

                    <p>
                        <VscGithubInverted />
                        <a href="http://github.com/hajraaa"> Github</a>
                    </p>

                    <p>
                        <SiLinkedin />
                        <a href="http://linkedin.com/hajra-masood-5650a9217"> LinkedIn</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contact
