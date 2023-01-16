import styled from "styled-components";

export const BoxCard = styled("div")(({ theme }) => ({
  background: theme.palette.background.light,
  boxShadow: theme.shadow.main,
  padding: 15,
  borderRadius: theme.border.radius,
}));

const axis = (x, y) =>
  `translateX(${x}px) translateY(${y}px) translateZ(0) scale(1, 1)`;

export const Loader1Wrapper = styled("div")(({ theme, size, time }) => {
  const ballSize = parseInt((size * 20) / 100);
  return {
    height: size,
    width: size,
    position: "relative",
    transformOrigin: "center",
    animation: `spin`,
    animationDuration: `${time}ms`,
    animationIterationCount: "infinite",

    "& > span": {
      backgroundColor: theme.palette.common.white,
      width: ballSize,
      height: ballSize,
      borderRadius: "50%",
      display: "block",
      position: "absolute",
      "backface-visibility": "hidden",
      filter: "blur(0)",
      animationDuration: `${time}ms`,
      animationIterationCount: "infinite",

      "&:nth-child(1)": {
        animationName: "span1",
        transform: axis(0, 0),
      },
      "&:nth-child(2)": {
        transform: axis(size - ballSize, 0),
        animationName: "span2",
      },
      "&:nth-child(3)": {
        transform: axis(size - ballSize, size - ballSize),
        animationName: "span3",
      },
      "&:nth-child(4)": {
        transform: axis(0, size - ballSize),
        animationName: "span4",
      },
    },

    "@keyframes spin": {
      "15%,25%": {
        transform: "rotate(10deg)",
      },
      "25%,70%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(180deg)",
      },
    },

    "@keyframes span1": {
      "0%": {
        transform: axis(0, 0),
      },
      "30%,70%": {
        transform: axis(size / 2 - ballSize / 2, size / 2 - ballSize / 2),
      },
      "70%,100%": {
        transform: axis(size - ballSize, size - ballSize),
      },
    },
    "@keyframes span2": {
      "0%": {
        transform: axis(size - ballSize, 0),
      },
      "30%,70%": {
        transform: axis(size / 2 - ballSize / 2, size / 2 - ballSize / 2),
      },
      "70%,100%": {
        transform: axis(0, size - ballSize),
      },
    },
    "@keyframes span3": {
      "0%": {
        transform: axis(size - ballSize, size - ballSize),
      },
      "30%,70%": {
        transform: axis(size / 2 - ballSize / 2, size / 2 - ballSize / 2),
      },
      "70%,100%": {
        transform: axis(0, 0),
      },
    },
    "@keyframes span4": {
      "0%": {
        transform: axis(0, size - ballSize),
      },
      "30%,70%": {
        transform: axis(size / 2 - ballSize / 2, size / 2 - ballSize / 2),
      },
      "70%,100%": {
        transform: axis(size - ballSize, 0),
      },
    },
  };
});

export const Loader2Wrapper = styled("div")(({ theme, size, time }) => {
  const ballSize = parseInt((size * 15) / 100);
  return {
    height: size,
    width: size,
    position: "relative",
    transformOrigin: "center",

    "& > span": {
      backgroundColor: theme.palette.common.white,
      width: ballSize,
      height: ballSize,
      borderRadius: "50px",
      display: "block",
      position: "absolute",
      bottom: 0,
      animation: `grow ${time}ms infinite ease-in-out`,

      "&:nth-child(1)": {
        left: 0,
      },
      "&:nth-child(2)": {
        left: (size - ballSize) / 3,
        animationDelay: "100ms",
      },
      "&:nth-child(3)": {
        left: ((size - ballSize) / 3) * 2,
        animationDelay: "200ms",
      },
      "&:nth-child(4)": {
        left: ((size - ballSize) / 3) * 3,
        animationDelay: "300ms",
      },
    },

    "@keyframes grow": {
      "0%": {
        height: ballSize,
      },
      "25%": {
        height: ballSize * 3.5,
      },
      "50%": {
        transform: `translateY(-${size - ballSize}px)`,
        height: ballSize,
      },
      "75%": {
        height: ballSize * 3.5,
      },
      "100%": {
        height: ballSize,
      },
    },
  };
});

export const Loader3Wrapper = styled("div")(({ theme, size, time }) => {
  const ballSize = parseInt((size * 15) / 100);
  return {
    height: size,
    width: size,
    position: "relative",
    transformOrigin: "center",

    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: "50%",
      height: ballSize,
      transform: "translateY(50%) translateX(0) scale(1)",
      borderRadius: "50px",
      width: ballSize,
      backgroundColor: theme.palette.common.white,
      display: "block",
      animation: `pass ${time}ms infinite ease-in-out forwards`,
    },

    "& > span": {
      backgroundColor: theme.palette.common.white,
      width: ballSize,
      height: ballSize,
      borderRadius: "50px",
      display: "block",
      position: "absolute",
      bottom: "50%",
      transform: "translateY(50%)",

      "&:nth-child(1)": {
        left: 0,
      },
      "&:nth-child(2)": {
        left: (size - ballSize) / 3,
      },
      "&:nth-child(3)": {
        left: ((size - ballSize) / 3) * 2,
      },
      "&:nth-child(4)": {
        left: ((size - ballSize) / 3) * 3,
      },
    },

    "@keyframes pass": {
      "0%": {
        width: ballSize,
        transform: "translateY(50%) translateX(0) scale(1)",
      },
      "10%": {
        transform: "translateY(50%) translateX(0) scale(1.6)",
      },
      "20%": {
        width: ballSize + 5,
      },
      "45%": {
        width: ballSize,
      },
      "60%": {
        width: ballSize + 5,
      },
      "90%": {
        transform: `translateY(50%) translateX(${
          size - ballSize
        }px) scale(1.6)`,
      },
      "100%": {
        transform: `translateY(50%) translateX(${size - ballSize}px) scale(1)`,
      },
    },
  };
});
