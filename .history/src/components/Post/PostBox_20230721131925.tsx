
import { IoMdSend } from "react-icons/io";
const PostBox: React.FC = () => {
  return (
    <div className='flex space-x-5'>
      <textarea className=" border-2 w-3/4  resize rounded-md"></textarea>
      <IoMdSend />
    <div>
  );
};

export default PostBox;
