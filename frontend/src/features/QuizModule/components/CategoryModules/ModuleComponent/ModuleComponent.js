import CategoryFrame from "features/QuizModule/components/CategoryFrame/CategoryFrame";
import StartFrame from "features/QuizModule/components/CategoryFrame/StartFrame/StartFrame";
import useModuleData from "features/QuizModule/hooks/useModuleData";

const ModuleComponent = ({
  fetchFunction,
  startFrameText = "Start Drücken",
  noDataText = "Keine Daten Vorhanden",
  ContentComponent,
}) => {
  const { data, showStartFrame, setShowStartFrame } =
    useModuleData(fetchFunction);

  const handleStart = () => {
    if (data) {
      setShowStartFrame(false);
    }
  };

  const contentComponent = showStartFrame ? (
    <StartFrame text={data ? startFrameText : noDataText} />
  ) : (
    <ContentComponent data={data} />
  );
  return <CategoryFrame content={contentComponent} callback={handleStart} />;
};

export default ModuleComponent;
