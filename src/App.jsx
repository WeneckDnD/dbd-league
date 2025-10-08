import Header from "./Header/Header.jsx";
import Footer from "./Footer.jsx";
import LiquidEther from "./LiquidEther.jsx";


function App() {


  return (
    <>
      <LiquidEther style={{ width: '1920', height: '1080', position: 'fixed' }}
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.6}
        autoIntensity={3.5}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      ></LiquidEther>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default App;
