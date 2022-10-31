import planetmercuryinternal from "../assets/planet-mercury-internal.svg";
import geologymercury from "../assets/geology-mercury.png";
import planetmercury from "../assets/planet-mercury.svg";
import iconsource from "../assets/icon-source.svg";
import { useState } from "react";

const Mercury = ({ dataMercury }) => {
  const [imageSetter, setImageSetter] = useState(planetmercury);
  const [imageOn, setImageOn] = useState(false);
  const [overview, setOverwiew] = useState(dataMercury.overview.content);
  const [wikiLink, setWikiLink] = useState(dataMercury.overview.source);

  const imageChanger = (item) => {
    if (item === planetmercury) {
      setImageSetter(item);
      setImageOn(false);
      setOverwiew(dataMercury.overview.content);
      setWikiLink(dataMercury.overview.source);
    }
    if (item === planetmercuryinternal) {
      setImageSetter(item);
      setImageOn(false);
      setOverwiew(dataMercury.structure.content);
      setWikiLink(dataMercury.structure.source);
    }
  };
  const lastImage = (item) => {
    if (item === planetmercury) {
      setImageOn(true);
      setImageSetter(item);
      setOverwiew(dataMercury.geology.content);
      setWikiLink(dataMercury.geology.source);
    }
  };
  console.log(dataMercury);
  return (
    <section className="planet-cotainer">
      <div className="planet-sum">
        <div className="planet-images">
          <img src={imageSetter} alt="planet" className="planet-image" />
          {imageOn && (
            <img src={geologymercury} alt="planet" className="planet-image-s" />
          )}
        </div>

        <div className="planet-info">
          <div className="planet-info-tablet">
            <h1 className="planet-info-title">{dataMercury.name}</h1>
            <p className="planet-info-content">{overview}</p>
          <div className="planet-info-wiki-container">
            <span className="planet-info-wiki-span">Source : &nbsp;</span>
            <a
              href={wikiLink}
              target="_blank"
              className="planet-info-wiki"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
            <img src={iconsource} alt="iconsource" width="12px" height="12px" />
          </div>
          </div>
          <div className="planet-btns">
            <button
              className={`planet-btn ${
                imageSetter === planetmercury && imageOn === false
                  ? "active-btn"
                  : ""
              }`}
              onClick={() => imageChanger(planetmercury)}
            >
              <span>01</span>
              overview
            </button>
            <button
              className={`planet-btn ${
                imageSetter === planetmercuryinternal ? "active-btn" : ""
              }`}
              onClick={() => imageChanger(planetmercuryinternal)}
            >
              <span>02</span>
              Internal Structure
            </button>
            <button
              className={`planet-btn ${
                imageSetter === planetmercury && imageOn ? "active-btn" : ""
              }`}
              onClick={() => lastImage(planetmercury)}
            >
              <span>03</span>
              Surface Geology
            </button>
          </div>
        </div>
      </div>
      <div className="planet-basic-info">
        <div className="planet-basic-info-single">
          <span>ROTATION TIME</span>
          <h2>{dataMercury.rotation}</h2>
        </div>
        <div className="planet-basic-info-single">
          <span>REVOLUTION TIME</span>
          <h2>{dataMercury.revolution}</h2>
        </div>
        <div className="planet-basic-info-single">
          <span>radius</span>
          <h2>{dataMercury.radius}</h2>
        </div>
        <div className="planet-basic-info-single">
          <span>AVERAGE TEMP.</span>
          <h2>{dataMercury.temperature}</h2>
        </div>
      </div>
    </section>
  );
};

export default Mercury;
