import React from "react";
import photo from "../../assets/images/react.svg";

const ProfileImage = () => {
  return (
    <div>
      <img src={photo} className="w-full border " />
    </div>
  );
};

export default ProfileImage;
