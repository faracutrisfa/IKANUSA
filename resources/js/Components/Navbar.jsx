import React, { useState } from 'react';
import { FiMenu, FiX, FiHome, FiBox, FiLayers, FiBook, FiHelpCircle } from 'react-icons/fi';
import NavLink from './NavLink';
import ApplicationLogo from './ApplicationLogo';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { Link } from '@inertiajs/react';

export default function Navbar({ user }) { // Get user from props
    const [activeLink, setActiveLink] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (link) => {
        setActiveLink(link);
        setIsOpen(false);
    };

    return (
        <nav className="px-10 lg:px-14 xl:px-20 fixed top-0 left-0 right-0 z-50 lg:bg-[#0E538C] bg-light-blue-active">
            <div className="flex justify-between items-center py-4">
                <div className="pb-3">
                    <ApplicationLogo />
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-2xl focus:outline-none"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                <div
                    className={`fixed top-0 left-0 h-full w-3/4 md:w-1/2 bg-dark-blue-active shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } z-50 lg:static lg:translate-x-0 lg:h-auto lg:w-auto lg:bg-transparent lg:shadow-none lg:flex lg:items-center`}
                >
                    <div className="flex flex-col px-10 gap-6 mt-4 lg:flex-row lg:mt-0 xl:gap-24">
                        <div className="lg:hidden pb-3">
                            <ApplicationLogo />
                        </div>

                        <NavLink
                            href="/"
                            active={activeLink === 'home'}
                            onClick={() => handleNavClick('home')}
                            className="flex items-center gap-2 lg:gap-0 lg:flex-row text-white border-b-4 hover:text-white focus:text-white xl:text-lg lg:text-sm"
                        >
                            <FiHome className="lg:hidden" /> Home
                        </NavLink>
                        <NavLink
                            href="/produk"
                            active={activeLink === 'produk'}
                            onClick={() => handleNavClick('produk')}
                            className="flex items-center gap-2 lg:gap-0 lg:flex-row text-white border-b-4 hover:text-white focus:text-white xl:text-lg lg:text-sm"
                        >
                            <FiBox className="lg:hidden" /> Produk
                        </NavLink>
                        <NavLink
                            href="/layanan"
                            active={activeLink === 'layanan'}
                            onClick={() => handleNavClick('layanan')}
                            className="flex items-center gap-2 lg:gap-0 lg:flex-row text-white border-b-4 hover:text-white focus:text-white xl:text-lg lg:text-sm"
                        >
                            <FiLayers className="lg:hidden" /> Layanan
                        </NavLink>
                        <NavLink
                            href="/edukasi"
                            active={activeLink === 'edukasi'}
                            onClick={() => handleNavClick('edukasi')}
                            className="flex items-center gap-2 lg:gap-0 lg:flex-row text-white border-b-4 hover:text-white focus:text-white xl:text-lg lg:text-sm"
                        >
                            <FiBook className="lg:hidden" /> Edukasi
                        </NavLink>
                        <NavLink
                            href="/faq"
                            active={activeLink === 'faq'}
                            onClick={() => handleNavClick('faq')}
                            className="flex items-center gap-2 lg:gap-0 lg:flex-row text-white border-b-4 hover:text-white focus:text-white xl:text-lg lg:text-sm"
                        >
                            <FiHelpCircle className="lg:hidden" /> FAQ
                        </NavLink>
                    </div>

                    <div className="flex flex-col gap-4 mt-6 px-10 lg:hidden">
                        <Link href="/loginBuyer">
                            <SecondaryButton className="font-bold bg-transparent text-white hover:bg-normal-blue-active">
                                Sign Up
                            </SecondaryButton>
                        </Link>
                        <Link href="/registerBuyer">
                            <PrimaryButton className="font-bold bg-normal-blue-active hover:bg-transparent hover:border-normal-blue-active">
                                Gabung
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:flex gap-4">
                    {user ? (
                        <div className="text-white font-bold">
                            Welcome, {user.name}
                        </div>
                    ) : (
                        <>
                            <Link href="/loginBuyer">
                                <SecondaryButton className="font-bold bg-transparent text-white hover:bg-normal-blue-active">
                                    Log In
                                </SecondaryButton>
                            </Link>
                            <Link href="/registerBuyer">
                                <PrimaryButton className="font-bold bg-normal-blue-active hover:bg-transparent hover:border-normal-blue-active">
                                    Gabung
                                </PrimaryButton>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
