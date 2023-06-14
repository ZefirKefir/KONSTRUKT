import tw from "twin.macro"

type ContainerProps = {
  children: string | JSX.Element | JSX.Element[],
}

const Container = ({ children }: ContainerProps) => {
  return (
    <Cont>
      {children}
    </Cont>
  )
}

const Cont = tw.div`
  max-w-[85%]
  md:max-w-[85%]
  lg:max-w-[75%]
  xl:max-w-[70%]
  mx-auto
`;

export default Container;