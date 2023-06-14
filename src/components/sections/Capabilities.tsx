import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useInView } from 'react-intersection-observer';
import tw from "twin.macro"

import Title from "../Title";
import ButtonPrimary from "../ButtonPrimary";

import images from "../../constants/images";

const Capabilities = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const isLight = theme === 'light';

  const { ref: ref1, inView: inView1 } = useInView({ threshold: .5, triggerOnce: true, });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: .5, triggerOnce: true, });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: .5, triggerOnce: true, });
  return (
    <Section>
      <TitleFlex>
        <Title>Our Capabilities</Title>
        <TitleDescr className={isLight ? 'text-gray-800' : 'text-[#ccc]'}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          <ButtonPrimary>All services</ButtonPrimary>
        </TitleDescr>
      </TitleFlex>
      <Caps>
        <CapCard ref={ref1} className={`${isLight ? 'border-[#e6e6e6]' : 'border-[#2a2a2a]'} ${inView1 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <CapCardIcon index={0} />
          <CapCardTitle className={isLight ? 'text-gray-800' : 'text-[#ccc]'}>Project and construction management</CapCardTitle>
          <CapCardDescr className={isLight ? 'text-gray-800' : 'text-[#ccc]'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</CapCardDescr>
        </CapCard>
        <CapCard ref={ref2} className={`${isLight ? 'border-[#e6e6e6]' : 'border-[#2a2a2a]'} ${inView2 ? 'translate-x-0 opacity-100 lg:delay-100' : 'translate-x-10 opacity-0'}`}>
          <CapCardIcon index={1} />
          <CapCardTitle className={isLight ? 'text-gray-800' : 'text-[#ccc]'}>STRUCTURE AUDIT AND MAINTENANCE</CapCardTitle>
          <CapCardDescr className={isLight ? 'text-gray-800' : 'text-[#ccc]'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</CapCardDescr>
        </CapCard>
        <CapCard ref={ref3} className={`${isLight ? 'border-[#e6e6e6]' : 'border-[#2a2a2a]'} ${inView3 ? 'translate-x-0 opacity-100 lg:delay-200' : 'translate-x-10 opacity-0'}`}>
          <CapCardIcon index={2} />
          <CapCardTitle className={isLight ? 'text-gray-800' : 'text-[#ccc]'}>FACTORY CONSTRUCTION AND MODELING</CapCardTitle>
          <CapCardDescr className={isLight ? 'text-gray-800' : 'text-[#ccc]'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</CapCardDescr>
        </CapCard>
      </Caps>
    </Section>
  )
}

interface CapCardIconProps {
  index: number,
}
const CapCardIcon: React.FC<CapCardIconProps> = ({ index }) => {
  const theme = useSelector((state: RootState) => state.theme);
  const isLight = theme === 'light';

  return index === 0 ? (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="66.000000pt" height="75.000000pt" viewBox="0 0 66.000000 75.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
        fill={isLight ? '#545858' : '#aaa'} stroke="none">
        <path d="M346 734 c-9 -8 -16 -22 -16 -30 0 -11 -15 -14 -65 -14 -37 0 -65 -4
          -65 -10 0 -6 28 -10 64 -10 62 0 65 -1 68 -26 3 -29 -14 -26 191 -32 l57 -2 0
          -210 0 -209 -107 -3 -108 -3 -3 -32 -3 -33 106 0 c92 0 106 2 111 18 3 9 10
          25 15 34 5 10 9 116 9 237 0 249 7 231 -91 231 -46 0 -59 3 -59 15 0 12 15 15
          78 15 47 0 83 -5 90 -12 9 -9 12 -88 12 -294 0 -248 -2 -283 -16 -288 -9 -3
          -76 -6 -150 -6 l-134 0 0 205 c0 194 -1 205 -20 217 -15 10 -20 24 -20 55 0
          63 -39 90 -91 63 -13 -8 -19 -21 -19 -45 0 -27 -4 -35 -17 -35 -16 0 -18 8
          -15 64 4 81 -8 106 -51 106 -50 0 -57 -14 -57 -110 0 -75 -2 -87 -20 -98 -20
          -12 -20 -21 -18 -229 l3 -217 35 -20 c52 -31 200 -30 253 2 35 20 51 22 186
          22 101 0 151 4 159 12 17 17 17 599 0 616 -8 8 -45 12 -100 12 -78 0 -88 2
          -88 18 0 10 -5 23 -12 30 -17 17 -74 15 -92 -4z m82 -51 l3 -43 -35 0 c-36 0
          -36 0 -36 46 0 45 0 45 33 42 30 -3 32 -6 35 -45z m-308 -33 c0 -16 -7 -20
          -30 -20 -18 0 -30 5 -30 13 0 20 10 27 37 27 16 0 23 -6 23 -20z m0 -60 c0 -5
          -13 -10 -30 -10 -16 0 -30 5 -30 10 0 6 14 10 30 10 17 0 30 -4 30 -10z m140
          -25 c0 -20 -5 -25 -24 -25 -14 0 -28 5 -31 10 -12 19 4 40 30 40 20 0 25 -5
          25 -25z m-177 -65 c2 -72 -17 -67 -21 6 -2 39 0 55 9 52 7 -2 12 -26 12 -58z
          m37 0 c0 -33 -4 -60 -10 -60 -6 0 -10 27 -10 60 0 33 4 60 10 60 6 0 10 -27
          10 -60z m143 6 c-4 -15 -56 -12 -61 3 -3 9 6 11 29 9 19 -2 33 -7 32 -12z
          m-83 -36 c0 -29 -4 -40 -15 -40 -10 0 -15 10 -15 34 0 29 6 38 28 45 1 1 2
          -17 2 -39z m85 -10 c0 -10 -12 -16 -32 -18 -32 -3 -45 13 -26 32 13 12 58 2
          58 -14z m-191 -35 c61 -19 139 -19 191 0 22 8 41 15 41 15 1 0 1 -87 0 -192
          l-1 -193 -50 -18 c-57 -20 -142 -17 -200 7 l-35 15 0 190 c0 105 1 191 3 191
          1 0 24 -7 51 -15z m481 -275 c-8 -13 -175 -13 -175 0 0 6 37 10 91 10 57 0 88
          -4 84 -10z"/>
        <path d="M260 260 c0 -73 4 -120 10 -120 6 0 10 47 10 120 0 73 -4 120 -10
          120 -6 0 -10 -47 -10 -120z"/>
        <path d="M134 347 c12 -9 17 -23 14 -47 -3 -31 -7 -36 -38 -41 -19 -4 -26 -7
          -15 -8 11 -1 30 -4 43 -7 21 -6 22 -4 22 55 0 56 -2 61 -22 61 -20 0 -21 -1
          -4 -13z"/>
        <path d="M60 77 c0 -19 30 -27 105 -27 73 0 105 8 105 25 0 11 -8 11 -37 3
          -37 -10 -121 -6 -155 7 -12 5 -18 2 -18 -8z"/>
        <path d="M330 568 c0 -17 203 -15 208 1 2 7 -31 11 -102 11 -78 0 -106 -3
          -106 -12z"/>
        <path d="M350 515 c0 -13 15 -15 92 -13 62 2 93 7 96 16 3 9 -20 12 -92 12
          -80 0 -96 -3 -96 -15z"/>
        <path d="M350 463 c0 -10 24 -13 96 -13 72 0 95 3 92 12 -7 19 -188 19 -188 1z" />
        <path d="M350 410 c0 -6 38 -10 95 -10 57 0 95 4 95 10 0 6 -38 10 -95 10 -57
    0 -95 -4 -95 -10z"/>
        <path d="M350 311 l0 -60 91 -3 c50 -2 91 -2 92 -1 1 1 0 29 -1 62 l-4 61 -89
    0 -89 0 0 -59z m160 -1 l0 -40 -70 0 -70 0 0 33 c0 19 3 37 7 40 3 4 35 7 70
    7 l63 0 0 -40z"/>
      </g>
    </svg>
  ) : index === 1 ? (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="68.000000pt" height="75.000000pt" viewBox="0 0 68.000000 75.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
        fill={isLight ? '#545858' : '#aaa'} stroke="none">
        <path d="M156 734 c-19 -19 -22 -103 -3 -127 6 -9 28 -17 47 -19 63 -5 32 -23
    -49 -28 -44 -3 -82 -7 -84 -10 -3 -3 -19 -27 -36 -54 -40 -65 -43 -125 -6
    -162 24 -24 25 -29 25 -169 0 -138 -1 -145 -20 -145 -11 0 -20 -4 -20 -10 0
    -6 117 -10 330 -10 213 0 330 4 330 10 0 6 -10 10 -22 10 -23 0 -23 0 -20 145
    3 140 4 146 28 170 23 23 25 31 19 78 -5 34 -18 67 -39 97 l-32 45 -82 3 c-62
    2 -82 6 -82 17 0 9 14 15 43 17 l42 3 3 63 c2 38 -2 69 -9 78 -18 22 -341 20
    -363 -2z m352 -66 l3 -58 -171 0 -170 0 0 60 0 60 168 -2 167 -3 3 -57z m-88
    -105 c0 -22 4 -23 78 -23 86 0 89 -1 121 -47 l22 -33 -301 0 c-238 0 -300 3
    -294 13 4 6 16 24 26 40 l19 27 125 0 c76 0 124 4 124 10 0 6 -18 10 -40 10
    -29 0 -40 4 -40 15 0 12 14 15 80 12 76 -2 80 -3 80 -24z m-330 -173 c0 -70
    -62 -67 -68 4 -3 35 -2 36 32 36 35 0 36 -1 36 -40z m98 4 c-6 -71 -68 -74
    -68 -4 0 39 1 40 36 40 34 0 35 -1 32 -36z m90 0 c-6 -71 -68 -68 -68 2 0 32
    2 34 36 34 34 0 35 -1 32 -36z m90 -6 c-2 -33 -7 -44 -22 -47 -25 -4 -46 24
    -46 61 0 25 3 28 36 28 l35 0 -3 -42z m102 8 c0 -39 -20 -60 -50 -51 -16 5
    -20 15 -20 46 0 38 1 39 35 39 33 0 35 -2 35 -34z m88 -2 c-6 -71 -68 -68 -68
    2 0 32 2 34 36 34 34 0 35 -1 32 -36z m96 4 c-9 -53 -12 -58 -33 -58 -24 0
    -41 28 -41 64 0 24 4 26 40 26 39 0 39 0 34 -32z m-503 -78 c15 0 31 5 35 11
    4 8 9 8 17 0 6 -6 26 -11 43 -11 18 0 36 5 40 11 4 8 9 8 17 0 14 -14 64 -14
    73 0 4 8 9 8 17 0 6 -6 23 -11 38 -11 15 0 31 5 35 11 4 8 9 8 17 0 14 -14 74
    -14 82 -1 4 6 13 5 25 -3 18 -11 20 -24 20 -134 l0 -123 -160 0 -160 0 0 89
    c0 101 0 101 -80 101 -80 0 -80 0 -80 -101 l0 -89 -30 0 -30 0 0 121 c0 104 3
    124 18 135 10 8 21 9 27 3 5 -5 21 -9 36 -9z m119 -101 c0 -5 -27 -9 -60 -9
    -74 0 -80 18 -7 22 57 3 67 1 67 -13z m0 -114 l0 -85 -60 0 -60 0 0 85 0 85
    60 0 60 0 0 -85z m-140 -71 c0 -11 -8 -14 -27 -12 -39 4 -42 28 -4 28 21 0 31
    -5 31 -16z m478 4 c-4 -10 -47 -14 -161 -16 -135 -2 -157 0 -157 13 0 13 23
    15 161 15 124 0 160 -3 157 -12z"/>
        <path d="M240 690 c0 -6 38 -10 95 -10 57 0 95 4 95 10 0 6 -38 10 -95 10 -57
    0 -95 -4 -95 -10z"/>
        <path d="M287 654 c-14 -15 7 -24 54 -24 37 0 49 4 49 15 0 11 -12 15 -48 15
    -27 0 -52 -3 -55 -6z"/>
        <path d="M341 235 c0 -11 3 -14 6 -7 3 8 34 12 103 12 69 0 100 -4 103 -12 3
    -7 6 -4 6 7 1 19 -5 20 -109 20 -104 0 -110 -1 -109 -20z"/>
      </g>
    </svg>
  ) : index === 2 ? (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="71.000000pt" height="75.000000pt" viewBox="0 0 71.000000 75.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
        fill={isLight ? '#545858' : '#aaa'} stroke="none">
        <path d="M325 740 c-36 -15 -280 -241 -280 -258 0 -11 10 -18 28 -20 l27 -3 0
-169 c0 -167 0 -169 -22 -172 -15 -2 -24 -11 -26 -25 -2 -13 -11 -23 -25 -25
-25 -3 -34 -32 -17 -53 10 -13 67 -15 351 -15 l339 0 0 35 c0 30 -3 35 -24 35
-18 0 -25 6 -28 23 -2 13 -11 23 -23 25 -19 3 -20 10 -18 170 2 166 2 167 25
171 24 3 40 20 32 33 -16 25 -277 248 -296 252 -12 3 -32 1 -43 -4z m181 -135
l135 -120 -245 -3 c-153 -1 -246 -6 -246 -12 0 -6 7 -10 15 -10 13 0 15 -26
15 -170 l0 -170 -30 0 -31 0 3 180 3 180 -27 0 c-16 0 -28 2 -28 5 0 3 17 20
37 38 21 18 82 72 136 120 55 48 106 87 114 85 7 -2 75 -57 149 -123z m-6
-315 l0 -170 -30 0 c-24 0 -30 4 -30 20 0 20 -5 21 -87 18 -77 -3 -88 -5 -87
-20 1 -14 -6 -18 -30 -18 l-31 0 0 145 0 145 133 0 c175 0 176 18 0 22 -94 2
-133 7 -136 16 -3 9 31 12 147 12 l151 0 0 -170z m80 0 l0 -170 -30 0 -30 0 0
170 0 170 30 0 30 0 0 -170z m-160 -160 c0 -6 -28 -10 -65 -10 -37 0 -65 4
-65 10 0 6 28 10 65 10 37 0 65 -4 65 -10z m210 -47 c0 -10 -63 -13 -280 -13
-247 0 -293 4 -276 21 2 2 128 4 280 4 214 0 276 -3 276 -12z m50 -48 c0 -13
-43 -15 -330 -15 -287 0 -330 2 -330 15 0 13 43 15 330 15 287 0 330 -2 330
-15z"/>
        <path d="M303 614 c-15 -24 -15 -29 -2 -53 27 -49 109 -34 109 20 0 39 -19 59
-55 59 -26 0 -39 -6 -52 -26z m81 -16 c15 -24 -13 -53 -43 -43 -21 6 -29 43
-14 59 12 12 45 2 57 -16z"/>
        <path d="M307 313 c-11 -11 -8 -125 3 -118 6 3 10 28 10 56 l0 49 35 0 35 0 2
-57 1 -58 6 60 c4 33 5 63 3 68 -4 9 -86 9 -95 0z"/>
        <path d="M50 640 c-13 -25 -9 -87 5 -80 6 3 9 16 7 28 -4 32 15 52 49 52 16 0
29 5 29 10 0 6 -18 10 -40 10 -29 0 -42 -5 -50 -20z"/>
        <path d="M560 651 c0 -6 17 -11 38 -13 35 -3 37 -5 42 -41 3 -21 9 -36 15 -35
12 4 7 69 -7 86 -12 14 -88 17 -88 3z"/>
        <path d="M40 285 c0 -93 3 -125 13 -125 9 0 12 32 12 125 0 93 -3 125 -12 125
-10 0 -13 -32 -13 -125z"/>
        <path d="M640 285 c0 -93 3 -125 13 -125 9 0 12 32 12 125 0 93 -3 125 -12
125 -10 0 -13 -32 -13 -125z"/>
      </g>
    </svg>
  ) : <></>
}

const Section = tw.div`
  py-28
`;
const TitleFlex = tw.div`
  flex items-start justify-between
  flex-col lg:flex-row
  gap-5 lg:gap-0
`;
const TitleDescr = tw.p`
  font-normal
  basis-[63.5%]
  text-[11px] leading-5 tracking-[0.2px]
  flex justify-end gap-7
  flex-col items-start sm:flex-row
`;
const Caps = tw.div`
  mt-16 lg:mt-20
  flex justify-center
  flex-col sm:flex-row
  gap-4 lg:gap-[1.75em]
`;
const CapCard = tw.div`
  basis-[calc(33.33% - .625em)]
  lg:basis-[calc(33.33% - 1.125em)]
  grow-0 shrink-0
  border
  py-10 px-[1.375em]
  flex flex-col
  items-start
  duration-500
`;
const CapCardTitle = tw.h5`
  grow
  mt-8 mb-3
  font-bold
  text-base tracking-[0.426667px]
  uppercase
`;
const CapCardDescr = tw.p`
  font-normal
  text-[13px] leading-6 tracking-[0.1875px]
`;

export default Capabilities;