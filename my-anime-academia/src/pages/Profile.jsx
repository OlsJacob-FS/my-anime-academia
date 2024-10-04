import React, { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";
import axios from "axios";

const Profile = () => {
  //Random User data for Profile page
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await axios.get("https://randomuser.me/api/1.4/");
        setUserData(user.data.results[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log("this is userData>>", userData);
  const picture = userData.picture;
  const name = userData.name;

  console.log(picture);
  console.log(name);

  return (
    <div className=" flex flex-row userSection place-content-center">
      <h1>Profile</h1>
      <div className="flex gap-4 place-content-center profileForm border-2">
        <div>
          <Avatar src={picture?.large} className="profileImage text-large" />
        </div>

        <div className="">
          <p className="userData">{name?.first}</p>
          <p className="userData">{name?.last}</p>
          <p className="userData">{userData?.email}</p>
          <p className="userData">Favorite Anime: Jujustu Kaisen</p>
          <p className="userData">Favoite Anime Genre: Action/Adventure</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
