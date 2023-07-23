import React from "react";
import photo from "../../assets/images/react.svg";


const ProfileImage = () => {
  return (
    <div className="flex flex-col rounded-md lg:mx-auto ">
      <section>
        <img src={photo} className="w-full lg:rounded-full border-2 p-1 bg-gray-100 rounded-md " />
        <h4 className="text-black font-bold text-center text-4xl">
          Brandford Junior
        </h4>
          </section>
         
    </div>
  );
};

export default ProfileImage;
