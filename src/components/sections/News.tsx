import { useInView } from 'react-intersection-observer';
import tw from "twin.macro"

import ButtonPrimary from "../ButtonPrimary";

const News = () => {
  const { ref, inView } = useInView({
    threshold: .75,
    triggerOnce: true,
  })
  return (
    <Section ref={ref}>
      <Title className={inView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}>Newsletter Signup</Title>
      <Form className={inView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} action="#">
        <Input type='email' id='email' placeholder='test@youremail.com' />
        <ButtonPrimary>Signup</ButtonPrimary>
      </Form>
    </Section>
  )
}

const Section = tw.div`
  -mt-[2px]
  py-[1.875em]
  flex items-center justify-center
  flex-col sm:flex-row
  gap-7 sm:gap-[70px]
  bg-[#171819]
`;
const Title = tw.h3`
  font-bold
  text-[1.375rem] leading-[1.18182] 
  tracking-[0.846154px]
  text-white
  duration-300
`;
const Form = tw.form`
  flex
  duration-300 delay-100
`;
const Input = tw.input`
  px-4 max-w-[120px] xs:max-w-full
  text-sm leading-4 tracking-[0.07px]
  text-gray-800
  z-10
`;

export default News;