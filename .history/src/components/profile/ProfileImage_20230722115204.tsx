import React from "react";
import photo from "../../assets/images/react.svg";

const ProfileImage = () => {
  return (
    <div rounded-md>
      <img src={photo} className="w-full border-2 rounded-md " />
    </div>
  );
};

export default ProfileImage;
