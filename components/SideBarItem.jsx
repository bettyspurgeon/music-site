
export const SideBarItem = ({
  title,
  percentage,
  backgroundColor,
  callback
}) => {
  const genre = title;

  const handleCallback = () => callback(genre);
  return (
    <>
      <div className="title-container" onClick={handleCallback}>
        <p>{title}</p>
      
      </div>
      <style jsx>{`
        div {
          align-items: center;
          background-color: ${backgroundColor};
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: ${percentage}vh;
          justify-content: center;
          transition: width 500ms;
          width: 100%;
          z-index: 999;
        }
        div:hover {
          width: 45rem;
        }

        div.title-container p {
          display: none;
        }

        div.title-container:hover p {
          color: #ffffff;
          display: inline-block;
          font-size: 5rem;
        }

        p {
          white-space: nowrap;
        }
      `}</style>
    </>
  );
};
