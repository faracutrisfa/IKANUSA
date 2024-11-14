export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium text-darker-blue ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
