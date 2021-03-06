import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M3 2.676a.847.847 0 0 1 .43-.802A4.348 4.348 0 0 1 5.25 1.5a4.216 4.216 0 0 1 1.794.373.885.885 0 0 1 .456.827v3.017C7.5 6.9 6.375 7.5 5.25 7.5S3 6.9 3 5.717zM6.922 22.5a2.274 2.274 0 0 0 1.928-2.143l.713-5.94a1.064 1.064 0 0 1 .853-.962l11.227-2.148a1.066 1.066 0 0 0 .857-1.053v-.183A1.06 1.06 0 0 0 21.451 9H5.7a13.032 13.032 0 0 0-3.625.59.911.911 0 0 0-.575.887v9.88A2.281 2.281 0 0 0 3.6 22.5zM20.968 6.392a.857.857 0 0 1-.78 1.108h-7.375a.857.857 0 0 1-.781-1.108 4.639 4.639 0 0 1 8.936 0z" /></svg>);