import ImageSection from "./components/ImageSection";
import ContactSection from "./components/section/ContactSection";
import HeaderSection from "./components/section/HeaderSection";
import IntroduceSection from "./components/section/IntroduceSection";
import ProjectSection from "./components/section/ProjectSection";
import SkillSection from "./components/section/SkillSection";

function App() {
  return (
    <div id="wrapper" className="App">
      <section className="intro">
        <HeaderSection />
        <ImageSection />
      </section>
      <section id="first">
        <IntroduceSection />
      </section>
      <section>
        <SkillSection />
      </section>
      <section>
        <ProjectSection />
      </section>
      <section>
        <ContactSection />
      </section>
      <div className="copyright">
        Copyright &copy; 2023. Seonmin All rights reserved.
      </div>
    </div>
  );
}

export default App;
