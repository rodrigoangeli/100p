import React, { useState, useEffect, useRef, useReducer } from "react";
import { options, optionsInitialState } from "./configs/configs";
import {
  BoxCard,
  Chip,
  ValuesField,
  Value,
  AllElements,
  Element,
  Button,
  Icon,
  OptionTextField,
} from "./styles/styles";
import Animated from "src/layout/animated";
import clsx from "clsx";
import { Box } from "@mui/material";
import styled from "styled-components/macro";
import { ShowCode } from "./components/ShowCode";
import FieldsWrapper from "./components/FieldsWrapper";
import FieldInput from "./components/FieldInput";
import { compileState } from "./functions/handleCompile";

const CssGridGenerator = (props) => {
  const [config, setConfig] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    optionsInitialState
  );
  const [finalState, setFinalState] = useState({});
  const [childs, setChilds] = useState(Array.from({ length: 3 }, () => ({})));

  useEffect(() => {
    setFinalState(compileState(config));
  }, [config]);

  const handleNewChild = () => {
    if (childs.length < 20) {
      setChilds([...childs, {}]);
    }
  };

  const handleRemoveChild = () => {
    if (childs.length > 1) {
      var newChilds = [...childs];
      newChilds.pop();
      setChilds(newChilds);
    }
  };

  const handleNewValue = (property) => {
    if (config[property].length < 20) {
      setConfig({
        [property]: [...config[property], { value: 1, type: "fr" }],
      });
    }
  };

  const handleRemoveValue = (property, index) => {
    var newValues = [...config[property]];
    newValues.splice(index, 1);
    setConfig({
      [property]: newValues,
    });
  };

  const handleUpdateValue = (value, property, type, index) => {
    if (type === "array") {
      var newValues = [...config[property]];
      newValues[index] = value;
      setConfig({
        [property]: newValues,
      });
    } else {
      setConfig({
        [property]: value,
      });
    }
  };

  return (
    <Animated>
      <div className="container px-8 mx-auto flex flex-grow flex-col">
        <Box className=" w-4/6 ml-auto mb-2 flex items-center justify-between">
          <Box className="flex">
            <Button
              type="minus"
              disabled={childs.length === 1}
              onClick={handleRemoveChild}
            >
              <Icon className="w-4 ">heroicons-outline:minus</Icon>
            </Button>
            <Button
              type="plus"
              disabled={childs.length === 20}
              className="ml-1"
              onClick={handleNewChild}
            >
              <Icon className="w-4 ">heroicons-outline:plus</Icon>
            </Button>
          </Box>
          <ShowCode container={finalState} />
        </Box>
        <div className="flex flex-grow ">
          <BoxCard className="w-2/6 -mx-1 flex content-start  flex-wrap">
            {Object.keys(options).map((property, i) => (
              <div
                key={property}
                className={`mb-3 px-1 ${
                  options[property].type === "object" || !options[property].type
                    ? "w-3/6"
                    : "w-full"
                }`}
              >
                <Chip>{property}</Chip>
                <FieldsWrapper
                  config={config[property]}
                  options={options[property]}
                  property={property}
                  addOne={(el) => handleNewValue(el)}
                  removeOne={(el, index) => handleRemoveValue(el, index)}
                  updateConfig={(el, index) =>
                    handleUpdateValue(
                      el,
                      property,
                      options[property].type,
                      index
                    )
                  }
                >
                  <FieldInput />
                </FieldsWrapper>
              </div>
            ))}
          </BoxCard>
          <div className="ml-4 w-4/6">
            <BoxCard className="h-full">
              <AllElements config={finalState}>
                {childs.map((e, index) => (
                  <Element key={`child_el_${index}`}>
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

export default CssGridGenerator;
