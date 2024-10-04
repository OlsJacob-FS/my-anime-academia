import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";

function Stash() {
  //Collect ID from mongoDB to search for anime in API by ID

  //Collect Api Data to display

  //GET request to mongoDB for ID for API Call
  const [stashData, setStashData] = useState();
  // gets the IDs from MongoDB
  const featchAnimeId = async () => {
    const response = await fetch("http://localhost:3000/api/v1/stash");
    const animeId = await response.json();
    const animeIdArr = animeId.data.map((anime) => anime.id);
    console.log("array of IDs >>>", animeIdArr);
    return sendIdData(animeIdArr);
  };
  //iterate through fetchAnimeCard api call
  const sendIdData = async (animeId) => {
    let responseArray = await Promise.all(
      animeId.map(async (i) => {
        return { i, anime: await fetchAnimeCard(i) };
      })
    );
    console.log("res array >> ", responseArray);
    return responseArray;
  };
  //GET anime's
  const fetchAnimeCard = async (n) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${n}`);
    const animeFetched = await res.json();
    const anime = animeFetched.data;
    console.log("This is anime>>", anime);
    return anime;
  };

  //Set state for stash card
  useEffect(() => {
    const fetchData = async () => {
      try {
        const animeIDs = await featchAnimeId();
        console.log("anime from API call", animeIDs);
        setStashData(animeIDs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log("this is stash>>", stashData);

  return (
    <>
      <h1 className="headerStash">Stash</h1>
      <div className="homeDiv flex flex-wrap place-content-center gap-4 mx-auto w-full">
        {stashData?.map((anime, i) => (
          <CardComponent
            btnFunct={anime?.anime.mal_id}
            title={anime?.anime.title}
            img={anime?.anime.images.jpg.image_url}
            key={i}
          />
        ))}
      </div>
    </>
  );
}
export default Stash;
