import { comments, posts } from "../../demo";

import UserAvatar from "../UserAvatar";
import CommentContent from "./Comment";
import CommentBox from "./CommentBox";
import PostBody from "./PostBody";
import { Comment } from "../../types/comment";

type PostCardProps = {
  comments: Comment[];
};

const PostCard: React.FC<PostCardProps> = () => {
  console.log(posts);
  return (
    <div className="post space-y-4 bg-white h-auto min-h-fit w-full text-black rounded-md  border border-gra-300">
      <section className="top-section flex p-5 space-x-5 border">
        <UserAvatar name="kk" />
        <p>Brandford Junior</p>
      </section>
      <PostBody />
      <section>
        <CommentBox />
      </section>
      <h4>{comments.length>1 ? 'Comments': 'Comment</h4>
      {comments.length> 0 && comments?.map((comment) => (
        <CommentContent key={comment.id} content={comment.content} author={comment.author}  />
      ))}
    </div>
  );
};

export default PostCard;
