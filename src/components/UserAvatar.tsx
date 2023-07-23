import React from "react";

interface UserAvatar {
  image?: string;
  name: string;
}
const UserAvatar: React.FC<UserAvatar> = ({ image, name }) => {
  return (
    <div className="flex items-center shadow-md rounded-full border-2 border-yellow-300 ">
      {image !== undefined ? (
        <img src={image} alt={name} className=" " />
      ) : (
        <p className="text-blue-500">{name.split('')[0]}</p>
      )}
    </div>
  );
};

export default UserAvatar;
