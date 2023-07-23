import React from "react";

interface UserAvatar{
    image:st
}
const UserAvatar = ({ image:string, name }) => {
  return (
    <>
      <image src={image} alt="name" />
    </>
  );
};

export default UserAvatar;
