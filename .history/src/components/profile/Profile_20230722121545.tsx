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
    </Layout>
  );
};

export default Profile;
