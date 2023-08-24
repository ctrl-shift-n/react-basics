import React, { useContext, useState } from "react";
import { UserContext } from "../userContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUser({
      name: username,
      age: age,
    });
  };
  return (
    <div>
      <h1>This is profile page</h1>
      <p>Your details:</p>
      <p>
        Name: {user.name} and age: {user.age}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          className="bg-gray-100 p-2 rounded-md text-xl"
          type="text"
          placeholder="provide name to update"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="range"
          value={age}
          onChange={({ target }) => setAge(+target.value)}
          defaultValue={user.age}
        />
        <p>{age}</p>
        <button type="submit" className="bg-black text-white">
          Update
        </button>
      </form>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default Profile;
