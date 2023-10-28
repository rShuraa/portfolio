import "./home.css";
import React, {useEffect} from "react";
import lottie from 'lottie-web';

function Home() {
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: document.getElementById('animationScroll'),
        renderer: 'svg', // o 'canvas', según tus necesidades
        loop: true, // Reproducción infinita
        autoplay: true, // Reproducir automáticamente
        animationData: require('../assets/Lottie/animationScroll.json'), // Ruta al archivo JSON de la animación
      });

    return () => anim.destroy();
}, []);
    // El array vacío [] asegura que este efecto se ejecute solo una vez después de que el componente se monte
  
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
  