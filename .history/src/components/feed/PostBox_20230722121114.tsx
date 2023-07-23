import UserAvatar from "../UserAvatar";
import SendButton from "../buttons/SendButton";

const PostBox: React.FC = () => {
  return (
    <div className="flex items-center w-full space-x-5 h-32 border-2 mx-5 px-2 rounded-md">
      <UserAvatar name="Brand" />
      <textarea className="border-2  w-5/6  lg:80  resize rounded-md"></textarea>
      <SendButton />
    </div>
  );
};

export default PostBox;
