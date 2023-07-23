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
    <div className="post space-y-4 bg-white h-60 min-h-fit w-full text-black rounded-md  border border-black">
      <section className="top-section flex p-5 space-x-5 border">
        <UserAvatar name="kk" />
        <p>Brandford Junior</p>
      </section>
      <PostBody />
      <section>
        <CommentBox />
      </section>
      {comments?.map((comment) => (
        <CommentContent key={comment.id} content={comment.content} author= />
      ))}
    </div>
  );
};

export default PostCard;
