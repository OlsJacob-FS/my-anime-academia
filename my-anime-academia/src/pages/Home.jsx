import CardComponent from "../components/CardComponent";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";

//https://api.jikan.moe/v4/random/anime
function Home() {
  //Data used for get all request to display on home page.
  const [data, setData] = useState([]);
  //Generate random number for page of API to display.
  const randomPage = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  //Call to featch the API with a random page number
  //Initial Api call to fill Cards
  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime?sfw=true&page=${randomPage(1, 30)}`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  //console.log(data);
  //fetch Anime when random button is clicked.
  const fetchAnime = () => {
    axios
      .get(`https://api.jikan.moe/v4/anime?sfw=true&page=${randomPage(1, 30)}`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  //SEARCH BAR:::
  //Collect search Form data

  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  //Handle the submit from search Button
  const searchAnime = () => {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${inputValue}&sfw=true`)
      .then((resp) => setData(resp.data.data))
      .catch((err) => console.log(err));
  };

  //Post anime api ID to mongo DB
  const handleIdChange = (e) => {
    const { name, value } = e.target;
    console.log({ value });
    setIdData(() => ({
      [name]: value,
    }));
  };
  const [idData, setIdData] = useState({
    id: "",
  });

  const postId = (e) => {
    console.log("this is idData>>", idData);
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/stash", { stashs: idData })
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="font-bold p-2 homeTitle">Discover</h1>
      <div className="w-full flex  gap-2 mx-auto place-content-center searchBarComp">
        <input
          value={inputValue}
          onChange={handleInput}
          placeholder="Search"
          className="searchBar"
        />
        <Button type="submit" onClick={searchAnime}>
          Submit
        </Button>
      </div>
      <div className="homeDiv flex flex-wrap place-content-center gap-4 mx-auto w-full">
        {data.map((item, i) => (
          <CardComponent
            key={i}
            btnFunct="Stash"
            titleValue={item.title}
            title={item.title}
            img={item.images.jpg.large_image_url}
            cardId={item.mal_id}
            idClick={handleIdChange}
            idPost={postId}
          />
        ))}
      </div>
      <div>
        <Button className="genBtn" onClick={fetchAnime}>
          Find New
        </Button>
      </div>
    </>
  );
}

export default Home;
