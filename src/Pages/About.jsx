import React from 'react';
import { Link } from 'react-router-dom';

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
                    <h2 className="card-title">I'M MURAD HOSSAIN</h2>
                    <p>I'm your Digital Market Assistant.</p>
                    <div className="card-actions justify-end">
                        <Link to='/portfolio' className="btn btn-primary">Check My Pre-Work</Link>
                    </div>
                </div>
            </div>

            </div>
            <div className='py-5'>
                <h1 className='text-center text-2xl font-bold py-5 '>My Skills</h1>
                <div className='grid grid-cols-4 gap-5 mx-5'>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>Digital Marketing</h1>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>Digital Marketing</h1>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>Digital Marketing</h1>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>Digital Marketing</h1>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>Digital Marketing</h1>
                    <h1 className='bg-cyan-800 text-white font-bold p-3 cursor-pointer hover:bg-red-500'>Digital Marketing</h1>
                </div>
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