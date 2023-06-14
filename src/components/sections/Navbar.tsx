import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import tw from "twin.macro"

import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import Logo from "../Logo";
import { RootState } from '../../redux/store';

const Navbar = () => {
  const [mobileVisible, setMobileVisible] = useState(false);
  const theme = useSelector((state: RootState) => state.theme);

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <Nav>
      <Logo black={theme === 'light'} width={80} />
      <MobileNavBtn onClick={() => setMobileVisible(!mobileVisible)}>
        <CgMenuRightAlt className='text-[#222]' size={35} />
      </MobileNavBtn>
      <MobileNav className={mobileVisible ? 'z-10' : '-z-10'}>
        <MobileLayer className={mobileVisible ? 'translate-x-0' : '-translate-x-[100%]'} onClick={() => setMobileVisible(false)} />
        <MobileNavList className={mobileVisible ? 'translate-x-0' : 'translate-x-[100%]'}>
          <MobileMenuCloseBtn onClick={() => setMobileVisible(false)}>
            <CgClose className='text-[#222]' size={35} />
          </MobileMenuCloseBtn>
          <MobileNavItem className={theme === 'light' ? 'text-gray-800' : 'text-white'}>Home</MobileNavItem>
          <MobileNavItem className={theme === 'light' ? 'text-gray-800' : 'text-white'}>About</MobileNavItem>
          <MobileNavItem className={theme === 'light' ? 'text-gray-800' : 'text-white'}>Services</MobileNavItem>
          <MobileNavItem className={theme === 'light' ? 'text-gray-800' : 'text-white'}>Work</MobileNavItem>
          <MobileNavItem className={theme === 'light' ? 'text-gray-800' : 'text-white'}>Contact</MobileNavItem>
        </MobileNavList>
      </MobileNav>
      <NavList>
        <NavItem ref={ref} className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} ${inView ? 'translate-y-0 opacity-100 delay-0' : '-translate-y-3 opacity-0'}`}>Home</NavItem>
        <NavItem ref={ref} className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} ${inView ? 'translate-y-0 opacity-100 delay-[.15s]' : '-translate-y-3 opacity-0'}`}>About</NavItem>
        <NavItem ref={ref} className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} ${inView ? 'translate-y-0 opacity-100 delay-[.3s]' : '-translate-y-3 opacity-0'}`}>Services</NavItem>
        <NavItem ref={ref} className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} ${inView ? 'translate-y-0 opacity-100 delay-[.45s]' : '-translate-y-3 opacity-0'}`}>Work</NavItem>
        <NavItem ref={ref} className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} ${inView ? 'translate-y-0 opacity-100 delay-[.6s]' : '-translate-y-3 opacity-0'}`}>Contact</NavItem>
      </NavList>
    </Nav>
  )
}

const Nav = tw.nav`
  flex justify-between items-center
  py-6
`;
const NavList = tw.ul`
  hidden
  sm:flex items-center sm:gap-8 md:gap-10
`;
const NavItem = tw.li`
  uppercase
  font-semibold
  hover:font-bold
  text-xs
  hover:text-primary
  hover:scale-110
  active:scale-100
  duration-500
  transition-all
  cursor-pointer
`;

// mobile
const MobileNavBtn = tw.button`
  block
  relative sm:hidden
  z-10
`;
const MobileNav = tw.div`
  fixed
  top-0 left-0
  w-full h-[100vh]
  flex items-center
`;
const MobileLayer = tw.div`
  fixed
  top-0 left-0
  w-full h-full
  bg-black/60

  duration-500
`;
const MobileNavList = tw.ul`
  absolute top-0 right-0
  w-1/3 h-full
  bg-white
  flex flex-col justify-center items-center gap-3

  duration-300
`;
const MobileNavItem = tw(NavItem)`
`;
const MobileMenuCloseBtn = tw.button`
  absolute
  top-5 right-5
`;

export default Navbar;