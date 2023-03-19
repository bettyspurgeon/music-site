import { useState } from "react";
import Draggable from "react-draggable";
import { Modal, Button } from "react-bootstrap";

export const DraggableBox = ({
  artist,
  album,
  best,
  worst,
  fave,
  albumArtLink,
}) => {
  const [isShow, invokeModal] = useState(false);

  const initModal = () => {
    if (isShow === true) {
      return invokeModal(false);
    }
    if (isShow === false) {
      return invokeModal(true);
    }
  };

  const [currentPosition, setCurrentPosition] = useState({
    xRate: Math.random() * 600,
    yRate: Math.random() * 550,
  });
  const [isDragging, setIsDragging] = useState(false);

  const onDrag = (e, data) => {
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
  };

  return (
    <>
      <Draggable
        position={{
          x: currentPosition.xRate,
          y: currentPosition.yRate,
        }}
        onStop={onDrag}
      >
        <div className="piece" onDoubleClick={initModal}>
          <div className="sub-circle"></div>
        </div>
      </Draggable>
      <Modal show={isShow} size="lg" backdrop="true">
        <Modal.Header closeButton onClick={initModal}></Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <img className="album-art" src={albumArtLink} alt="" />
            <div>
              <h3>
                {album} - {artist}
              </h3>
              <h4>Best: {best}</h4>
              <h4>Worst: {worst}</h4>
              <h4>Fave: {fave}</h4>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <style jsx>{`
        div.piece {
          display: flex;
          flex-direction: column;
          position: absolute;
          background-image: url(${albumArtLink});
          background-size: cover;
          border-radius: 100%;
          width: 15rem;
          height: 15rem;
          cursor: grab;
        }
        .sub-circle {
          border-radius: 100%;
          border: 1px solid grey 0.9;
          height: 40px;
          width: 40px;
          background-color: #ffffff;
          margin: auto;
        }
        img.album-art {
          height: 15rem;
        }
        .modal-body {
          display: flex;
        }
      `}</style>
    </>
  );
};
