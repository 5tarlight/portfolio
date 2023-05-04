import Contact from "@/components/Contact";
import Dock from "@/components/Dock";
import Education from "@/components/Education";
import Lock from "@/components/Lock";
import Modal from "@/components/Modal";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import { useState } from "react";

export type Point = [number, number];

export default function Home() {
  const [show, setShow] = useState(true);

  const profileContent = <Profile />;
  const eduContent = <Education />;
  const skillContent = <Skills />;
  const proContent = <Projects />;
  const contactContent = <Contact />;

  const contents = [
    profileContent,
    eduContent,
    skillContent,
    proContent,
    contactContent,
  ];

  const [locations, setLoc] = useState<Point[]>([
    [0, 0],
    [50, 50],
    [100, 30],
    [150, 150],
    [200, 200],
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

  const moveUp = (id: number) => {
    const current = indexes[id];
    const newIndex = indexes.map((index, i) => {
      if (i === id) return 5;
      else {
        if (index >= current) return index - 1;
        else return index;
      }
    });

    setIndexes(newIndex);
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
        setShow={(show) => {
          setShowModal([
            ...showModal.slice(0, i),
            show,
            ...showModal.slice(i + 1),
          ]);
        }}
        moveUp={() => moveUp(i)}
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
