import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useState } from "react";

export const DraggableBox = ({name, albumArt}) => {
  const [currentPosition, setCurrentPosition] = useState({
    xRate: Math.random() * 400,
    yRate: Math.random() * 400,
  });
  return (
    <>
      <Draggable>
        <div className="piece">
          
          <div className="sub-circle"></div>
        </div>
      </Draggable>
      <style jsx>{`
        div.piece {
          position: relative;
          background-image: url(${albumArt});
          border-radius: 100%;
          width: 300px;
          height: 300px;
          opacity: 0.8; 
        }
        .piece-phrase {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          color: white;
        }
        .sub-circle { 
          border-radius: 100%;
          height: 30px;
          width: 30px;
          background-color: #ffffff;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};
