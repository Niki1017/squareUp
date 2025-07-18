import './css/Header.css';
import logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/work', name: 'Work' },
    { path: '/process', name: 'Process' },
    { path: '/about', name: 'About' },
    { path: '/careers', name: 'Careers' },
];

export default function Header() {
    const location = useLocation();

    return (
        <header>
            <div className='container'>
                <Link to="/" className='left'>
                    <img src={logo} alt='logo' />
                    <h1>SquareUp</h1>
                </Link>
                <ul className='center'>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='right'>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        </header>
    );
}