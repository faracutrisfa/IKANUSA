import { cn } from '../Utils/cn';

export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={cn(
                'inline-flex items-center rounded-md border-2 border-gray-300 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-darker-blue shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-normal-blue-active focus:ring-offset-2 disabled:opacity-25',
                disabled && 'opacity-25',
                className 
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}