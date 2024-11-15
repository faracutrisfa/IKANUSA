import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${active
                ? 'border-normal-blue-active bg-indigo-50 text-dark-blue-active focus:border-normal-blue-hover focus:bg-light-blue-active focus:text-dark-blue-hover'
                : 'border-transparent text-darker-blue hover:border-gray-300 hover:bg-gray-50 hover:text-dark-blue-hover focus:border-gray-300 focus:bg-gray-50 focus:text-darker-blue'
                } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
