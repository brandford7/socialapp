import { Comment } from "../../types/comment";

const CommentBox: React.FC<Comment> = ({ content }) => {
  return (
    <div className="flex items-center w-full space-x-5">
      <p>{comment}</p>
    </div>
  );
};

export default CommentBox;
