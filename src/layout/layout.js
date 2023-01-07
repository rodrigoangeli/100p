import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { projects } from "configs/navigation";
import styled from "styled-components";
import Menu from "./menu";
import Header from "./header";

const Background = styled("div")(({ theme, img, posW, posH, noHeader }) => ({
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${img})`,
  position: "fixed",
  top: 0,
  zIndex: "-1",
  transition: "background-position 1s ease-in-out,opacity 550ms ease",
  backgroundPosition: `${posW}% ${posH}%`,
  opacity: noHeader ? 0 : 1,
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
      posW: location.state?.previousPath ? Math.floor(Math.random() * 100) : 0,
      posH: location.state?.previousPath ? Math.floor(Math.random() * 100) : 0,
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
      {!props.noHeader && <Header location={location} state={state} />}
      <Outlet />
      <Background
        posW={pos.posW}
        posH={pos.posH}
        noHeader={props.noHeader}
        img={`${process.env.PUBLIC_URL}/images/bg.jpg`}
      />
    </>
  );
};

export default Layout;
