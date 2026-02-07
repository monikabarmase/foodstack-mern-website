import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Notfound = () => {
  return (
    <>
      <section className='notFound'>
        <div className='container'>
          <img src="/notFound.svg" alt="notFound"/>
          <h1>LOST</h1>
          <p> We can't find page</p>
          <Link to={"/"}>
          Back to Home{" "}
          <span>
            <HiOutlineArrowNarrowRight/>
            </span>
            </Link>
        </div>
      </section>
    </>
  );
};

export default Notfound;
