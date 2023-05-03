import { NextPage } from "next";
import { useEffect } from "react";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

const Lock: NextPage<Props> = ({ show, setShow }) => {
  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <>
      <div className="container">
        <div className="content">
          <img src="/profile.png" />
          <span>YEAHx4</span>

          <button
            onClick={() => {
              console.log("Open!");
              setShow(false);
            }}
          >
            {/* <svg>
              <path d="M16,24L16,8l-6,6M16,8l6,6" strokeWidth={1} fill="none" />
            </svg> */}
            <nav>↑</nav>
          </button>
        </div>
      </div>

      <style jsx>{`
        .container {
          position: fixed;
          background-color: #1c2655;
          width: 100vw;
          height: ${show ? "100vh" : 0};
          transition-duration: 0.5s;
        }

        .content {
          display: ${show ? "flex" : "none"};
          max-width: 300px;
          margin: 30vh auto;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 1px solid white;
          margin-bottom: 1rem;
        }

        span {
          color: white;
          margin-bottom: 2rem;
          font-weight: 600;
          user-select: none;
        }

        button {
          color: white;
          width: 32px;
          height: 32px;
          border: 1px solid white;
          background: none;
          border-radius: 50%;
          font-size: 1.1rem;
        }

        button:hover {
          background-color: white;
          color: #1c2655;
          cursor: pointer;
        }

        svg {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin: 0;
          padding: 0;
        }

        nav {
          margin-top: -2px;
        }
      `}</style>
    </>
  );
};

export default Lock;
