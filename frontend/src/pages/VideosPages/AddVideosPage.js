import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";
import AddVideos from "features/DataManagement/components/CategoryModules/Videos/AddVideos";

const AddVideosPage = () => {
  return (
    <MenuContainer title={"Videos Hinzufügen"}>
      <AddVideos />
    </MenuContainer>
  );
};

export default AddVideosPage;
