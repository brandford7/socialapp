import React from "react";

interface UserAvatar{
    image:string;
}
const UserAvatar:User = ({ image:string, name }) => {
  return (
    <>
      <image src={image} alt="name" />
    </>
  );
};

export default UserAvatar;
