import { NextPage } from "next";

const Profile: NextPage = () => (
  <>
    <div className="container">
      <div className="profile">
        <span className="nickname">Skills</span>
      </div>

      <div className="item">
        <div className="header">Languages</div>
        <div>
          C/C++, C#, HTML/CSS/SCSS, Javascript, Typescript, Rust, Java, Kotlin,
          Python
        </div>
      </div>

      <div className="item">
        <div className="header">Domains</div>
        <div>
          Frontend, Backend, ConsoleApplication, DesktopApplication, Algorithm,
          AI
        </div>
      </div>

      <div className="item">
        <div className="header">Frameworks</div>
        <div>
          Node.js, React.js, Next.js, Nest.js, GraphQL, CMake, Gradle, Spring,
          Spring Boot, Discord
        </div>
      </div>
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

      .item {
        margin-bottom: 1rem;
      }

      .header {
        font-size: 1.2rem;
        font-weight: 600;
      }
    `}</style>
  </>
);

export default Profile;
