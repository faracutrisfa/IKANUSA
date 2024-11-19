import React from 'react'
import ApplicationLogo from './ApplicationLogo'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareThreads } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className='pb-5'>
            <div className='px-10 lg:px-14 xl:px-20 bg-cust-grey py-4'>
                <ApplicationLogo />
                <ul className='gap-5 mt-10 lg:mt-6 flex flex-col'>
                    <li className='flex items-center gap-2 lg:text-2xl'><HiOutlineLocationMarker />Jl. Raya Sawojajar No. 29, Kec. Kedungkandang, Kota Malang</li>
                    <li className='flex items-center gap-2 lg:text-2xl'><IoCallOutline />089667353733</li>
                    <li className='flex items-center gap-2 lg:text-2xl'><AiOutlineMail />IkaNusa123@gmail.com</li>
                </ul>
                <div className='flex flex-col items-end mt-8 lg:mt-16'>
                    <div className='flex flex-col items-center'>
                        <h1 className='lg:text-xl'>Ikuti Kami</h1>
                        <ul className='flex mt-1 gap-2'>
                            <li className='rounded-full p-1 bg-white '><FaFacebook /></li>
                            <li className='rounded-full p-1 bg-white '><FaTiktok /></li>
                            <li className='rounded-full p-1 bg-white '><IoLogoInstagram /></li>
                            <li className='rounded-full p-1 bg-white '><BsTwitterX /></li>
                            <li className='rounded-full p-1 bg-white '><IoLogoLinkedin /></li>
                            <li className='rounded-full p-1 bg-white '><FaSquareThreads /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='bg-white w-full mt-12 justify-center text-center flex'>Copyright © 2024 PT IkaNusa | Powered by IkaNusa</p>
        </section>
    )
}

export default Footer
