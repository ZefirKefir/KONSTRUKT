import { useInView } from 'react-intersection-observer';
import tw from "twin.macro"

import Container from "../Container";
import Logo from "../Logo";

import { AiFillFacebook, AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';

const links = [
  ['home', 'about', 'services', 'projects', 'contact us'],
  ['faq', 'terms', 'careers'],
  ['blog', 'partners', 'news'],
];

const Footer = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: .75,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: .5,
    triggerOnce: true,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: .75,
    triggerOnce: true,
  });
  return (
    <Feet>
      <Container>
        <FooterFlex>
          <Comp ref={ref1} className={inView1 ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}>
            <FooterTitle>Company</FooterTitle>
            <Logo classNames='mt-5' />
            <FooterText className="mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </FooterText>
          </Comp>
          <Links ref={ref2} className={inView2 ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}>
            <FooterTitle>Links</FooterTitle>
            <LinksFlex>
              {links.map((item, index) => (
                <LinkList key={index}>
                  {item.map(link => (
                    <LinkListItem key={link}>
                      <LinkListLink href="#">{link}</LinkListLink>
                    </LinkListItem>
                  ))}
                </LinkList>
              ))}
            </LinksFlex>
          </Links>
          <Last ref={ref3} className={inView3 ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}>
            <Contact>
              <FooterTitle>Contact Us</FooterTitle>
              <FooterText className="mt-4">
                213 Baker Street<br />
                Oriel City Country<br />
                700 KNW,<br />
                Country Name
                <a className="block mt-3" href="tel:+239942334022">+23 994 233 4022</a>
                <a className="block mt-3" href="mailto:info@konstrukt.com">info@konstrukt.com</a>
              </FooterText>
            </Contact>
            <Social>
              <AiFillFacebook size={20} className="text-[#888] duration-300 cursor-pointer hover:text-white" />
              <AiOutlineTwitter size={20} className="text-[#888] duration-300 cursor-pointer hover:text-white" />
              <AiOutlineGoogle size={20} className="text-[#888] duration-300 cursor-pointer hover:text-white" />
            </Social>
          </Last>
        </FooterFlex>
      </Container>
      <Copy>© 2022 Konstruct Inc.<p>Designed by Jane Kathryn Teo</p></Copy>
    </Feet>
  )
}

const Feet = tw.footer`
  bg-[#141A20]
`;
const FooterFlex = tw.div`
  py-10
  flex
  flex-col md:flex-row
  items-start
  justify-between
  gap-10 md:gap-0
`;
const Comp = tw.div`basis-0 md:basis-[250px] duration-500`;
const FooterTitle = tw.h6`
  font-normal
  text-[11px] leading-[13px]
  tracking-[0.846154px] uppercase
  text-white
  whitespace-nowrap
`;
const FooterText = tw.p`
  font-normal
  text-[11px] leading-4 tracking-[0.85px]
  text-white
`;
const Links = tw.div`duration-500`;
const LinksFlex = tw.div`
  flex
  flex-row md:flex-col lg:flex-row
  gap-5 md:gap-0 lg:gap-9
`;
const LinkList = tw.ul`
  mt-2 lg:mt-3
`;
const LinkListItem = tw.li``;
const LinkListLink = tw.a`
  font-semibold
  text-[11px] leading-4 tracking-[0.85px]
  uppercase
  text-[#888]
  hover:text-white
  duration-200
  whitespace-nowrap
`;
const Last = tw.div`
  flex gap-8
  items-end md:items-start
  duration-500
`;
const Contact = tw.div``;
const Social = tw.div`
  flex items-center gap-4 md:gap-6
  grow-0
  mt-7
`;
const Copy = tw.div`
  py-[1.875em] px-6
  flex flex-wrap justify-center gap-1.5
  font-normal
  text-[11px] leading-[13px] tracking-[0.85px]
  text-center text-white
  bg-[#171819]
`;

export default Footer;