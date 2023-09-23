import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material//DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import './ProjectDialog.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectDialog(props) {
  const { onClose, title, text, open } = props;

  const handleClose = () => {
    onClose(title);
  };

  return (
    <Dialog className="dialog" onClose={handleClose} open={open} TransitionComponent={Transition}>
      <DialogTitle className="header">{title}</DialogTitle>
      <DialogContent className="content">
        <DialogContentText className="text">
          <br />
          {text}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
