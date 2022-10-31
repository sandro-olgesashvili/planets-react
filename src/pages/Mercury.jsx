import planetmercuryinternal from "../assets/planet-mercury-internal.svg";
import geologymercury from "../assets/geology-mercury.png";
import planetmercury from "../assets/planet-mercury.svg";
import iconsource from "../assets/icon-source.svg";
import { useState } from "react";
import MobileNav from "../components/MobileNav";
import MobileButtons from "../components/MombileButtons";

const Mercury = ({ mainData, mobileOn, setMobileOn }) => {
  const [imageSetter, setImageSetter] = useState(planetmercury);
  const [imageOn, setImageOn] = useState(false);
  const [overview, setOverwiew] = useState(mainData.overview.content);
  const [wikiLink, setWikiLink] = useState(mainData.overview.source);

  const imageChanger = (item) => {
    if (item === planetmercury) {
      setImageSetter(item);
      setImageOn(false);
      setOverwiew(mainData.overview.content);
      setWikiLink(mainData.overview.source);
    }
    if (item === planetmercuryinternal) {
      setImageSetter(item);
      setImageOn(false);
      setOverwiew(mainData.structure.content);
      setWikiLink(mainData.structure.source);
    }
  };
  const lastImage = (item) => {
    if (item === planetmercury) {
      setImageOn(true);
      setImageSetter(item);
      setOverwiew(mainData.geology.content);
      setWikiLink(mainData.geology.source);
    }
  };
  console.log(mainData);
  return (
    <>
      <MobileButtons
        imageChanger={imageChanger}
        imageSetter={imageSetter}
        imageOn={imageOn}
        setImageOn={setImageOn}
        planetmercury={planetmercury}
        planetmercuryinternal={planetmercuryinternal}
        lastImage={lastImage}
        mainData={mainData}
      />
      <section className="planet-cotainer">
        {mobileOn && <MobileNav setMobileOn={setMobileOn} />}
        <div className="planet-sum">
          <div className="planet-images">
            <img src={imageSetter} alt="planet" className="planet-image" />
            {imageOn && (
              <img
                src={geologymercury}
                alt="planet"
                className="planet-image-s"
              />
            )}
          </div>

          <div className="planet-info">
            <div className="planet-info-tablet">
              <h1 className="planet-info-title">{mainData.name}</h1>
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
                <img
                  src={iconsource}
                  alt="iconsource"
                  width="12px"
                  height="12px"
                />
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
            <h2>{mainData.rotation}</h2>
          </div>
          <div className="planet-basic-info-single">
            <span>REVOLUTION TIME</span>
            <h2>{mainData.revolution}</h2>
          </div>
          <div className="planet-basic-info-single">
            <span>radius</span>
            <h2>{mainData.radius}</h2>
          </div>
          <div className="planet-basic-info-single">
            <span>AVERAGE TEMP.</span>
            <h2>{mainData.temperature}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mercury;
