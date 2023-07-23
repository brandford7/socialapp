import { IoMdSend } from "react-icons/io";
const SendButton: React.FC = () => {
  return (
    <>
      <button>
        <IoMdSend className="text-yellow-300 hover:text-blue-500 text-2xl" />
      </button>
    </>
  );
};

export default SendButton;
