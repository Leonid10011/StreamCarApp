import ListItem from "features/DataManagement/components/ListComponent/ListItem/ListItem";
import styles from "./ManageVideosComponent.module.css";

const { Row, Col } = require("react-bootstrap");
const { default: YouTube } = require("react-youtube");

const MyYouTubeComponent = ({ videoId }) => {
  const opts = {
    height: "270",
    width: "520",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

const ManageVideosComponent = ({
  videos,
  currentVideo,
  handleClick,
  handleDelete,
}) => {
  return (
    <>
      <Row>
        <Col className={styles.modifyVideos}>
          {videos.map((v) => (
            <ListItem
              key={v._id}
              data={v}
              onDelete={() => handleDelete(v._id)}
              onClick={() => handleClick(v)}
              isSelected={currentVideo && currentVideo._id === v._id}
            />
          ))}
        </Col>
        <Col>
          <MyYouTubeComponent videoId={currentVideo.link} />
        </Col>
      </Row>
    </>
  );
};

export default ManageVideosComponent;
