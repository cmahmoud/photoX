import { useSuperContext } from "./lib";
import { useEffect } from "react";
import axios from "axios";
import { Image, Search } from "./components";

function App() {
  const { state, dispatch } = useSuperContext();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.unsplash.com/photos?per_page=30", {
          headers: {
            Authorization: "Client-ID " + process.env.REACT_APP_TOKEN,
          },
        })
        .then((result) => {
          dispatch({ type: "SET_PHOTOS", payload: result.data });
        });
    };
    fetchData();
  }, []);
  return (
    <div className="App min-h-screen px-2 md:px-10">
      <h1 className="text-3xl lg:text-5xl font-bold text-purple-500 my-3 text-center">
        Best Photos For You
      </h1>
      <Search />
      <div className="columns-1 md:columns-2 lg:columns-3">
        {state.photos &&
          state.photos.map((photo, index) => (
            <Image key={index} photo={photo} />
          ))}
      </div>
    </div>
  );
}

export default App;
