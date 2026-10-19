import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl font-bold text-[#C2F800]">404</h1>
            <h2 className="text-2xl font-bold mt-4">Page Not Found</h2>
            <p className="text-[#9CA3AF] mt-2">The page you are looking for does not exist.</p>
            <Link href="/"
            className="mt-6 bg-[#C2F800] text-black px-6 py-3 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-[#a2ec17] cursor-pointer">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;