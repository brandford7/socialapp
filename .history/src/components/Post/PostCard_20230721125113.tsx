import UserAvatar from "../UserAvatar";
import PostBody from "./PostBody";

const PostCard: React.FC = () => {
  return (
    <div className="post space-y-4 h-60 min-h-fit w-full rounded-md p-5 border border-black">
      <section><UserAvatar name="kk" /> <p>name</p>
      <PostBody />
    </div>
  );
};

export default PostCard;