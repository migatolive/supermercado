import React from "react";
import { Link, usePage } from '@inertiajs/react';

interface HeaderProps {
    cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
    const { auth } = usePage().props;

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Supermercado</h1>
                <nav className="-mx-3 flex flex-1 justify-end items-center">
                    {auth.user ? (
                        <>
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Carrito ({cartItemCount})
                            </Link>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="ml-4 rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Cerrar sesión
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Iniciar sesion
                            </Link>
                            <Link
                                href={route('register')}
                                className="ml-4 rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Registrarse
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
