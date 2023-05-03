import Dock from "@/components/Dock";
import Lock from "@/components/Lock";
import Modal from "@/components/Modal";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(true);

  const profileContent = (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      Profile
    </div>
  );
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

  const titles = [
    "Profile - YEAHx4",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  const indexes = [-1, -1, -1, -1, -1];

  const [showModal, setShowModal] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const modals = contents.map((content, i) => {
    return (
      <Modal
        show={showModal[i]}
        title={titles[i]}
        content={content}
        zIndex={indexes[i]}
        key={i}
      />
    );
  });

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

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

      <style jsx>{`
        .main {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
