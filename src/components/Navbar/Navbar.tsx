"use client"; // Se você estiver usando App Router, adicione esta linha

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Importe o componente Link
import Logo from "../../img/logo.png";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
                <Image
                    src={Logo}
                    alt="Dental Logo"
                    width={40}
                    height={50}
                />
                <div className="flex flex-col text-sm">
                    <p className="font-bold text-gray-800">Dental Care</p>
                    <p className="text-gray-500">Clínica Odontológica</p>
                </div>
            </Link>

            {/* Menu de navegação para Desktop */}
            <ul className="hidden lg:flex items-center space-x-8 text-gray-600 font-medium">
                <li><Link href="#" className="hover:text-blue-500 transition-colors">Início</Link></li>
                <li><Link href="#" className="hover:text-blue-500 transition-colors">Serviços</Link></li>
                <li><Link href="#" className="hover:text-blue-500 transition-colors">Sobre</Link></li>
                <li><Link href="#" className="hover:text-blue-500 transition-colors">Depoimentos</Link></li>
                <li><a href="#contato" className="hover:text-blue-500 transition-colors">Contato</a></li>
            </ul>

            {/* Botão de Agendar Consulta para Desktop */}
            <button className="hidden lg:block bg-[linear-gradient(to_right,#5E7DF2,#2ECC71)] text-white px-6 py-3 shadow-md rounded-full font-medium transition-colors hover:from-[#4a6be2] hover:to-[#25a95e]">
                Agendar Consulta
            </button>

            {/* Botão do Hambúrguer para Mobile */}
            <button
                className="lg:hidden text-gray-800"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Menu Mobile (Drawer) */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-6 lg:hidden">
                    <button
                        className="absolute top-6 right-6 text-gray-800"
                        onClick={toggleMobileMenu}
                    >
                        <X size={28} />
                    </button>
                    <ul className="flex flex-col space-y-8 text-xl font-medium text-gray-800">
                        <li><Link href="#" onClick={toggleMobileMenu} className="hover:text-blue-500 transition-colors">Início</Link></li>
                        <li><Link href="#" onClick={toggleMobileMenu} className="hover:text-blue-500 transition-colors">Serviços</Link></li>
                        <li><Link href="#" onClick={toggleMobileMenu} className="hover:text-blue-500 transition-colors">Sobre</Link></li>
                        <li><Link href="#" onClick={toggleMobileMenu} className="hover:text-blue-500 transition-colors">Depoimentos</Link></li>
                        <li><a href="#contato" onClick={toggleMobileMenu} className="hover:text-blue-500 transition-colors">Contato</a></li>
                    </ul>
                    <button className="mt-10 w-full max-w-xs bg-[linear-gradient(to_right,#5E7DF2,#2ECC71)] text-white px-6 py-3 shadow-md rounded-full font-medium">
                        Agendar Consulta
                    </button>
                </div>
            )}
        </nav>
    );
};