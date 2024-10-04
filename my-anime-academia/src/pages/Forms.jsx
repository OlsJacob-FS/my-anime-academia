import React, { useEffect, useState } from "react";
import axios from "axios";
import FormCard from "../components/FormCard";

function Forms() {
  //Get Forms Data from mongo db
  const [formData, setFormData] = useState({
    user: "",
    title: "",
    body: "",
  });
  //Handle the input from form table from user
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //post form data to mongodb server
  function handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/forms", { form: formData })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  //GET form data from API and post it to card
  const [discussionPost, setDiscussionPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/forms")
      .then((res) => setDiscussionPost(res.data.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h1 className="formsHeader">Discussions</h1>
      <div className="flex flex-nowrap gap-4 mt-10 place-content-center mx-auto">
        <div className="inputCard ">
          <h2 className="inputHeader">What would you like to Discuss?</h2>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col mx-auto place-content-center"
          >
            <input
              placeholder="User Name"
              type="text"
              name="user"
              value={formData.user}
              onChange={handleInput}
              className="formsInput"
            ></input>
            <input
              placeholder="Title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInput}
              className="formsInput"
            />
            <textarea
              placeholder="Enter Description"
              className="inputField h-full text-wrap flex-wrap"
              type="text"
              name="body"
              value={formData.body}
              onChange={handleInput}
            />
            <button radius="full" className="w-4 left-0 formBtn" type="submit">
              Submit Post
            </button>
          </form>
        </div>
        <div className="formCard border-2">
          <div className="flex flex-wrap formStyling"></div>
          {discussionPost.map((data, i) => (
            <FormCard
              key={i}
              userName={data.user}
              formTitle={data.title}
              formBody={data.body}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Forms;
