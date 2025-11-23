'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              As Chaves Internas da Oratória
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#sobre"
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Sobre
            </a>
            <a
              href="#beneficios"
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Benefícios
            </a>
            <a
              href="#depoimentos"
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              FAQ
            </a>
            <Button
              size="sm"
              className={
                isScrolled
                  ? ''
                  : 'bg-orange-600 text-white hover:bg-orange-700 border-0'
              }
            >
              Comprar Agora
            </Button>
          </div>

          <button
            className={`md:hidden ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
