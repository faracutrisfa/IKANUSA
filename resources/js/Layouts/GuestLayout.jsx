import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col pt-6 sm:justify-center sm:pt-0">
            <div className="mt-6 w-full overflow-hidden sm:max-w-md xl:max-w-2xl sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
