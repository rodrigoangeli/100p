import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "configs/navigation";
import { useLocation } from "react-router-dom";
import statusInfo from "configs/status";
import { Box, Tab, TextField, IconButton, InputAdornment } from "@mui/material";
import {
  Card,
  IconBorder,
  IconWrapper,
  Icon,
  Title,
  CategoryWrapper,
  Category,
  StyledTabs,
  StyledBox,
  CategoryLine,
  CategoryLineTop,
  CategoryLineBottom,
} from "./styles/styles";
import { container, item } from "./configs/configs";
import {
  getProjectCountByStatus,
  filterList,
} from "./functions/handleProjects";

const Home = (props) => {
  const location = useLocation();
  const [filteredData, setFilteredData] = useState([]);
  const [options, setOptions] = useState([
    {
      label: "All Projects",
      value: "all",
      count: null,
    },
    {
      label: "In Progress",
      value: "progress",
      count: null,
    },
    {
      label: "Completed",
      value: "done",
      count: null,
    },
  ]);
  const [currentTab, setCurrentTab] = useState("all");
  const [inputText, setInputText] = useState("");

  const handleChange = (event, value) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    const newArray = filterList(projects[0].children, {
      status: currentTab,
      text: inputText,
    });
    const newOptions = getProjectCountByStatus(
      options,
      projects[0].children,
      inputText
    );
    setOptions(newOptions);
    setFilteredData(newArray);
  }, [inputText, currentTab]);

  return (
    <div className="container px-8 mx-auto">
      <StyledBox>
        <StyledTabs value={currentTab} onChange={handleChange}>
          {options.map(({ label, value, count }) => (
            <Tab key={value} value={value} label={`${label}(${count})`}></Tab>
          ))}
        </StyledTabs>
        <Box
          sx={{ width: "100%", maxWidth: "400px" }}
          className="flex align-end"
        >
          <Icon className="w-5">heroicons-outline:magnifying-glass</Icon>
          <TextField
            label="Search for a project"
            variant="filled"
            onChange={(event) => setInputText(event.target.value)}
            value={inputText}
          />
        </Box>
      </StyledBox>
      {useMemo(() => {
        return (
          filteredData &&
          filteredData.length > 0 && (
            <motion.div variants={container} initial="hidden" animate="show">
              {filteredData.map(({ category, color, children, ...rest }) => (
                <React.Fragment key={rest.path}>
                  <div className="grid sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 relative">
                    <>
                      <CategoryWrapper>
                        <CategoryLineTop color={color} />
                        <CategoryLine color={color} />
                        <CategoryLineBottom color={color} />
                        <Category color={color}>{category}</Category>
                      </CategoryWrapper>
                      {children.map(({ path, title, status }) => (
                        <motion.div
                          variants={item}
                          key={`${path}_${new Date().getTime()}`}
                        >
                          <Card
                            to={status !== "tbd" && `${rest.path}/${path}`}
                            state={{ previousPath: location.pathname }}
                            className="flex items-center p-4 font-semibold"
                            status={status}
                          >
                            <IconBorder className="rounded-full w-8 h-8 mr-2.5 flex flex-wrap justify-center items-center">
                              <IconWrapper
                                status={status}
                                className="flex flex-wrap justify-center items-center rounded-full"
                              >
                                <Icon
                                  status={status}
                                  className="w-5 align-middle p-0.5"
                                >
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
                        </motion.div>
                      ))}
                    </>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          )
        );
      }, [filteredData])}
    </div>
  );
};

export default Home;
