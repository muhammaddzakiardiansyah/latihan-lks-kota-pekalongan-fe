import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const full_name = localStorage.getItem("full_name");
  const role = localStorage.getItem("role");
  return (
    <nav className="flex justify-between items-center bg-primary h-16 px-20">
      <h1 className="text-3xl font-semibold text-second cursor-pointer">Vara</h1>
      <ul className="hidden lg:flex md:justify-center lg:items-center lg:gap-x-8 font-medium">
        <Link to={'/'}>
        <li>
          <p className={`hover:text-white cursor-pointer ${location.pathname === '/' ? 'text-white' : ' '}`}>Beranda</p>
        </li>
        </Link>
        <Link to={'/data-perhitungan-suara'}>
        <li>
          <p className={`hover:text-white cursor-pointer ${location.pathname === '/data-perhitungan-suara' ? 'text-white' : ' '}`}>Data perhitungan suara</p>
        </li>
        </Link>
        <Link to={'/pemilihan'}>
        <li>
          <p className={`hover:text-white cursor-pointer ${location.pathname === '/pemilihan' ? 'text-white' : ' '}`}>Pemilihan</p>
        </li>
        </Link>
        {role == 'admin' ? (
        <Link to={'/kandidat'}>
        <li>
          <p className={`hover:text-white cursor-pointer ${location.pathname === '/kandidat' ? 'text-white' : ' '}`}>Kandidat</p>
        </li>
        </Link>
        ) : (
          ' '
        )}
        {!token ? (
          <Link to={'/login'}>
          <li className="ml-8">
            <button className="bg-blue-600 px-5 py-2 rounded hover:scale-105">Login</button>
          </li>
          </Link>
        ) : (
          <>
          <li className="ml-8">Hii {full_name ? full_name : ' '} 👋</li>
          <Link to={'/logout'}>
          <li>
            <button className="bg-red-600 px-5 py-2 rounded hover:scale-105">Logout</button>
          </li>
          </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
