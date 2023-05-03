import { NextPage } from "next";
import { BsFillPersonFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IconContext } from "react-icons";

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

  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon",
          size: "30",
          color: "#242424",
        }}
      >
        <div className="container">{iconElement}</div>
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
      `}</style>
    </>
  );
};

export default DockItem;
