import React from "react";

const Title = props =>
  <h1 {...props} style={{ float: "left" }} className="page-header">
    {props.children}
  </h1>;

export default Title;
