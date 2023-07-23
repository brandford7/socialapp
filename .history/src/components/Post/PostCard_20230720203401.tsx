import UserAvatar from "../UserAvatar";
import PostBody from "./PostBody";

const PostCard: React.FC = () => {
  return (
    <div className="post space-x-3">
      <UserAvatar name="" />
      <PostBody />
    </div>
  );
};

export default PostCard;
