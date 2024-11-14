import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'

const LandingPageLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='pt-20'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LandingPageLayout
