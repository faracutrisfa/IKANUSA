import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="justify-center pt-6 sm:pt-0">
            <div className="w-full overflow-hidden sm:max-w-md xl:max-w-2xl sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
