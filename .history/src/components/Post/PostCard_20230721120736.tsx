import UserAvatar from "../UserAvatar";
import PostBody from "./PostBody";

const PostCard: React.FC = () => {
  return (
    <div className="post space-y-5 h-auto w-">
      <UserAvatar name="kk" />
      <PostBody />
    </div>
  );
};

export default PostCard;
