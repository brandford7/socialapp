import React from "react";

interface UserAvatar{
    image:string;
}
const UserAvatar: = ({ image:string, name }) => {
  return (
    <>
      <image src={image} alt="name" />
    </>
  );
};

export default UserAvatar;
