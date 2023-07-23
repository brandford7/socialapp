import SendButton from "../buttons/SendButton";

interface IComment{
    comment: string
    user:object
    
}
const Comment: React.FC<IComment> = ({comment}) => {
  return (
    <div className="flex items-center w-full space-x-5">
      
          <p>{ comment}</p>
    </div>
  );
};

export default Comment;
