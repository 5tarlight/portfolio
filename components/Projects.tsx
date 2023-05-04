import { NextPage } from "next";

const Projects: NextPage = () => (
  <>
    <div className="container">
      <div className="profile">
        <span className="nickname">Projects</span>
      </div>
      <div>TBD</div>
    </div>

    <style jsx>{`
      .container * {
        display: block;
      }

      .profile {
        display: flex !important;
        justify-content: space-between;
        margin-bottom: 2rem;
      }

      .nickname {
        font-size: 2rem;
        font-weight: 700;
      }
    `}</style>
  </>
);

export default Projects;
