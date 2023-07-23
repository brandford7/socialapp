import UserAvatar from "../UserAvatar";
import PostBody from "../PostBody";

const PostCard: React.FC = () => {
  return (
    <div className="post space-y-4 bg-white h-60 min-h-fit w-full text-black rounded-md p-5 border border-black">
      <section className="top-section flex space-x-5 ">
              <UserAvatar name="kk" />
              <p>Brandford Junior</p>
      </section>
      <PostBody />
    </div>
  );
};

export default PostCard;
