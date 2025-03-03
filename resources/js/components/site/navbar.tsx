import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ReactNode, useEffect, useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-800/90 py-2 shadow-md backdrop-blur-md' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-12 w-auto fill-emerald-400" />
            <span className="ml-3 hidden text-xl font-semibold text-emerald-400 sm:block">Forest Treetop Holiday Resort</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/accommodations">Accommodations</NavLink>
            <NavLink href="/amenities">Amenities</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Button className="rounded-none bg-green-700 px-4 py-2 text-white shadow-2xl transition-colors duration-300 hover:bg-green-800">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant={'ghost'} onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-label="Toggle menu">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-4 left-4 mt-4 rounded-lg border border-gray-100 bg-white p-4 shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" setIsMenuOpen={setIsMenuOpen}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/accommodations" setIsMenuOpen={setIsMenuOpen}>
                Accommodations
              </MobileNavLink>
              <MobileNavLink href="/amenities" setIsMenuOpen={setIsMenuOpen}>
                Amenities
              </MobileNavLink>
              <MobileNavLink href="/gallery" setIsMenuOpen={setIsMenuOpen}>
                Gallery
              </MobileNavLink>
              <MobileNavLink href="/contact" setIsMenuOpen={setIsMenuOpen}>
                Contact
              </MobileNavLink>
              <Link
                href="#"
                className="rounded-none bg-green-700 px-4 py-2 text-center text-white transition-colors duration-300 hover:bg-green-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Desktop Nav Link Component
function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-medium text-white transition-colors duration-300 hover:text-green-700">
      {children}
    </Link>
  );
}

// Mobile Nav Link Component
function MobileNavLink({ href, children, setIsMenuOpen }: { href: string; children: ReactNode; setIsMenuOpen: (value: boolean) => void }) {
  return (
    <Link
      href={href}
      className="block px-2 py-1 font-medium text-black transition-colors duration-300 hover:text-green-700"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </Link>
  );
}
