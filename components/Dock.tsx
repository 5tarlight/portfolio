import { NextPage } from "next";
import DockItem, { DockProps as Docks } from "./DockItem";

export interface DockProps {
  toggleModal: (index: number) => void;
}

const Dock: NextPage<DockProps> = ({ toggleModal }) => {
  const items: Docks[] = [
    {
      icon: "profile",
      value: "YEAHx4",
      isActive: false,
      onClick: () => toggleModal(0),
    },
    {
      icon: "hat",
      value: "Education",
      isActive: false,
      onClick: () => toggleModal(1),
    },
    {
      icon: "skill",
      value: "Skills",
      isActive: false,
      onClick: () => toggleModal(2),
    },
    {
      icon: "project",
      value: "Projects",
      isActive: false,
      onClick: () => toggleModal(3),
    },
    {
      icon: "contact",
      value: "Contact",
      isActive: false,
      onClick: () => toggleModal(4),
    },
  ];

  return (
    <>
      <div className="container">
        <div className="dock">
          {items.map(({ icon, value, isActive, onClick }, i) => (
            <DockItem
              icon={icon}
              value={value}
              isActive={isActive}
              key={i}
              onClick={onClick}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          height: 64px;
          width: 100vw;
          position: fixed;
          bottom: 1rem;
          z-index: 998;
        }

        .dock {
          background-color: #8080809e;
          border-radius: 1rem;
          height: 100%;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          color: white;
          width: fit-content;
          box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),
            6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05),
            12.5px 12.5px 10px rgba(0, 0, 0, 0.042),
            22.3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
            41.8px 41.8px 33.4px rgba(0, 0, 0, 0.028),
            100px 100px 80px rgba(0, 0, 0, 0.02);
          gap: 0 10px;
        }
      `}</style>
    </>
  );
};

export default Dock;
