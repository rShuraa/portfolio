import React from "react";
import "./tecnologias.css";
import codeImg from "../images/code.png";

function Tecnologias() {
  return (
    <>
      <section id="tecnologias">
        <h2>Mis tecnologías</h2>
        <div className="tecnologias">




          <div>
            <div className="techSubtitles">
            <i className="fa-solid fa-code"></i>
              <h3>
                <span className="magentaUnderline">Responsive</span><span>Development</span>
              </h3>
            </div>


            <div className="techDesc">
              <p>
                Diseño sitios web responsivos con Bootstrap y Tailwind, enfocándome en la estética, usabilidad y adaptabilidad.
              </p>
            </div>
          </div>





          <div>
            <div className="techSubtitles">
            <i className="fa-brands fa-react"></i>
              <h3>
                <span className="reactUnderline">React</span><span>Development</span>
              </h3>
            </div>


            <div className="techDesc">
              <p>
              Utilizo React para crear aplicaciones web interactivas, atractivas, eficientes y dinámicas con fluidez.
              </p>
            </div>
          </div>





          <div>
            <div className="techSubtitles">
            <i className="fa-brands fa-laravel"></i>
              <h3>
                <span className="laravelUnderline">Laravel</span><span>Development</span>
              </h3>
            </div>


            <div className="techDesc">
              <p>
              Utilizo Laravel para desarrollar aplicaciones web robustas y escalables con PHP de manera eficiente.
              </p>
            </div>
          </div>






        </div>

        <aside className="codeImg">
          <img src={codeImg} />
        </aside>

        
      </section>
    </>
  );
}

export default Tecnologias;
