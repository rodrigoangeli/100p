import React from "react";
import { NavLink, Link } from "react-router-dom";
import statusInfo from "configs/status";
import { Hidden } from "@mui/material";
import styled from "styled-components";
import SvgIcon from "components/SvgIcon";

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

const Header = ({ state, location }) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4 p-4">
      <div className="flex items-center">
        <NavLink
          onClick={(event) =>
            !state.prev ? event.preventDefault() : undefined
          }
          state={{ previousPath: location.pathname }}
          to={state.prev}
        >
          <Button disabled={!state.prev}>
            <Icon className="w-4 ">heroicons-outline:chevron-left</Icon>
          </Button>
        </NavLink>
        <Button>
          <NavLink state={{ previousPath: location.pathname }} to={"/"}>
            list
          </NavLink>
        </Button>
        <NavLink
          state={{ previousPath: location.pathname }}
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
            <Icon className="w-4 ">heroicons-outline:code-bracket</Icon>
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
  );
};

export default Header;
