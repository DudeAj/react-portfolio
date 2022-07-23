import { useState } from 'react';
import Header from "./components/header";
import Main from "./components/main";
import About from './components/about';
import Work from "./components/work";
import Contact from './components/contact';
import Footer from './components/footer';
import {BsCodeSquare, BsBrush} from 'react-icons/bs';
import {AiOutlineCode} from 'react-icons/ai'

export interface dataType {
  text: string,
  color: string,
  desc: string,
  image: string,
  icon:React.ReactElement

}

const App = () => {

  const [data, setData] = useState<dataType[]>([
    {
      text: "App Design",
      color: "bg-green-700",
      desc: "Step counting app",
      image: "https://codecyan.com/omishah/assets/app.png",
      icon:<BsBrush color='#fff' size="1.5em"/>
    },
    {
      text: "Web Design",
      color: "bg-lime-700",
      desc: "IG downloader website",
      image: "https://codecyan.com/omishah/assets/custom-script.png",
      icon:<BsCodeSquare color='#fff' size="1.5em"/>
    },
    {
      text: "Custom script",
      color: "bg-blue-700",
      desc: "Social connection app",
      image: "https://codecyan.com/omishah/assets/phone.png",
      icon:<AiOutlineCode color='#fff' size="1.5em"/>
    },
  ])

  return (

    <div>
      <Main />
      <About data={data} />
      <Work data={data} />
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
