import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M11 2a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0zm7 10a6 6 0 1 1-6-6 6 6 0 0 1 6 6zm-6 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1zM2 13a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm18-1a1 1 0 0 0 1 1h1a1 1 0 0 0 0-2h-1a1 1 0 0 0-1 1zM4.222 19.778a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0zM17.657 4.929a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0-1.414-1.414zm.707 14.849l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1-1.414 1.414zM6.343 6.343a1 1 0 0 0 0-1.414l-.707-.707a1 1 0 0 0-1.414 1.414l.707.707a1 1 0 0 0 1.414 0z" /></svg>);