import React, { useState } from "react";

const AppContainer = (props) => {
  /**
   * Set the expanded state for the current app
   * the container takes up most of the screen.
   * The app are given a props 'expanded' to format
   * their view depending on the 'expanded' state
   */
  const actionExpand = () => {
    setExpanded(!expanded);
  };

  /**
   * Keep the 'expanded' state in a Hook
   */
  const [expanded, setExpanded] = useState(false);

  /**
   * Assign the classes defining the app container
   * depending on the custom app classes, width,
   * height and 'expanded' state
   */
  let classes = "app ";
  classes += [...props.classes];
  classes += ` app-width-${props.width}`;
  classes += ` app-height-${props.height}`;
  classes += expanded ? " app-expanded" : "";

  return (
    <div className={classes} onClick={expanded ? undefined : actionExpand}>
      {expanded ? <div className="app-close" onClick={actionExpand}></div> : ""}
      <div className="app-container">
        {React.cloneElement(props.content, { expanded: expanded })}
      </div>
    </div>
  );
};

export default AppContainer;
