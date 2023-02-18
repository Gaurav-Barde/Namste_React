import { useState } from "react";

const Instamart = () => {
  // const [sectionConfig, setSectionConfig] = useState({
  //   showAbout: false,
  //   showTeam: false,
  //   showContact: false,
  // });

  const [isVisible, setIsVisible] = useState("showAbout");

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Instamart</h1>
      <Section
        id="showAbout"
        isVisible={isVisible === "showAbout"}
        setIsVisible={(section) => setIsVisible(section)}
        title="About Instamart"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
      />
      <Section
        id="showTeam"
        isVisible={isVisible === "showTeam"}
        setIsVisible={(section) => setIsVisible(section)}
        title="Team Instamart"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
      />
      <Section
        id="showContact"
        isVisible={isVisible === "showContact"}
        setIsVisible={(section) => setIsVisible(section)}
        title="Contact Instamart"
        description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
      />
    </div>
  );
};

const Section = ({ title, description, isVisible, setIsVisible, id }) => {
  console.log(isVisible);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="text-lg font-semibold my-4">{title}</h3>
      <button
        onClick={() => (!isVisible ? setIsVisible(id) : setIsVisible(""))}
        className="transition-all duration-350 btn"
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p className="transition-all">{description}</p>}
    </div>
  );
};

export default Instamart;
