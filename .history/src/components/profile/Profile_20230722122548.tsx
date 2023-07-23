import { comments } from "../../demo";
import PostBox from "../feed/PostBox";
import PostCard from "../feed/PostCard";
import Layout from "../layout/Layout";
import ProfileImage from "./ProfileImage";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col mt-5 h-screen px-5  space-y-5">
      <Layout>
      <ProfileImage />
      <section>
        <PostBox />
      </section>
      <section>
        <PostCard comments={comments} />
      </section>
    </Layout>
  );
};

export default Profile;
