import React from 'react'
import Testomonial from './Testimonial';

const GettingStartedSection = () => {
    return (
        <section className='getting-started-section h-screen'>
            <div className='lg:px-[108px] lg:py-[59px]' >
                <h1 className='text-2xl font-medium text-primary-light text-left'> Our Solution</h1>
                <p className='text-thin text-left mt-[7px]'>
                    Zenpply is developing an innovative AI-powered platform designed to revolutionize the job application process. Our solution will streamline and automate the submission of applications across various online job portals, providing you with a seamless and time-efficient experience. With Zenpply, you can focus on what matters most - showcasing your skills and securing the opportunities you deserve.
                </p>
            </div>

            <div>
                <h1 className='main-heading'> How to use AI-Job-Link-Pro</h1>
                <h3 className='sub-heading mt-[7px]'>A Little Description About How To Apply For Job </h3>
            </div>

            <Testomonial/>


        </section>
    )
}

export default GettingStartedSection;
