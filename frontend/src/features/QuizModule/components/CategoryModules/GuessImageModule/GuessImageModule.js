import "./GuessImageModule.css";
import useLocalFetch from "hooks/useLocalFetch";
import GuessImageContent from "features/QuizModule/components/CategoryModules/GuessImageModule/GuessImageContent/GuessImageContent";
import ModuleComponent from "features/QuizModule/components/CategoryModules/ModuleComponent/ModuleComponent";

const GuessImageModule = () => {
  const { getRandomImagesGuess } = useLocalFetch();
  return (
    <ModuleComponent
      fetchFunction={getRandomImagesGuess}
      noDataText={"Keine Bilder mehr vorhanden"}
      ContentComponent={GuessImageContent}
    />
  );
};

export default GuessImageModule;
