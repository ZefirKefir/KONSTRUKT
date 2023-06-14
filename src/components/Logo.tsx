import images from "../constants/images";

interface LogoProps {
  width?: number,
  black?: boolean,
  classNames?: string,
}
const Logo: React.FC<LogoProps> = ({ width = 100, black = false, classNames = '' }) => {
  return (
    <a href="#" className={`block duration-[.4s] ${classNames}`}>
      <img width={width} src={black ? images.logoBlack : images.logo} />
    </a>
  )
}

export default Logo;