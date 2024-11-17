import { Link } from '@inertiajs/react';
import { cn } from '../Utils/cn'; 

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={cn(
                'inline-flex items-center border-b-2 px-1 pt-1 text-center text-sm leading-5 transition duration-150 ease-in-out focus:outline-none',
                active
                    ? 'border-normal-blue-active text-darker-blue font-semibold focus:border-normal-blue-hover'
                    : 'border-transparent text-darker-blue hover:border-normal-blue-hover hover:text-dark-blue-active focus:border-normal-blue-hover focus:text-dark-blue-active',
                className 
            )}
        >
            {children}
        </Link>
    );
}