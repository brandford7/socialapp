
import { IoMdSend } from "react-icons/io";
const PostBox: React.FC = () => {
  return (
    <div>
      <textarea className=" border-2 w-3/4  resize rounded-md"></textarea>
      <IoMdSend />
    </>
  );
};

export default PostBox;
