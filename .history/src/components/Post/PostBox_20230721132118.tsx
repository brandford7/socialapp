import { IoMdSend } from "react-icons/io";
const PostBox: React.FC = () => {
  return (
    <div className="flex items-center space-x-5">
      <textarea className=" border-2 w-3/4 lg:80  resize rounded-md"></textarea>
      <IoMdSend className='text-yellow-300 text-2xl' />
    </div>
  );
};

export default PostBox;
