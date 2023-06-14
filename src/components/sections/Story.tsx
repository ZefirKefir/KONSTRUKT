import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useInView } from 'react-intersection-observer';
import tw from "twin.macro"

import Title from "../Title";
import images from "../../constants/images";

const Story = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const isLight = theme === 'light';

  const { ref: titleRef, inView: titleInView } = useInView({ threshold: .5, triggerOnce: true, });
  const { ref: descrRef, inView: descrInView } = useInView({ threshold: .5, triggerOnce: true, });
  const { ref: ref1, inView: inView1 } = useInView({ threshold: .5, triggerOnce: true, });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: .5, triggerOnce: true, });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: .5, triggerOnce: true, });

  return (
    <Section>
      <Title centered>Our Story</Title>
      <Content>
        <ContentText>
          <About ref={titleRef} className={`${isLight ? 'text-gray-800' : 'text-[#ccc]'} ${titleInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            Founded in 2011 by John Mathew Smith, <span className='text-primary'>Konstruct</span> has become the number one construction management firm
          </About>
          <AboutDescr ref={descrRef} className={`${isLight ? 'text-gray-800' : 'text-[#ccc]'} ${descrInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0 delay-100'}`}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          </AboutDescr>
        </ContentText>
        <ContentImgs>
          <Rect ref={ref1} className={inView1 ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}>
            <RectImg src={images.we1} />
            <RectTitle>We<br />plan</RectTitle>
          </Rect>
          <Rect ref={ref2} className={inView2 ? 'translate-x-0 opacity-100 delay-75' : 'translate-x-8 opacity-0'}>
            <RectImg src={images.we2} />
            <RectTitle>We<br />manage</RectTitle>
          </Rect>
          <Rect ref={ref3} className={inView3 ? 'translate-x-0 opacity-100 delay-150' : 'translate-x-8 opacity-0'}>
            <RectImg src={images.we3} />
            <RectTitle>We<br />build</RectTitle>
          </Rect>
        </ContentImgs>
      </Content>
    </Section>
  )
}

const Section = tw.div`
  mt-16
`;
const Content = tw.div`
  flex
  flex-col lg:flex-row
  justify-between items-start xl:items-end
  gap-6 sm:gap-12 lg:gap-8
  mt-12 sm:mt-20
`;
const ContentText = tw.div`
  grow-0 basis-[43%]
`;
const About = tw.p`
  font-bold
  text-xl leading-6 tracking-[0.1875px]
  mb-4 sm:mb-[30px]
  duration-500
`;
const AboutDescr = tw.p`
  font-normal
  text-[13px] leading-6 tracking-[0.1875px]
  duration-500
`;

const ContentImgs = tw.div`
  w-full lg:w-3/5 shrink
  grow-0
  flex
  flex-col sm:flex-row
  justify-end gap-4 lg:gap-5
  relative
`;
const Rect = tw.div`
  w-full sm:w-[33%] lg:w-[140px]
  aspect-[5/2] sm:aspect-[28/45]
  scale-100
  p-4
  relative
  duration-500
`;
const RectImg = tw.img`
  w-full h-full
  absolute inset-0
  object-cover object-center
  -z-10
`;
const RectTitle = tw.h4`
  font-extrabold
  text-[2.75rem] sm:text-3xl md:text-4xl lg:text-2xl leading-[1.3333] tracking-[0.1875px]
  uppercase
  text-white
`;

export default Story;