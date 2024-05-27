import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center text-indigo-600 font-bold">
        Create Book
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-4 border-purple-600 rounded-xl w-[600px] p-4 mx-auto shadow-lg">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700 font-semibold">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-purple-500 px-4 py-2 w-full rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700 font-semibold">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-purple-500 px-4 py-2 w-full rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700 font-semibold">
            Publish Year
          </label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-purple-500 px-4 py-2 w-full rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>
        <button
          className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition duration-300 ease-in-out"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
