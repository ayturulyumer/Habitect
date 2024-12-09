import { Link } from 'react-router-dom';
import habitLogo from '../../assets/habitlogo.png';



export default function NavbarTop() {


    return (
        <nav className="navbar bg-custom-gradient ">
            <div className="navbar-start mx-8">
                <Link to="/" className="text-3xl font-light text-primary tracking-normal ">Habitect</Link>
            </div>
            <div className="navbar-center">
                <ul className="flex gap-20 mr-4">
                    <li className="hover-red-underline cursor-pointer">Pricing</li>
                    <li className="hover-red-underline cursor-pointer">FAQ</li>
                    <li className="hover-red-underline cursor-pointer">About</li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="flex mx-20">
                    <button className="btn btn-md btn-outline  text-white">Login</button>
                </ul>
            </div>
        </nav>




    );
}
