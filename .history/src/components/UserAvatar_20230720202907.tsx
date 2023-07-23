import React from "react";

interface UserAvatar {
  image?: string;
  name: string;
}
const UserAvatar: React.FC<UserAvatar> = ({ image, name }) => {
  return (
    <div className="rounded-full border-2 border-black p-1">
      <img src={image} alt={name} className="h- w-6" />
    </div>
  );
};

export default UserAvatar;
