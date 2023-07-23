import {Comment } from "../../types/comment"

const Comment: React.FC<Comment> = ({comment:C}) => {
  return (
    <div className="flex items-center w-full space-x-5">
      
          <p>{ comment}</p>
    </div>
  );
};

export default Comment;
