import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import tw from "twin.macro"

import ButtonPrimary from "../ButtonPrimary";
import { RootState } from "../../redux/store";

const GetInTouch = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const isLight = theme === 'light';

  const { ref, inView } = useInView({
    threshold: .5,
    triggerOnce: true,
  })

  return (
    <Section ref={ref} className={`get-in-touch ${isLight ? 'bg-sky-500/30' : 'bg-[#01212e]'}`}>
      <TouchTitle className={`${isLight ? 'text-gray-800' : 'text-white'} ${inView ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>Want to build<br />something amazing?</TouchTitle>
      <ButtonPrimary className={`${inView ? 'translate-y-0 opacity-100 delay-150 duration-300' : 'translate-y-8 opacity-0'}`}>Get in touch</ButtonPrimary>
    </Section >
  )
}

const Section = tw.div`
  w-full h-[500px]
  flex flex-col items-center
  bg-cover bg-center
`;
const TouchTitle = tw.h2`
  font-bold
  text-3xl tracking-[0.15px]
  text-center
  mt-[3.5rem] md:mt-[5.5rem] mb-9
  duration-300
`;

export default GetInTouch;