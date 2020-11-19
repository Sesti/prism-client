import React, { useEffect, useState } from "react";
import ModuleLoading from "../../ModulesComponents/ModuleLoading";
import "./SpotifyApp.css";
import SpotifyAppView from "./SpotifyAppView";
import SpotifyAppExpanded from "./SpotifyAppExpanded";

export default function SpotifyApp(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  if (loading) return <ModuleLoading />;

  return props.expanded ? (
    <SpotifyAppExpanded {...data} />
  ) : (
    <SpotifyAppView {...data} />
  );
}
