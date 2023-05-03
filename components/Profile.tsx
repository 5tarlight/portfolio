import { NextPage } from "next";

const Profile: NextPage = () => (
  <>
    <div className="container">
      <div className="profile">
        <span className="nickname">YEAHx4</span>
        <img src="/profile.png" width={128} />
      </div>

      <div className="description">
        Hi. I'm YEAHx4, backend developer. I perfer backend though I am
        fullstack. I love AI. AI is cool and sexy! And I am trying to make safe
        software.
      </div>
      <div>Birth : 2005. 08. 17</div>
      <div>Country : South Korea</div>
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

      .description {
        margin-bottom: 1rem;
      }
    `}</style>
  </>
);

export default Profile;
