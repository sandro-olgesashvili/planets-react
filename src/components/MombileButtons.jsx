const MobileButtons = ({
  imageChanger,
  imageSetter,
  imageOn,
  planetmercury,
  planetmercuryinternal,
  lastImage,
  mainData,
}) => {
  return (
    <div className="planet-btns-mobile">
      <button
        className={`planet-btn ${
          imageSetter === planetmercury && imageOn === false
            ? `color-${mainData.name}-mobile`
            : ""
        }`}
        onClick={() => imageChanger(planetmercury)}
      >
        overview
      </button>
      <button
        className={`planet-btn ${
          imageSetter === planetmercuryinternal
            ? `color-${mainData.name}-mobile`
            : ""
        }`}
        onClick={() => imageChanger(planetmercuryinternal)}
      >
        Structure
      </button>
      <button
        className={`planet-btn ${
          imageSetter === planetmercury && imageOn
            ? `color-${mainData.name}-mobile`
            : ""
        }`}
        onClick={() => lastImage(planetmercury)}
      >
        Surface
      </button>
    </div>
  );
};

export default MobileButtons;
