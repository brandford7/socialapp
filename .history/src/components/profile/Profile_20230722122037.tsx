import PostBox from "../feed/PostBox";
import Layout from "../layout/Layout";
import ProfileImage from "./ProfileImage";

const Profile: React.FC = () => {
  return (
    <Layout>
      <ProfileImage />
      <section>
        <PostBox />
          </section>
          <section>Postc</section>
    </Layout>
  );
};

export default Profile;
