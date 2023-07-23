import SendButton from "../buttons/SendButton";

interface Comment{
    comment: string
    
}
const Comment: React.FC<Comment> = () => {
  return (
    <div className="flex items-center w-full space-x-5">
      
          <p>{ comment}</p>
    </div>
  );
};

export default Comment;
