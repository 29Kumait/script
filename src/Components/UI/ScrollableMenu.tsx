import React from "react";
import * as stylex from "@stylexjs/stylex";

interface ScrollableMenuProps {
  items?: string[];
}

const ScrollableMenu: React.FC<ScrollableMenuProps> = ({ items }) => {
  return (
    <div {...stylex.props(styleMenu.scrollableMenuContainer)}>
      {items &&
        items.map((item, index) => (
          <div key={index} {...stylex.props(styleMenu.menuItem)}>
            {item}
          </div>
        ))}
    </div>
  );
};

const styleMenu = stylex.create({
  scrollableMenuContainer: {
    display: "flex",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
  },
  menuItem: {
    flex: "none",
    marginRight: "16px",
  },
});

export default ScrollableMenu;
