

import Logo from '../assets/logo.png'
import { HiOutlineCurrencyDollar } from 'react-icons/hi';

const Nav = ({ coin }: { coin: number }) => {

  return (
    <nav className=' bg-red-100'>
      <div className='container mx-auto flex justify-between items-center'>
        <img src={Logo} alt="" />

        <ul className='flex gap-8 items-center'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <h2 className='font-bold text-3xl flex gap-1 items-center'><HiOutlineCurrencyDollar />{coin}</h2>
      </div>
    </nav>
  );
};

export default Nav;