import React from 'react';
import { Link } from 'react-router-dom';
import Education from '../Components/Education';

const About = () => {
    return (
        <div >
            <div className='w-10/12 mx-auto mt-5'>
            <h1 className='text-center font-bold my-3 text-2xl'>About</h1>
            <div className="card lg:card-side bg-base-100 border">
                <figure>
                    <img
                        src="https://i.ibb.co.com/pjbMktY/me.jpg"
                        className='size-44'
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">I'M MURAD HOSHEN</h2>
                <div>
                <p>I'm your Digital Market Assistant.</p>
              
                </div>
                    <div className="card-actions justify-end">
                        <Link to='/portfolio' className="btn btn-primary">Check My Pre-Work</Link>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-2xl font-bold mt-5 py-5 text-center'>EDUCATIONAL QULIFICATIONS</h1>
            <Education></Education>
            </div>

            </div>
            <div className='py-5  text-center'>
                <h1 className='text-center text-2xl font-bold py-5 '>My Skills</h1>
                {/* <div className='grid grid-cols-4 gap-5 mx-5'>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>Digital Marketing</h1>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>Media Buying </h1>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>Search Arbitrage</h1>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>Content Arbitrage</h1>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>( Native, Facebook and TikTok)</h1>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>TikTok Ads Specialis</h1>
                </div> */}


<ul className="timeline  justify-center">
  <li>
    <div className="timeline-start timeline-box bg-green-500 text-white">Digital Marketing</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="red"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="red"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box bg-green-500 text-white">Media Buying</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start timeline-box bg-green-500 text-white">Search Arbitrage</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="red"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="red"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box bg-green-500 text-white">Content Arbitrage</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start timeline-box bg-green-500 text-white">( Native, Facebook and TikTok)</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="red"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
  </li>
</ul>
            </div>




            <div>
                <footer className="footer footer-center bg-base-300 text-base-content p-4 bottom-0">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Murad</p>
                        <p className='text-xs text-slate-500'>Designed by Shahidul Islam</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default About;