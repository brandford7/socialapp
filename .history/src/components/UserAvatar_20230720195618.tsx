import React from "react";

interface UserAvatar {
  image?: string;
  name: string;
}
const UserAvatar: React.FC<UserAvatar> = ({ image, name }) => {
  return (
    <div className="rounded-full border-2 border-black px-1">
      <img src={image} alt={name} className="h-sm" />
    </div>
  );
};

export default UserAvatar;
