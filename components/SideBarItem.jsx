export const SideBarItem = ({ title, percentage, backgroundColor }) => {
  return (
    <>
      <div className="title-container">
        <span>{title}</span>
      </div>
      <style jsx>{`
        div {
          align-items: center;
          background-color: ${backgroundColor};
          display: flex;
          flex-direction: column;
          height: ${percentage}vh;
          justify-content: center;
          transition: width 1s;
          width: 100%;
          z-index: 999;
        }
        div:hover {
          width: 45rem;
        }
        div.title-container span {
          display: none;
          color: #ffffff;
          font-size: 5rem;
        }
        div.title-container:hover span {
          display: block;
        }
        span {
          text-wrap: no-wrap
        }

      `}</style>
    </>
  );
};
