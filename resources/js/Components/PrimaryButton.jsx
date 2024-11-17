export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border-2 border-transparent bg-dark-blue-active px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-dark-blue-hover focus:bg-dark-blue-hover focus:outline-none focus:ring-2 focus:ring-normal-blue-active focus:ring-offset-2 active:bg-dark-blue-active ${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
