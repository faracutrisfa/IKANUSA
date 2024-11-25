import React, { useState } from 'react';
import { FiMenu, FiX, FiHome, FiBox, FiLayers, FiBook, FiHelpCircle } from 'react-icons/fi';
import NavLink from './NavLink';
import ApplicationLogo from './ApplicationLogo';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { Link } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';

export default function Navbar({ user }) {
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
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border-2 border-light-blue-active px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out hover:bg-light-blue-active hover:text-dark-blue-active focus:outline-none"
                                    >
                                        {user.name}
                                        <svg
                                            className="-me-0.5 ms-2 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link
                                    href={route('logoutBuyer')}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
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