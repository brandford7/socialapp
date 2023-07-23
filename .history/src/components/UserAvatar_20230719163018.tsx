import React from "react";

const UserAvatar = ({ image, name }) => {
  return (
    <>
      <image src={image} alt="name" />
    </>
  );
};

export default UserAvatar;
