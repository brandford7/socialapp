import React from "react";

interface UserAvatar{
    image:string;
}
const UserAvatar:UserAvatar  () => {
  return (
    <>
      <image src={image} alt="name" />
    </>
  );
};

export default UserAvatar;
