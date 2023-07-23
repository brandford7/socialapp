import React from "react";

interface UserAvatar {
  image?: string;
  name: string;
}
const UserAvatar: React.FC<UserAvatar> = ({ image, name }) => {
  return (
    <div>
      <image src={image} alt={name} />
    </>
  );
};

export default UserAvatar;
