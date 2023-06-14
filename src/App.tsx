import { useSelector } from 'react-redux';

import Header from "./components/sections/Header"
import Main from "./components/sections/Main"
import GetInTouch from "./components/sections/GetInTouch";
import News from "./components/sections/News";
import Footer from "./components/sections/Footer";
import { RootState } from './redux/store';


function App() {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <div className={`App ${theme === 'dark' ? 'bg-[#171819]' : 'bg-white'}`}>
      <Header />
      <Main />
      <GetInTouch />
      <News />
      <Footer />
    </div>
  )
}

export default App
