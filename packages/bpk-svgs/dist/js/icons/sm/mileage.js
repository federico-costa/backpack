import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><g fillRule="evenodd"><path d="M10.5 3A1.5 1.5 0 0 1 12 1.5a10.493 10.493 0 1 1-9.547 6.124 1.5 1.5 0 1 1 2.742 1.218l-.016.034A7.5 7.5 0 1 0 12 4.5 1.5 1.5 0 0 1 10.501 3z" /><path d="M6.728 3.214a1.5 1.5 0 0 1 2.058.514l4.5 7.5a1.5 1.5 0 1 1-2.557 1.57l-.015-.026-4.5-7.5a1.5 1.5 0 0 1 .514-2.058z" /></g></svg>);