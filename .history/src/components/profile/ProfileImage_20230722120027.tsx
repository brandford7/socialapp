import React from "react";
import photo from "../../assets/images/react.svg";

const ProfileImage = () => {
  return (
    <div className="flex flex-col rounded-md lg:mx-auto ">
      <img src={photo} className=" lg:w-1/3 border-2 rounded-md " />
    </div>
  );
};

export default ProfileImage;
