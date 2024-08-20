import styles from "./MeStyles.module.css";
import me_img from "../../assets/me_img.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/raghavResume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Me() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const gitHubIcon = theme === "light" ? githubLight : githubDark;
  const linkedInIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="me" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.me}
          src={me_img}
          alt="Profile Picture of Raghav Pareek"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Raghav Pareek</h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://x.com/iraghavpareek" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/iraghavpareek" target="_blank">
            <img src={gitHubIcon} alt="Git Hub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/iraghavpareek/" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          📱 Mobile App Developer & Front-end Developer Passionate About
          Crafting Highly Intuitive User Experiences ✨
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Me;
