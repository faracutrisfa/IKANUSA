import LandingPageLayout from '@/Layouts/LandingPageLayout'
import React from 'react'
import { Head } from '@inertiajs/react'
import NotPage from '@/Components/NotPage'

const Edukasi = () => {
    return (
        <section>
            <Head title="Edukasi" />
            <LandingPageLayout>
                <NotPage />
            </LandingPageLayout>
        </section>
    )
}

export default Edukasi
