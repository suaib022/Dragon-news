import React from 'react';
import { AiOutlineGoogle, AiOutlineTwitter, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'

const RNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-2xl'>LogIn With</h2>
                <div className='flex flex-col'>
                    <button className="btn btn-outline lg:w-full">
                        <AiOutlineGoogle></AiOutlineGoogle>
                        Google
                    </button>
                    <button className="btn btn-outline lg:w-full">
                        <AiOutlineGithub></AiOutlineGithub>
                        GitHub
                    </button>
                </div>
            </div>
            {/* -------------- */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-2xl'>Find Us On</h2>
                <div className='flex flex-col'>
                    <a href="www.facebook.com" className='flex p-4 gap-3 text-lg rounded-t-lg border justify-center items-center'>
                        <FaFacebook></FaFacebook>
                        Facebook
                    </a>
                    <a href="www.facebook.com" className='flex p-4 gap-3 text-lg border justify-center items-center'>
                        <AiOutlineTwitter></AiOutlineTwitter>
                        Twitter
                    </a>
                    <a href="www.facebook.com" className='flex p-4 gap-3 text-lg rounded-b-lg border justify-center items-center'>
                        <AiOutlineInstagram></AiOutlineInstagram>
                        Instagram
                    </a>
                </div>
            </div>
            {/* -------------- */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-2xl'>Q Zone</h2>
                <div className='flex flex-col'>
                    <img src="../../../../Images/qZone1.png" alt="" />
                    <img src="../../../../Images/qZone2.png" alt="" />
                    <img src="../../../../Images/qZone3.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default RNav;