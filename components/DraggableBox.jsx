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
    yRate: Math.random() * 500,
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
        <Modal.Header closeButton onClick={initModal}>
          <h3>
            {album} - {artist}
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <img className="album-art" src={albumArtLink} alt="" />
            <div className="album-info">
              <p>Best: {best}</p>
              <p>Worst: {worst}</p>
              <p>Fave: {fave}</p>
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
        div.modal-body {
          display: flex;
          flex-direction: row;
          width: 100%; 
        }
        .album-art {
          max-width: 20rem; 
        }
        div.album-info {
          margin-left: 2rem;
        }
      `}</style>
    </>
  );
};
