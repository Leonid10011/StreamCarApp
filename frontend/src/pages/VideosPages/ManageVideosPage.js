import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";
import ManageVideos from "features/DataManagement/components/CategoryModules/Videos/ManageVideos/ManageVideos";

const ManageVideosPage = () => {
  return (
    <MenuContainer title={"Videos Verwalten"}>
      <ManageVideos />
    </MenuContainer>
  );
};

export default ManageVideosPage;
