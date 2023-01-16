import React, { useRef, useEffect } from "react";
import { Button, CodeBox, Code } from "../styles/styles";
import { openModal, closeModal } from "store/modal";
import { useDispatch } from "react-redux";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import DialogButton from "@mui/material/Button";

export const ShowCode = ({ container, childs }) => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(
      openModal({
        children: (
          <React.Fragment>
            <DialogContent>
              <CodeBox>
                <Code>{`
              .grid-container${JSON.stringify(container)
                .replaceAll(",", ";")
                .replaceAll(`"`, "")}`}</Code>
              </CodeBox>
            </DialogContent>
            <DialogActions>
              <DialogButton
                onClick={() => {
                  dispatch(closeModal());
                }}
                variant="contained"
                color="primary"
                autoFocus
              >
                Close
              </DialogButton>
            </DialogActions>
          </React.Fragment>
        ),
      })
    );
  };

  return (
    <Button onClick={handleModal} className="ml-4 ">
      SHOW CODE
    </Button>
  );
};
