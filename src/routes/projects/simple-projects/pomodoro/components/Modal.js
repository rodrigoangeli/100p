import React from "react";
import { closeModal } from "store/modal";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useDispatch } from "react-redux";

const Modal = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The timer is still running, if you switch the same will reset.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeModal())} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            dispatch(closeModal());
            props.handleReset(props.value);
          }}
          variant="contained"
          color="primary"
          autoFocus
        >
          Switch
        </Button>
      </DialogActions>
    </React.Fragment>
  );
};

export default Modal;
