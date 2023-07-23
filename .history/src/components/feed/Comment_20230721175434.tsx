import { Comment } from "../../types/comment";

const CommentContent: React.FC<Comment> = ({ content,author, }) => {
  return (
    <div className="flex items-center w-full space-x-5">
      <p>{content}</p>
    </div>
  );
};

export default CommentContent;
