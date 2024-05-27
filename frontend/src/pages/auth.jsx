import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import React from "react";

export const Auth = () => {
  return (
    <div className="sign-in-container flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
      <SignedOut className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Welcome to Nalanda Library{" "}
          <span role="img" aria-label="books emoji">
            📚
          </span>
        </h1>

        <div className="flex flex-col items-center space-y-4">
          <SignInButton className="w-48 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 transform transition duration-300 hover:scale-105">
            Sign In
          </SignInButton>
          <SignUpButton className="w-48 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-400 transform transition duration-300 hover:scale-105">
            Sign Up
          </SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </div>
  );
};
