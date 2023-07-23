import UserAvatar from "../UserAvatar";
import PostBody from "./PostBody";

const PostCard: React.FC = () => {
  return (
    <div className="post space-y-5 h-60 wfull rounded-md p-5 border border-black">
      <UserAvatar name="kk" />
      <PostBody />
    </div>
  );
};

export default PostCard;
