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
        className="footer sm:footer-horizontal footer-center text-base-content p-4 mt-15"
        style={{ backgroundColor: "#FBCFE8" }}
      >
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}
