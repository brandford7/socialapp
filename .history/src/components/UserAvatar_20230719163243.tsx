import React from "react";

interface UserAvatar{
    image: string;
    name:
}
const UserAvatar:React.FC<UserAvatar>=  () => {
  return (
    <>
      <image src={image} alt="name" />
    </>
  );
};

export default UserAvatar;
