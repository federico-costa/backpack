import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M10.517 1.517a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 15a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm11.457 5.526a1.62 1.62 0 0 1-2.221 0l-2.61-2.612c-.15-.15.242-.782.874-1.414.63-.632 1.265-1.024 1.414-.874l2.612 2.61a1.62 1.62 0 0 1-.069 2.29z" /></svg>);