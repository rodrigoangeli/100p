import React from "react";
import styled from "styled-components";
import { projects } from "../configs/navigation";
import SvgIcon from "../components/SvgIcon";
import { NavLink } from "react-router-dom";
import statusInfo from "../configs/status";

const Card = styled(NavLink)(({ theme }) => ({
  backgroundColor: "#262a34",
  borderRadius: theme.border.radius,
}));

const IconBorder = styled("div")(({ theme }) => ({
  backgroundColor: "#31353e",
}));

const IconWrapper = styled("div")(({ theme, status }) => ({
  backgroundColor: theme.status.background[status],
}));

const Icon = styled(SvgIcon)(({ theme, status }) => ({
  color: theme.status.color[status],
}));

const Title = styled("h3")(({ theme, status }) => ({
  color: theme.status.color[status],
}));

const Home = (props) => {
  return (
    <div className="container mx-auto">
      {projects.map(({ children }) =>
        children.map((category) => (
          <React.Fragment key={category.path}>
            <p className="mb-2">{category.category}</p>
            <div className="grid sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {category.children.map(({ path, title, status }) => (
                <Card
                  to={status !== "tbd" && `${category.path}/${path}`}
                  key={path}
                  className="flex items-center p-4 font-semibold"
                >
                  <IconBorder className="rounded-full w-8 h-8 mr-2.5 flex flex-wrap justify-center items-center">
                    <IconWrapper
                      status={status}
                      className="flex flex-wrap justify-center items-center rounded-full"
                    >
                      <Icon status={status} className="w-5 align-middle p-0.5">
                        {statusInfo[status].icon}
                      </Icon>
                    </IconWrapper>
                  </IconBorder>
                  <div>
                    <Title status={status}>{title}</Title>
                    <p className="text-sm font-normal ">
                      {statusInfo[status].label}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Home;
