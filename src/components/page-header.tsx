import React from 'react';

const PageHeader: React.FC = () => {
    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="text-indigo-500 md:order-1">
                    <div className='inline-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        <h3 className='text-2xl font-semibold ps-2 pt-1'>My Products</h3>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default PageHeader;