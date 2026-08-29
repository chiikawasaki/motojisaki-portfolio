import AboutArea from "./about-area/AboutArea";
import Header from "./component/Header";
import SlideListArea from "./first-view/SlideListArea";
import SkillsArea from "./skills-area/SkillsArea";
import WorksAreaPage from "./works-area/WorksAreaPage";

export default function Home() {
  return (
    <div>
      <Header />
      <SlideListArea />
      <WorksAreaPage />
      <AboutArea />
      <SkillsArea />
      <footer
        className="mt-15 flex h-16 w-full items-center justify-center px-4 text-center text-xs text-gray-700"
        style={{ backgroundColor: "#FBCFE8" }}
      >
        <p>
          イラスト素材:{" "}
          <a
            href="https://aomaterial.com/tos/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            AOmaterial
          </a>
        </p>
      </footer>
    </div>
  );
}
