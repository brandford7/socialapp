import { comments, posts } from "../../demo";
import { Post } from "../../types/post";
import UserAvatar from "../UserAvatar";
import CommentBox from "./CommentBox";
import PostBody from "./PostBody";


const PostCard: React.FC<Comment> = () => {
  console.log(posts)
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

      { comments?.map(comment => <Comment comment={comment}) /> }
    </div>
  );
};

export default PostCard;
