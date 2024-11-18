import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'

const LandingPageLayout = ({ children }) => {
    return (
        <div className='font-poppins'>
            <Navbar />
            <div className='pt-[87px]'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LandingPageLayout
