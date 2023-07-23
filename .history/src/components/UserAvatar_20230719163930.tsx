import React from "react";

interface UserAvatar {
  image?:string
  name: string;
}
const UserAvatar: React.FC<UserAvatar> = ({ image, name }) => {
  return (
    <div className='rounded-full'>
      <img src={image} alt={name} />
    </div>
  );
};

export default UserAvatar;
