import React, { useEffect, useState } from "react";
import ModuleLoading from "../../ModulesComponents/ModuleLoading";
import NewsAppView from "./NewsAppView";
import NewsAppExpanded from "./NewsAppExpanded";
import "./NewsApp.css";

const NewsApp = (props) => {
  const [data, setData] = useState({});
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    setInterval(fetchData, 60000 * 60);
  }, []);

  useEffect(() => {
    setTimeout(changeNew, 30000);
  }, [index, data.length]);

  const changeNew = () => {
    const newIndex = index + 1;
    newIndex >= data.length ? setIndex(0) : setIndex(newIndex);
  };

  const fetchData = async () => {
    const res = await fetch(props.url + "/api/v1/news");

    if (res.ok) {
      const json = await res.json();
      const news = json.data.map((item) => ({
        title: item.title._text,
        link: item.link._text,
        pubDate: item.pubDate._text,
        description: item.description._text,
        url: item["media:content"]._attributes.url,
      }));
      setData(news);
      setLoading(false);
    }
  };

  if (loading) return <ModuleLoading />;

  return props.expanded ? (
    <NewsAppExpanded data={data} index={index} />
  ) : (
    <NewsAppView {...data[index]} index={index} />
  );
};

export default NewsApp;
