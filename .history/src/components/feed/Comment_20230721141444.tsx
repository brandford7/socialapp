import SendButton from "../buttons/SendButton";

interface Comment{
    comment
}
const Comment: React.FC = () => {
  return (
    <div className="flex items-center w-full space-x-5">
      
      <SendButton />
    </div>
  );
};

export default Comment;
