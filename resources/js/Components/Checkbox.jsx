export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-dark-blue-active shadow-sm focus:ring-dark-blue-hover ' +
                className
            }
        />
    );
}
