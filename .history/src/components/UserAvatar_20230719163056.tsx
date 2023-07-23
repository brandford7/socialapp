import React from "react";

interface UserAvatar{
    image
}
const UserAvatar = ({ image:string, name }) => {
  return (
    <>
      <image src={image} alt="name" />
    </>
  );
};

export default UserAvatar;
