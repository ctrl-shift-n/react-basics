import React, { useContext } from "react";
import { UserContext } from "../userContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>This is homepage</h1>
      {user.name ? (
        <p>
          Welcome, {user.name}. Your age is {user.age}
        </p>
      ) : (
        <>
          <p>No name found, please update your detail</p>
        </>
      )}
      <Link to={"/profile"}>Go to profile</Link>
    </div>
  );
};

export default Home;
