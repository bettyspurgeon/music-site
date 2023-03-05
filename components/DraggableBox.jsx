import { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";

export const DraggableBox = ({ name, albumArt }) => {
  let zIndex = 0;
  const [currentPosition, setCurrentPosition] = useState({
    xRate: Math.random() * 950,
    yRate: Math.random() * 350,
  });

  const onDrag = (e, data) => {
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
    zIndex = 999; 
  };

  return (
    <>
      <Draggable
        position={{
          x: currentPosition.xRate,
          y: currentPosition.yRate,
        }}
        onDrag={onDrag}
      >
        <div className="piece">
          <div className="sub-circle"></div>
        </div>
      </Draggable>
      <style jsx>{`
        div.piece {
          display: flex; 
          flex-direction: column; 
          position: absolute;
          background-image: url(${albumArt});
          background-size: cover;
          border-radius: 100%;
          width: 300px;
          height: 300px;
          cursor: grab;
          z-index: ${zIndex}
        }
        .sub-circle {
          border-radius: 100%;
          height: 40px;
          width: 40px;
          background-color: #ffffff;
          margin: auto;
        }
      `}</style>
    </>
  );
};
