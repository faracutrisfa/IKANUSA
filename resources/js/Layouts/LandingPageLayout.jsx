import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'

const LandingPageLayout = ({ children, user }) => {
    return (
        <div className='font-poppins'>
            <Navbar user={user}/>
            <div className='pt-[87px]'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LandingPageLayout
