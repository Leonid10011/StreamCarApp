import React, { useState } from "react";
import { postVideo } from "services/api";
import InputArea from "features/DataManagement/components/InputArea/InputArea";
import DataManagementContainer from "features/DataManagement/components/DataManagementContainer/DataManagementContainer";
import useManageItems from "features/DataManagement/hooks/useManageItems";
import ActionButton from "features/DataManagement/components/ActionButton/ActionButton";

const AddVideos = () => {
  const [videos, setVideos] = useState("");

  const handleUpload = async () => {
    if (videos === "") {
      throw new Error("Mindestens einen Youtube-Link eingeben");
    }

    const videoArray = videos.split("\n");

    const promises = videoArray.map(async (v) => {
      try {
        const videoDocument = {
          link: v.slice(-11),
          question: "placeholder",
          answer: "placeholder",
        };
        await postVideo("zoom", videoDocument);
      } catch (error) {
        console.error(error.message);
        throw error;
      }
    });

    await Promise.all(promises);
  };

  const { postItem } = useManageItems({
    postFunc: handleUpload,
  });

  return (
    <>
      <DataManagementContainer
        name={"Videos Hinzufügen"}
        destination={"/videos/manage/zoom"}
        buttonName={"Videos Verwalten"}
        buttons={<ActionButton text={"Video Hinzufügen"} onClick={postItem} />}
        content={
          <InputArea
            data={videos}
            setData={setVideos}
            ph={
              "Format: Jede Zeile ein YoutubeLink. Entweder ganzen link oder nur die youtubeId (die letzten 11 Zeichen)\nZ.B. 7.https://www.youtube.com/watch?v=lps9rC7f0VI oder  lps9rC7f0VI "
            }
          />
        }
      />
    </>
  );
};

export default AddVideos;
