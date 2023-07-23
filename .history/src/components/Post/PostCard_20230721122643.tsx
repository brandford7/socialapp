import UserAvatar from "../UserAvatar";
import PostBody from "./PostBody";

const PostCard: React.FC = () => {
  return (
    <div className="post space-y-5 h-120 w-8 border border-black">
      <UserAvatar name="kk" />
      <PostBody />
    </div>
  );
};

export default PostCard;
