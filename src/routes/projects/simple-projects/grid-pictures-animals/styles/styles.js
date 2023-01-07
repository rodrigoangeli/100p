import styled from "styled-components";

const blurry_query_string = "&fit=crop&w=100&q=10&fm=jpg";

export const Grid = styled("div")(({ theme, columns }) => ({
  minWidth: 0,
}));

export const ImageWrapper = styled("div")(
  ({ theme, color, col, url, height, width }) => ({
    backgroundColor: color,
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(" + url + blurry_query_string + ")",
    height: `${Math.floor((col * height) / width)}px`,
    gridRowEnd: `span ${Math.ceil(((col * height) / width + 10) / 15)}`,

    "& > span": {
      position: "absolute",
      bottom: "5px",
      left: 0,
      color: "white",
      backgroundColor: "rgba(0,0,0,.55)",
      fontSize: "13px",
      opacity: 0,
      textAlign: "center",
      width: "100%",
      transition: "all 350ms",
    },
    "&:hover": {
      "& > span": {
        opacity: 1,
      },
    },
  })
);
