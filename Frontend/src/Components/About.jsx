import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className='container'>
            <div className='banner'>
                <div className='top'>
                    <h1 className='heading'>ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p>What started as a humble family recipe passed down 
                    through generations has grown into a journey of bringing 
                    comforting, high-quality dishes to your table.
                    We believe in the magic of fresh ingredients and 
                    the joy of sharing a great meal with loved ones. 
                    Every recipe featured here is crafted with care, aimed
                     at bringing people together, one delicious bite at a time."</p>
                     <Link to= {"/"}>
                     Explore Menu{" "}
                     <span>
                        <HiOutlineArrowNarrowRight/>
                     </span>
                     </Link>
            </div>
            <div className='banner'>
                <img src="/about.png" alt="about"/>
            </div>
        </div>
    </section>
  )
}

export default About;