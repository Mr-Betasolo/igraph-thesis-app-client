import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const ConfirmCard = ({ confirmAlert, setConfirmAlert }) => {
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setConfirmAlert(false);
  };

  return (
    <Snackbar
      open={confirmAlert.isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="success" variant="filled">
        {confirmAlert.message}
      </Alert>
    </Snackbar>
  );
};

export default ConfirmCard;
