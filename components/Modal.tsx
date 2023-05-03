import { Point } from "@/pages";
import { NextPage } from "next";
import { useState } from "react";

export interface ModalInterface {
  title: string;
  show: boolean;
  setShow: (show: boolean) => any;
  content: JSX.Element;
  zIndex: number;
  loc: Point;
  onDragMove: (x: number, y: number) => any;
}

const Modal: NextPage<ModalInterface> = ({
  show,
  title,
  content,
  zIndex,
  loc,
  onDragMove,
  setShow,
}) => {
  if (!show) return null;

  const [isDragging, setIsDragging] = useState(false);

  return (
    <>
      <div className="container">
        <div
          className="title"
          onPointerDown={(e) => {
            e.stopPropagation();
            setIsDragging(true);
          }}
          onPointerUp={(e) => {
            e.stopPropagation();
            setIsDragging(false);
          }}
          onPointerMove={(e) => {
            e.stopPropagation();
            if (isDragging) onDragMove(e.movementX, e.movementY);
          }}
          onMouseLeave={(e) => {
            if (isDragging) setIsDragging(false);
          }}
        >
          <div className="title-menu">
            <div
              className="red"
              onClick={(e) => {
                e.stopPropagation();
                setShow(false);
              }}
            ></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>
          <div className="title-content">{title}</div>
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
          top: ${loc[0]}px;
          left: ${loc[1]}px;
          box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
            6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
            12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
            22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
            41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
            100px 100px 80px rgba(0, 0, 0, 0.07);
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
          height: 48px;
          line-height: 48px;
          padding-left: 8px;
          user-select: none;
        }

        .title-menu {
          display: flex;
        }

        .title-content {
          margin-left: -8px;
        }

        .red,
        .yellow,
        .green {
          width: 12px;
          height: 12px;
          margin: 18px 4px;
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
