//import Navbar from "../components/Navbar/navbar";
import Navbar from "../../components/Navbar/navbar";
import {SvgBlob} from 'react-svg-blob';
// import {cross as crossPattern} from 'react-svg-blob/dist/lib/patterns';

const Home = () => {
    return (
      <div className="home">
        
        <Navbar />
      
        
<SvgBlob variant='solid' color='#00cec9' />;

<SvgBlob variant='gradient' colors={['#2980B9', '#6DD5FA']} />

{/* <SvgBlob variant='pattern' pattern={crossPattern} color='#d1d8e0' isOutline /> */}

      </div>
    );
  };
  
  export default Home;