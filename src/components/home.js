import "./home.css";
import React, {useEffect} from "react";
import lottie from 'lottie-web';

function Home() {
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: document.getElementById('animationScroll'),
        renderer: 'svg',
        loop: true, 
        autoplay: true, 
        animationData: require('../assets/Lottie/animationScroll.json'),
      });

    return () => anim.destroy();
}, []);
  
    return (
      <section className="home">
        <div className="circleBox">
          <div className="circle" id="circle-main"></div>
        </div>
        <h1 className="title">JONAY GC</h1>
        <h5 className="subtitle">FULL STACK DEVELOPMENT SPECIALIST</h5>
        <a href="#tecnologias" className="scrollIcon"><div id="animationScroll"></div></a>
      </section>
    );
  }
  
  export default Home;
