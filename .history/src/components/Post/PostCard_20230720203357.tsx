import UserAvatar from "../UserAvatar";
import PostBody from "./PostBody";

const PostCard: React.FC = () => {
  return (
    <div className="post space-">
      <UserAvatar name="" />
      <PostBody />
    </div>
  );
};

export default PostCard;
