import React from "react";

interface UserAvatar{
    image:string;
}
const UserAvatar:UserAvatar = ({ image:string, name }) => {
  return (
    <>
      <image src={image} alt="name" />
    </>
  );
};

export default UserAvatar;
