import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import { Auth } from "./pages/auth";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

const App = () => {
  return (
    <div className="app-container">
      <div className="navbar bg-purple-600 text-white py-4 px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          📚 Nalanda Library Dashboard
        </Link>
        <SignedIn>
          <UserButton className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out" />
        </SignedIn>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </div>
  );
};

export default App;
