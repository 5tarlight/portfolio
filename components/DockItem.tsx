import { NextPage } from "next";
import { BsFillPersonFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IconContext } from "react-icons";
import { createRef } from "react";

export interface DockProps {
  icon: "profile" | "hat" | "contact" | "project" | "skill";
  value: string;
  isActive: boolean;
  // key: any';
}

const DockItem: NextPage<DockProps> = ({ icon, value, isActive }) => {
  const iconElement = (() => {
    switch (icon) {
      case "profile":
        return <BsFillPersonFill width={32} />;
      case "skill":
        return <GiSkills />;
      case "hat":
        return <FaGraduationCap />;
      case "contact":
        return <GrContact />;
      case "project":
        return <AiOutlineFundProjectionScreen />;
    }
  })();

  const hoverRef = createRef<HTMLDivElement>();

  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon",
          size: "30",
          color: "#242424",
        }}
      >
        <div
          className="container"
          onMouseEnter={() => {
            hoverRef.current?.style.setProperty("display", "flex");
          }}
          onMouseLeave={() => {
            hoverRef.current?.style.setProperty("display", "none");
          }}
        >
          {iconElement}
          <div className="hover-desc" ref={hoverRef}>
            <div className="hover-text">{value}</div>
          </div>
        </div>
      </IconContext.Provider>

      <style jsx>{`
        .container {
          height: 100%;
          width: 32px;
          background-color: white;
          border-radius: 5px;
          padding: 1px;
        }

        .container:hover {
          cursor: pointer;
        }

        .hover-desc {
          display: none;
          position: relative;
          bottom: 72px;
          left: calc(-150px + 12px);
          width: 300px;
          justify-content: center;
        }

        .hover-text {
          background-color: #000000;
          text-align: center;
          padding: 2px 5px;
          border: 1px solid white;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default DockItem;
