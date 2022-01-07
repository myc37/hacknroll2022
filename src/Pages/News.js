import React, { useState } from "react";
import Card from "../Components/Card";

const News = () => {
  const [allNews, setAllNews] = useState([]);

  async function getData() {
    const res = await fetch(
      "https://yh-finance.p.rapidapi.com/auto-complete?q=finance&region=SG",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "yh-finance.p.rapidapi.com",
          "x-rapidapi-key":
            "ca1dd9fed1msh597f983568710e3p1ce849jsn4982e0707cc5",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        return response.news;
      })
      .catch((err) => {
        console.error(err);
      });
    return res;
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      // console.log(data);
      setAllNews(data);
    };
    fetchData();
  }, []);

  const news = allNews.map((item, index) => {
    return (
      <Card
        key={index}
        title={item.title}
        publisher={item.publisher}
        link={item.link}
      />
    );
  });

  return (
    <>
      <h2 className="mt-8 font-bold text-2xl text-center">News</h2>
      {allNews.length !== 0 ? (
        <div className="grid grid-cols-3 grid-flow-row auto-rows-max mb-4">
          {news}
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <div>
            <h2 className="block">Fetching News</h2>
            <div className="mt-3 w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin block"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
