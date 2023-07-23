import SendButton from "../buttons/SendButton";


const PostBox: React.FC = () => {
  return (
    <div className="flex items-center w-full space-x-5">
      <textarea className=" border-2 w-5/6 lg:80  resize rounded-md"></textarea>
      <SendButton />
    </div>
  );
};

export default PostBox;
