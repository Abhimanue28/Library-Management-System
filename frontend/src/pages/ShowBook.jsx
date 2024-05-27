import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center text-indigo-600 font-bold">
        Show Book
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-4 border-purple-600 rounded-xl w-full max-w-lg p-6 mx-auto shadow-lg">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-700 font-semibold">
              Id:
            </span>
            <span className="text-lg font-medium text-gray-900">
              {book._id}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-700 font-semibold">
              Title:
            </span>
            <span className="text-lg font-medium text-gray-900">
              {book.title}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-700 font-semibold">
              Author:
            </span>
            <span className="text-lg font-medium text-gray-900">
              {book.author}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-700 font-semibold">
              Publish Year:
            </span>
            <span className="text-lg font-medium text-gray-900">
              {book.publishYear}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-700 font-semibold">
              Create Time:
            </span>
            <span className="text-lg font-medium text-gray-900">
              {new Date(book.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-700 font-semibold">
              Last Update Time:
            </span>
            <span className="text-lg font-medium text-gray-900">
              {new Date(book.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
