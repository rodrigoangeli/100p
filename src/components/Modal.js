import Dialog from "@mui/material/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModalState, selectModalOptions } from "store/modal";

function Modal(props) {
  const dispatch = useDispatch();
  const state = useSelector(selectModalState);
  const options = useSelector(selectModalOptions);

  return (
    <Dialog
      open={state}
      onClose={(ev) => dispatch(closeModal())}
      aria-labelledby="fuse-dialog-title"
      classes={{
        paper: "rounded-8",
      }}
      fullWidth={true}
      maxWidth={"sm"}
      {...options}
    />
  );
}

export default Modal;
