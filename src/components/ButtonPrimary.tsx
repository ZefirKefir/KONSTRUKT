import tw from 'twin.macro';

interface ButtonProps {
  children?: string,
  className?: string,
}

const ButtonPrimary: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <Button className={className}>
      {children}
    </Button>
  )
}

const Button = tw.button`
  py-3 px-7
  font-bold
  text-[13px] leading-4 tracking-[0.5px]
  uppercase
  whitespace-nowrap
  text-white
  bg-primary
`;

export default ButtonPrimary;