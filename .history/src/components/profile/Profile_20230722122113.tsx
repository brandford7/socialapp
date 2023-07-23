import PostBox from "../feed/PostBox";
import PostCard from "../feed/PostCard";
import Layout from "../layout/Layout";
import ProfileImage from "./ProfileImage";

const Profile: React.FC = () => {
  return (
    <Layout>
      <ProfileImage />
      <section>
        <PostBox />
      </section>
      <section>
        <PostCard comment />
      </section>
    </Layout>
  );
};

export default Profile;
