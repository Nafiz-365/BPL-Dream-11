import { AiFillDollarCircle } from 'react-icons/ai';
import Logo from '../assets/logo.png';


const Nav = ({coin}:{coin:number}) => {

    return (
        <div className="bg-amber-100">
            <nav className="flex justify-between items-center container mx-auto">
                <img src={Logo} alt="Logo" />
                <ul className="flex items-center gap-4">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <h2 className="font-bold text-3xl text-black flex gap-2 items-center">
                    <AiFillDollarCircle />
                    {coin}
                </h2>
            </nav>
        </div>
    );
};

export default Nav;
