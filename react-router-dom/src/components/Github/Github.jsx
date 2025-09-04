import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteschoudary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  });
  return <div className="text-center ">Github followers:{data.followers}</div>;
};

export default Github;
