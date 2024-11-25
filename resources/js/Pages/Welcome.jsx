import LandingPageLayout from '@/Layouts/LandingPageLayout';
import { Head, Link } from '@inertiajs/react';
import Hero from './LandingPage/Hero';
import Layanan from './LandingPage/Layanan';
import Info from './LandingPage/Info';
import RekomendasiProduk from './LandingPage/RekomendasiProduk';
import Ulasan from './LandingPage/Ulasan';

export default function Welcome() {
    return (
        <section>
            <Head title="Welcome" />
            <LandingPageLayout>
                <div className='bg-light-blue-active'>
                    <div className='bg-dark-blue-active lg:bg-gradient-to-b lg:from-[#0E538C] lg:to-[#DAF0F9] rounded-b-[50px] lg:rounded-none'>
                        <Hero />
                    </div>
                    <Layanan />
                    <Info />
                    <RekomendasiProduk />
                    <Ulasan />
                </div>
            </LandingPageLayout>
        </section>
    );
}
