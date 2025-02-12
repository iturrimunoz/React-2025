
import Body from '../components/Home/Body.jsx'
import Footer from '../components/Home/Footer.jsx'
import OpenLink from '../components/Core/OpenLink.jsx'
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";
import { useSelector, useDispatch } from 'react-redux'
const Home = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
         <span>{count}</span>
             <div>
                <OpenLink 
                redirectURL="https://vite.dev" 
                logoImage={viteLogo} 
                />
                <OpenLink 
                redirectURL="https://react.dev" 
                logoImage={reactLogo} 
                />
                <OpenLink 
                redirectURL="https://github.com/iturrimunoz/React-2025/" 
                logoImage={githubLogo} 
                />
            </div>
            <Body />
            <Footer />
         </div>
    )
}   

export default Home