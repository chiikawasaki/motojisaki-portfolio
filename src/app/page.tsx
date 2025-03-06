import Header from "./component/Header";
import TitleFont from "./component/TitleFont";
import SlideListArea from "./first-view/SlideListArea";
import WorksAreaPage from "./works-area/WorksAreaPage";

export default function Home() {
  return (
    <div>
      <Header />
      <SlideListArea />
      <WorksAreaPage />
      <TitleFont title="About" />
      <TitleFont title="Skills" />
    </div>
  );
}
