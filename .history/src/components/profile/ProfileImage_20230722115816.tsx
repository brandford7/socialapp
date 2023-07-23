import React from "react";
import photo from "../../assets/images/react.svg";

const ProfileImage = () => {
  return (
    <div className="rounded-md lg:mx-auto ">
      <img src={photo} className="bg-cover w-full border-2 rounded-md " />
    </div>
  );
};

export default ProfileImage;
