import { useState } from "react";
import "./App.css";

function App() {
  interface Episode {
    id: number;
    name: string;
    season: number;
    number: number;
  }
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  async function handleFetchClick() {
    const response = await fetch("https://api.tvmaze.com/shows/56116/episodes");
    const data = await response.json();
    setEpisodes(data);
  }

  const episodeUiFragments = episodes.map((episode) => (
    <li key={episode.id}>
      {episode.name} season: {episode.season} episode {episode.number}
    </li>
  ));

  return (
    <div className="app">
      Hello, Folks
      <ul>{episodes.length > 0 && episodeUiFragments}</ul>
      <button onClick={handleFetchClick}>Get Episodes</button>
    </div>
  );
}

export default App;
