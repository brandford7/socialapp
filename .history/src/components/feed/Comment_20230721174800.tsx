import { Comment } from "../../types/comment";

const CommentBox: React.FC<Comment> = ({ content }) => {
  return (
    <div className="flex items-center w-full space-x-5">
      <p>{content}</p>
    </div>
  );
};

export default CommentcONTENT;
