// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-dark2-bg p-8">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-green-bg text-lg font-bold  ">My portfolio</h1>
        <div className="flex space-x-8">
          <Link href="/" legacyBehavior>
            <a className="text-white hover:text-teal-400">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-white hover:text-teal-400">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-white hover:text-teal-400">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
