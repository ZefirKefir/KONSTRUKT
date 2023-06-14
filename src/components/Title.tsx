import { RootState } from "../redux/store";
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import tw from "twin.macro";

type TitleProps = {
  children?: string,
  centered?: boolean,
}
const Title = ({ children, centered = false }: TitleProps) => {
  const theme = useSelector((state: RootState) => state.theme);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  })
  return (
    <div className="" ref={ref}>
      <Text className={`${centered ? 'text-center' : ''} ${theme === 'light' ? 'text-black' : 'text-primary'} ${inView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>{children}</Text>
      <Line className={`${centered ? 'mx-auto' : ''} ${theme === 'light' ? 'bg-primary' : 'bg-white'} ${inView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`} />
    </div>
  )
}

const Text = tw.h4`
  font-bold
  text-lg leading-5 tracking-[2.3px]
  uppercase
  duration-300
`;
const Line = tw.div`
  w-[50px] h-0.5
  mt-[10px]
  duration-500
`;

export default Title;