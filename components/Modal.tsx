import { NextPage } from "next";

export interface ModalInterface {
  title: string;
  show: boolean;
  content: JSX.Element;
  zIndex: number;
}

const Modal: NextPage<ModalInterface> = ({ show, title, content, zIndex }) => {
  if (!show) return null;

  return (
    <>
      <div className="container">
        <div className="title">
          <div className="title-menu">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>
          <div>{title}</div>
          <div></div>
        </div>
        <div className="content">
          <div className="content-body">{content}</div>
        </div>
      </div>

      <style jsx>{`
        .container {
          color: white;
          position: fixed;
          z-index: ${zIndex};
          width: 800px;
          height: 500px;
          border-radius: 5px;
        }

        .content {
          background-color: #656565;
          width: 100%;
          height: calc(100% - 24px);
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          overflow-y: hidden;
        }

        .content-body {
          max-width: 500px;
          margin: 1rem auto;
          height: calc(100% - 2rem);
          overflow-y: scroll;
        }

        .content-body div {
          overflow-y: scroll;
        }

        .title {
          display: flex;
          justify-content: space-between;
          background-color: #434343;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          height: 24px;
          line-height: 24px;
          padding-left: 8px;
        }

        .title-menu {
          display: flex;
        }

        .red,
        .yellow,
        .green {
          width: 12px;
          height: 12px;
          margin: 6px 4px;
          border-radius: 50%;
        }

        .red:hover,
        .yellow:hover,
        .green:hover {
          cursor: pointer;
        }

        .red {
          background-color: #e13f16;
        }

        .yellow {
          background-color: #ffc400;
        }

        .green {
          background-color: #039903;
        }
      `}</style>
    </>
  );
};

export default Modal;
