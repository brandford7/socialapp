import React from "react";
import photo from "../../assets/images/react.svg";

const ProfileImage = () => {
  return (
    <div className="rounded-md px-0">
      <img src={photo} className="w-full border-2 rounded-md " />
    </div>
  );
};

export default ProfileImage;
