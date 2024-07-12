import ManageImage from "features/DataManagement/components/CategoryModules/Images/ManageImages/ManageImages";
import MenuContainer from "features/DataManagement/components/MenuContainer/MenuContainer";

const ManageImagesPage = () => {
  return (
    <MenuContainer title={"Bilder Verwalten"}>
      <ManageImage />
    </MenuContainer>
  );
};

export default ManageImagesPage;
