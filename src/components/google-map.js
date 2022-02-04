import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12107.829881520618!2d-122.93477517224466!3d40.652867891951324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d2074269ebb161%3A0xb00d38392af913a6!2sTrinity%20River!5e0!3m2!1sen!2sus!4v1640199920669!5m2!1sen!2sus"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
