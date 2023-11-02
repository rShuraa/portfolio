import React from "react";
import "./experiencia.css";
import eivorLogo from "../images/logoEivor.svg";
import fulpLogo from "../images/fulp.png";

function Acordeon() {
  return (
    <>
      <section className="experiencias">
      <h2><span>Experiencia</span><span>Profesional</span></h2>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed accordionExpBtn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <span>
                <span>Desarrollador web | EivorSystems </span><span> 2023 - Actualidad</span>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div>
                  <div className="expTopInfo">
                    <span><i className="fas fa-map-marker-alt"></i> Las Palmas, España</span><span><i className="fas fa-external-link-square-alt"></i><a target="_blank" href="https://eivor.es">eivor.es</a></span>
                  </div>
                  <p>
                  Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.
                  </p>
                  <div className="expBottomInfo">
                    <ul>
                        <li>Javascript</li>
                        <li>PHP</li>
                        <li>Docker</li>
                        
                    </ul>
                  </div>
                </div>
                <div className="expImage">
                  <img src={eivorLogo} />
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <span>
                <span>Desarrollador web | FULP </span><span> 2022 - 2023</span>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
              <div>
                  <div className="expTopInfo">
                    <span><i className="fas fa-map-marker-alt"></i> Las Palmas, España</span><span><i className="fas fa-external-link-square-alt"></i><a target="_blank" href="https://fulp.es">fulp.es</a></span>
                  </div>
                  <p>
                  Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.
                  </p>
                  <div className="expBottomInfo">
                    <ul>
                        <li>Javascript</li>
                        <li>PHP</li>
                        <li>Docker</li>
                        
                    </ul>
                  </div>
                </div>
                <div className="expImage">
                  <img src={fulpLogo} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Acordeon;
