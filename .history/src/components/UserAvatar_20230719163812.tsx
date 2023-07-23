import React from "react";

interface UserAvatar {
  image?
  name: string;
}
const UserAvatar: React.FC<UserAvatar> = ({ image, name }) => {
  return (
    <div className='rounded-full'>
      <image src={image} alt={name} />
    </div>
  );
};

export default UserAvatar;
