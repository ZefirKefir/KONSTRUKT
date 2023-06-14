import Navbar from "./Navbar";
import Container from "../Container";
import Story from "./Story";
import Capabilities from "./Capabilities";

const Main = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Story />
        <Capabilities />
      </Container>
    </>
  )
}

export default Main;