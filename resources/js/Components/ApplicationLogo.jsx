import { Link } from "@inertiajs/react";

export default function ApplicationLogo(props) {
    return (
        <Link  href={route('welcome')}>
            <img {...props}
                src="/IkaNusaLogo.webp"
                alt="Logo"
                className="w-44 -mb-2 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
            />
        </Link>
    );
}
