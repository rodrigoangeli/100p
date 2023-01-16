import React, { useState, useEffect, useRef, useContext } from "react";
import Animated from "src/layout/animated";
import { Box } from "@mui/material";
import { BoxCard } from "./styles/styles";
import Loader1 from "./components/Loader1";
import Loader2 from "./components/Loader2";
import Loader3 from "./components/Loader3";

const CssLoaders = (props) => {
  return (
    <Animated>
      <Box className="grid grid-cols-3 gap-12">
        <BoxCard>
          <Loader1 size={70} time={1500} />
        </BoxCard>
        <BoxCard>
          <Loader2 size={70} time={1500} />
        </BoxCard>
        <BoxCard>
          <Loader3 size={70} time={1500} />
        </BoxCard>
      </Box>
    </Animated>
  );
};
export default CssLoaders;
