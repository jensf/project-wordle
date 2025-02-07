import React from "react";

function Banner({ status, children }) {
  return <div class={`${status} banner`}>{children}</div>;
}

export default Banner;
