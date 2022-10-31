import iconsource from "../assets/icon-source.svg";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Planet = ({ dataPlanets }) => {
  const { id } = useParams();
  const [mainData, setMainData] = useState(
    dataPlanets.find((item) => item.name === id)
  );
  const planetmercuryinternal = require(`../assets/planet-${mainData.name.toLowerCase()}-internal.svg`);
  const planetmercury = require(`../assets/planet-${mainData.name.toLowerCase()}.svg`);
  const geologymercury = require(`../assets/geology-${mainData.name.toLowerCase()}.png`);
  const [imageSetter, setImageSetter] = useState(planetmercury);
  const [imageOn, setImageOn] = useState(false);
  const [overview, setOverwiew] = useState(mainData.overview.content);
  const [wikiLink, setWikiLink] = useState(mainData.overview.source);

  useEffect(() => {
    setMainData(dataPlanets.find((item) => item.name === id));
  }, [id]);

  useEffect(() => {
    setOverwiew(mainData.overview.content);
    setWikiLink(mainData.overview.source);
    setImageSetter(planetmercury);
    setImageOn(false);
    console.log("11");
  }, [mainData]);

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
  return (
    <section className="planet-cotainer">
      <div className="planet-sum">
        <div className="planet-images">
          <img
            src={imageSetter}
            alt="planet"
            className={`size-${mainData.name}`}
          />
          {imageOn && (
            <img src={geologymercury} alt="planet" className="planet-image-s" />
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
            <img src={iconsource} alt="iconsource" width="12px" height="12px" />
          </div>
          </div>
          <div className="planet-btns">
            <button
              className={`planet-btn ${
                imageSetter === planetmercury && imageOn === false
                  ? `color-${mainData.name}`
                  : ""
              }`}
              onClick={() => imageChanger(planetmercury)}
            >
              <span>01</span>
              overview
            </button>
            <button
              className={`planet-btn ${
                imageSetter === planetmercuryinternal
                  ? `color-${mainData.name}`
                  : ""
              }`}
              onClick={() => imageChanger(planetmercuryinternal)}
            >
              <span>02</span>
              Internal Structure
            </button>
            <button
              className={`planet-btn ${
                imageSetter === planetmercury && imageOn
                  ? `color-${mainData.name}`
                  : ""
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
  );
};

export default Planet;
