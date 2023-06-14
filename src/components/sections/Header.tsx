import tw from 'twin.macro';
import { useInView } from 'react-intersection-observer';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../redux/reducers/themeReducer';
import { RootState } from '../../redux/store';

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Logo from '../Logo';

const Header = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: .75,
    triggerOnce: true,
  })

  return (
    <Section ref={ref}>
      <Logo classNames={`${inView ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} self-start ml-5 xs:self-center xs:ml-0`} />
      <Switch className={inView ? 'translate-y-0 opacity-100 delay-[.8s]' : '-translate-y-8 opacity-0'}>
        <BsFillMoonStarsFill size={30}
          onClick={() => {
            dispatch(setTheme('light'));
            localStorage.setItem('theme', 'light')
          }}
          className={`${theme === 'dark' ? 'translate-y-0' : '-translate-y-[100px]'} absolute right-0 top-0 text-slate-200 hover:text-white duration-500 cursor-pointer`} />
        <BsFillSunFill size={30}
          onClick={() => {
            dispatch(setTheme('dark'));
            localStorage.setItem('theme', 'dark')
          }}
          className={`${theme === 'light' ? 'translate-y-0' : '-translate-y-[100px]'} absolute right-0 top-0 text-slate-200 hover:text-white duration-500 cursor-pointer`} />
      </Switch>
      <HeaderTitle className={inView ? 'translate-y-0 opacity-100 delay-200' : '-translate-y-6 opacity-0'}>Partner with KONSTUCT
        <HeaderText className={inView ? 'translate-y-0 opacity-100 delay-300' : '-translate-y-3 opacity-0'}>
          An award-winning construction management firm
        </HeaderText>
      </HeaderTitle>
      <ScrollDownBtn className={inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} onClick={() => {
        scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        })
      }}>scroll down</ScrollDownBtn>
    </Section>
  )
}

const Section = tw.header`
  flex flex-col items-center justify-between
  pt-10 pb-16 px-2
  relative
  w-full h-[100vh]
  snap-center
  bg-main bg-cover bg-center
`;
const HeaderTitle = tw.h1`
  font-['Bebas Neue']
  text-6xl
  tracking-[5.71px]
  uppercase
  text-center
  text-white
  duration-[.4s]
`;
const HeaderText = tw.span`
  block
  mt-1
  normal-case
  font-body font-semibold
  text-base tracking-normal
  duration-[.4s]
`;
const ScrollDownBtn = tw.button`
  uppercase
  font-semibold
  text-[11px] leading-[13px]
  tracking-[3.7px]
  py-2 px-4
  text-white
  duration-[.4s]
  delay-500
`;
// Theme Switch
const Switch = tw.div`
  absolute
  top-8 right-8
  duration-[.4s]
`;

export default Header;