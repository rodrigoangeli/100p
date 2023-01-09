import React, { useState, useEffect, useRef, useReducer } from "react";
import {
  defaultChild,
  initialChildElements,
  options,
  optionsInitialState,
  childOptions,
} from "./configs/configs";
import {
  BoxCard,
  Chip,
  ValuesField,
  Value,
  AllElements,
  Element,
  Button,
  Icon,
} from "./styles/styles";
import Animated from "src/layout/animated";
import clsx from "clsx";
import { TextField, FilledInput, Box } from "@mui/material";
import styled from "styled-components/macro";
import { ShowCode } from "./components/ShowCode";

const FlexBoxGenerator = (props) => {
  const [config, setConfig] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    optionsInitialState
  );
  const [childs, setChilds] = useState(
    Array.from({ length: 3 }, () => ({ width: "70px", height: "70px" }))
  );
  const [activeChild, setActiveChild] = useState(null);

  const handleChildConfig = (field, value) => {
    let items = [...childs];
    items[activeChild][field] = value;
    setChilds(items);
  };

  const handleNewChild = () => {
    if (childs.length < 20) {
      setChilds([...childs, { width: "70px", height: "70px" }]);
    }
  };

  const handleRemoveChild = () => {
    if (childs.length > 1) {
      var newChilds = [...childs];
      newChilds.pop();
      setChilds(newChilds);
    }
  };

  return (
    <Animated>
      <div className="container px-8 mx-auto flex flex-grow flex-col">
        <Box className=" mb-2 flex items-center justify-between">
          <Box className="flex">
            <Button disabled={childs.length === 1} onClick={handleRemoveChild}>
              <Icon className="w-4 ">heroicons-outline:minus</Icon>
            </Button>
            <Button
              disabled={childs.length === 20}
              className="ml-1"
              onClick={handleNewChild}
            >
              <Icon className="w-4 ">heroicons-outline:plus</Icon>
            </Button>
            <Button
              className={clsx({ active: activeChild === null }, "ml-4 element")}
              onClick={() => setActiveChild(null)}
            >
              Container
            </Button>
            {childs.map((e, index) => (
              <Button
                key={`selectors_${index}`}
                className={clsx(
                  { active: activeChild === index },
                  "ml-1 element"
                )}
                onClick={() => setActiveChild(index)}
              >
                {index + 1}
              </Button>
            ))}
          </Box>
          <ShowCode container={config} childs={childs} />
        </Box>
        <div className="flex flex-grow ">
          <BoxCard className="w-2/6 flex content-start flex-wrap">
            {activeChild === null
              ? Object.keys(options).map((property, i) => (
                  <div key={property} className="mb-3 w-full">
                    <Chip>{property}</Chip>
                    <ValuesField>
                      {options[property].map((value, index) => (
                        <Value
                          key={`${property}_${value}`}
                          className={clsx({
                            active: config[property] === value,
                          })}
                          onClick={() => setConfig({ [property]: value })}
                        >
                          {value}
                        </Value>
                      ))}
                    </ValuesField>
                  </div>
                ))
              : Object.keys(childOptions).map((property, i) => (
                  <div
                    key={property}
                    className={`mb-3 px-1 ${
                      childOptions[property] ? "" : "basis-2/4"
                    }`}
                  >
                    <Chip>{property}</Chip>
                    <ValuesField>
                      {childOptions[property] ? (
                        childOptions[property].map((value, index) => (
                          <Value
                            key={`${property}_${value}`}
                            className={clsx({
                              active: childs[activeChild][property] === value,
                            })}
                            onClick={() => handleChildConfig(property, value)}
                          >
                            {value}
                          </Value>
                        ))
                      ) : (
                        <FilledInput
                          inputProps={{
                            "aria-label": property,
                          }}
                          hiddenLabel
                          size="small"
                          sx={{
                            "& > input": {
                              paddingTop: "4px",
                              paddingBottom: "4px",
                            },
                          }}
                          onChange={(event) =>
                            handleChildConfig(property, event.target.value)
                          }
                          value={childs[activeChild][property] || ""}
                        />
                      )}
                    </ValuesField>
                  </div>
                ))}
          </BoxCard>
          <div className="ml-4 w-4/6">
            <BoxCard className="h-full">
              <AllElements
                className={clsx({ active: activeChild === null })}
                onClick={(e) =>
                  e.target.nodeName === "MAIN"
                    ? setActiveChild(null)
                    : undefined
                }
                config={config}
              >
                {childs.map((e, index) => (
                  <Element
                    className={clsx({ active: activeChild === index })}
                    onClick={() => setActiveChild(index)}
                    css={childs[index]}
                    key={index}
                  >
                    <span>{index + 1}</span>
                  </Element>
                ))}
              </AllElements>
            </BoxCard>
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default FlexBoxGenerator;
