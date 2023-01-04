import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { projects } from "../configs/navigation";
import styled from "styled-components";
import SvgIcon from "../components/SvgIcon";
import statusInfo from "../configs/status";
import { Hidden } from "@mui/material";
import Menu from "./menu";

const Button = styled("button")(({ theme }) => ({
  border: `1px solid ${theme.palette.border.main}`,
  borderRadius: theme.border.radius,
  height: 32,
  padding: "0 8px",
  color: theme.palette.common.white,
  fontSize: 14,
  fontWeight: 600,
  textTransform: "uppercase",
  transition: "opacity 250ms ease",

  "&:nth-child(2)": {
    margin: "0 5px",
  },
  "&:disabled": {
    opacity: 0.4,
    a: {
      cursor: "default",
    },
  },
  "a, span": {
    display: "flex",
    alignItems: "center",
    "& > div": {
      paddingLeft: 8,
    },
  },
}));

const Icon = styled(SvgIcon)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const Status = styled("div")(({ theme, status }) => ({
  color: theme.status.background[status],
  fontSize: 11,
  textTransform: "uppercase",
}));

const Title = styled("div")(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 20,
}));

const Background = styled("div")(({ theme, img, posW, posH }) => ({
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${img})`,
  position: "fixed",
  top: 0,
  zIndex: "-1",
  transition: "background-position 1s ease-in-out",
  backgroundPosition: `${posW}% ${posH}%`,
}));

const Layout = (props) => {
  const location = useLocation();
  const [pos, setPos] = useState({ posW: 0, posH: 0 });
  const [state, setState] = useState({
    prev: null,
    current: {
      title: null,
      status: null,
    },
    next: null,
  });
  const paths = projects[0].children
    .map((e) =>
      e.children
        .filter(({ status }) => status === "done" || status === "progress")
        .map((v) => ({
          path: `${e.path}/${v.path}`,
          title: v.title,
          status: v.status,
        }))
    )
    .flat();

  useEffect(() => {
    setPos({
      posW: Math.floor(Math.random() * 100),
      posH: Math.floor(Math.random() * 100),
    });
    if (!props.noHeader) {
      let currentValue = paths.findIndex((e) =>
        location.pathname.includes(e.path)
      );
      setState({
        prev: paths[currentValue - 1]?.path || null,
        current: {
          title: paths[currentValue].title,
          path: paths[currentValue].path,
          status: paths[currentValue].status,
        },
        next: paths[currentValue + 1]?.path || null,
      });
    }
  }, [location]);

  return (
    <>
      <Menu />
      {!props.noHeader && (
        <>
          <div className="grid grid-cols-4 items-center gap-4 p-4">
            <div className="flex items-center">
              <NavLink
                onClick={(event) =>
                  !state.prev ? event.preventDefault() : undefined
                }
                to={state.prev}
              >
                <Button disabled={!state.prev}>
                  <Icon className="w-4 ">heroicons-outline:chevron-left</Icon>
                </Button>
              </NavLink>
              <Button>
                <NavLink to={"/"}>list</NavLink>
              </Button>
              <NavLink
                onClick={(event) =>
                  !state.next ? event.preventDefault() : undefined
                }
                to={state.next}
              >
                <Button disabled={!state.next}>
                  <Icon className="w-4 ">heroicons-outline:chevron-right</Icon>
                </Button>
              </NavLink>
            </div>
            <div className="col-span-2 text-center leading-5">
              <Status status={state.current.status}>
                Project {statusInfo[state.current.status]?.label}
              </Status>
              <Title>{state.current.title}</Title>
            </div>
            <div className="flex items-center justify-end">
              <Button>
                <a
                  href={`https://github.com/rodrigoangeli/100p/tree/main/src/routes/projects/${state.current.path}`}
                  target="_blank"
                >
                  <Icon className="w-4 ">heroicons-outline:code</Icon>
                  <Hidden smDown>
                    <div>Repo</div>
                  </Hidden>
                </a>
              </Button>
              <Button>
                <span>
                  <Icon className="w-4">heroicons-outline:share</Icon>
                  <Hidden smDown>
                    <div>Share</div>
                  </Hidden>
                </span>
              </Button>
            </div>
          </div>
        </>
      )}
      <Outlet />
      <Background
        posW={pos.posW}
        posH={pos.posH}
        img={`${process.env.PUBLIC_URL}/images/bg.jpg`}
      />
    </>
  );
};

export default Layout;
