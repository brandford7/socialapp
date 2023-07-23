import React from "react";
import photo from "../../assets/images/react.svg";

const ProfileImage = () => {
  return (
    <div className="rounded-md lg:mx-auto ">
      <img src={photo} className=" w-1/3 border-2 rounded-md " />
    </div>
  );
};

export default ProfileImage;
