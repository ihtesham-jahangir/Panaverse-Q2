import { FiLogIn } from 'react-icons/fi';

function Navbar() {
  return (
    <div className="bg-blue-700">
      <nav className="container mx-auto py-4 flex items-center justify-between">
        <h1 className="text-3xl text-white font-extrabold">Logo</h1>

        <ul className="flex space-x-4 text-white">
          <li className="hover:text-yellow-300 transition duration-300">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-yellow-300 transition duration-300">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-yellow-300 transition duration-300">
            <a href="/contact">Contact</a>
          </li>
          <li className="flex items-center space-x-2">
            <FiLogIn className="text-xl" />
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
