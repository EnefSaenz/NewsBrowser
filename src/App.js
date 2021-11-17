import React, { Fragment, useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import NewsList from "./components/NewsList";

function App() {
  // States
  const [country, setCountry] = useState("mx");
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  // Calling API
  useEffect(() => {
    const callAPI = async () => {
      const keyAPI = "d1de03b710144ff0b9c2196d5a317ae6";
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${keyAPI}`;
      const response = await fetch(url);
      const news = await response.json();

      setNews(news.articles);
    };
    callAPI();
  }, [category, country]);

  return (
    <Fragment>
      <Header title="Noticias de última hora" />

      <div className="container white">
        <Form setCategory={setCategory} setCountry={setCountry} />

        <NewsList news={news} />
      </div>
    </Fragment>
  );
}

export default App;
