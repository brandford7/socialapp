import UserAvatar from "../UserAvatar";
import SendButton from "../buttons/SendButton";

const CommentBox: React.FC = () => {
  return (
    <div className="flex items-center w-full space-x-5 px-5">
      <UserAvatar name="Brand" />
      <textarea className=" border-2 w-3/4 lg:80 h-8 p-5  resize rounded-md"></textarea>

      <SendButton />
    </div>
  );
};

export default CommentBox;
