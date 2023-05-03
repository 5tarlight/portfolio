import Dock from "@/components/Dock";
import Lock from "@/components/Lock";
import Modal from "@/components/Modal";
import Head from "next/head";
import { useEffect, useState } from "react";

export type Point = [number, number];

export default function Home() {
  const [show, setShow] = useState(true);

  const profileContent = <div>Profile</div>;
  const eduContent = <div>Education</div>;
  const skillContent = <div>Skill</div>;
  const proContent = <div>Projects</div>;
  const contactContent = <div>Contact</div>;

  const contents = [
    profileContent,
    eduContent,
    skillContent,
    proContent,
    contactContent,
  ];

  const [locations, setLoc] = useState<Point[]>([
    [0, 0],
    [20, 20],
    [30, 30],
    [40, 40],
    [50, 50],
  ]);

  const titles = [
    "Profile - YEAHx4",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  const [indexes, setIndexes] = useState([-1, -1, -1, -1, -1]);

  const [showModal, setShowModal] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const moveModal = (id: number, x: number, y: number) => {
    setLoc([
      ...locations.slice(0, id),
      [locations[id][0] + x, locations[id][1] + y],
      ...locations.slice(id + 1),
    ]);
  };

  const modals = contents.map((content, i) => {
    return (
      <Modal
        show={showModal[i]}
        title={titles[i]}
        content={content}
        zIndex={indexes[i]}
        loc={locations[i]}
        onDragMove={(x: number, y: number) => moveModal(i, y, x)}
        key={i}
      />
    );
  });

  return (
    <>
      <Head>
        <title>YEAHx4 | Portfolio</title>
        <meta name="description" content="Hello. I'm YEAHx4." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <Lock show={show} setShow={setShow} />
        <Dock
          toggleModal={(i) =>
            setShowModal([
              ...showModal.slice(0, i),
              !showModal[i],
              ...showModal.slice(i + 1),
            ])
          }
        />
        {modals}
      </div>
    </>
  );
}
