import LandingPageLayout from '@/Layouts/LandingPageLayout'
import React from 'react'
import { Head } from '@inertiajs/react'
import NotPage from '@/Components/NotPage'

const Layanan = () => {
    return (
        <section>
            <Head title="Layanan" />
            <LandingPageLayout>
                <NotPage />
            </LandingPageLayout>
        </section>
    )
}

export default Layanan
