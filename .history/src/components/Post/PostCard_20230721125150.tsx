import UserAvatar from "../UserAvatar";
import PostBody from "./PostBody";

const PostCard: React.FC = () => {
  return (
    <div className="post space-y-4 h-60 min-h-fit w-full text-black rounded-md p-5 border border-black">
      <section>
        <UserAvatar name="kk" /> <p>Hello</p>
      </section>
      <PostBody />
    </div>
  );
};

export default PostCard;
