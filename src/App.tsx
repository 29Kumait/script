import React from "react";
import * as stylex from "@stylexjs/stylex";
import mainLogo from "./assets/main.svg";
import branch from "./assets/branch.svg";
import type { StyleXStyles } from "@stylexjs/stylex";
import Page from "./Pages/Page.tsx";

type Props = {
  style?: StyleXStyles;
};

const App: React.FC = ({ style }: Props) => {
  return (
    <>
      <div>
        <Page />
        <img
          src={branch}
          className="logo"
          {...stylex.props(styles.logo)}
          alt=" logo"
        />

        <a
          href="https://www.typescriptlang.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={mainLogo}
            className="logo"
            {...stylex.props(styles.logo, styles.animation, style)}
            alt=" logo"
          />
        </a>
      </div>
      <h1> ⓣ🅈ⓟⒺ </h1>
      <div className="card">
        <button onClick={() => () => +1}>my</button>
      </div>
    </>
  );
};

const logoSpin = stylex.keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});
const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const styles = stylex.create({
  logo: {
    height: "6em",
    padding: "1.5em",
    willChange: "filter",
    transition: "filter 29ms",
    // eslint-disable-next-line @stylexjs/valid-styles
    ":hover": {
      filter: "drop-shadow(0 0 2em #61dafbaa)",
    },
  },

  animation: {
    animationName: `${logoSpin}, ${fadeIn}`,
    animationDuration: "20s, 29s",
    animationIterationCount: "infinite, infinite",
    animationTimingFunction: "linear, ease-out",
  },
});

export default App;
