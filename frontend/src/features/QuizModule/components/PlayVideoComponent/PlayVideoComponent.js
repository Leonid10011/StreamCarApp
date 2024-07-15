import YouTube from "react-youtube";
import { useEffect } from "react";

const PlayVideoComponent = ({ data }) => {
  const opts = {
    height: "690",
    width: "900",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    console.log("VideoComponent: ", data._id);
  }, []);

  return (
    <>
      <YouTube videoId={data._id} opts={opts} />
    </>
  );
};

export default PlayVideoComponent;
