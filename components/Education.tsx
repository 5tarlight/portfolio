import { NextPage } from "next";

const Education: NextPage = () => (
  <>
    <div className="container">
      <div className="profile">
        <span className="nickname">Education</span>
      </div>

      <div className="edu-item">
        <div className="header">2012 ~ 2017</div>
        <div>Seoul Doek-su Elementary School</div>
      </div>

      <div className="edu-item">
        <div className="header">2018 ~ 2020</div>
        <div>Gwang-hee Middle School</div>
      </div>

      <div className="edu-item">
        <div className="header">2020</div>
        <div>Hanyang University Software Gifted</div>
      </div>

      <div className="edu-item">
        <div className="header">2021 ~ 2023</div>
        <div>Hanyang University High School</div>
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

      .edu-item {
        margin-bottom: 1rem;
      }

      .header {
        font-size: 1.2rem;
        font-weight: 600;
      }
    `}</style>
  </>
);

export default Education;
