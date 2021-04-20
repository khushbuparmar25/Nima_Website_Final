// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
import image from "../Images/Rectangle 634.png";
import "./Modalclass.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    // width: 1000,
    // backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  closeButton: {
    position: "absolute",
    // left: theme.spacing(2),
    // top: theme.spacing(1),
    //  color: theme.palette.black[500],
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="mod">
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <br />
        <br />
        <div id="simple-modal-description">
          <div className="doctor_names">
            <b>Doctor Name :</b> Dr. Srushti Raybhoje, Dr. Aashish Prasad, Dr.
            Swapnil Katare
          </div>
          <br />
          <div className="mob">
            <b>Mob No :</b> 9089768543, 908789654
          </div>
          <div className="location">Haryana / Yamunanagar / Jagadhari</div>
          <br />
          <div className="horizontal">
            <img src={image} className="slide"></img>
            <img src={image} className="slide"></img>
          </div>
          {/* //       <link href="#" className="related">Related images</link> */}

          <a className="link" href="#">
            {" "}
            Related Images{" "}
          </a>
          <br />
          <br />
          <div className="detail">Details</div>
          <br />
          <div className="designation">
            Dr. Srushti Raybhoge : President of Nima Jagadhari workshop,
            Yamunanagar.
          </div>
          <br />
          <div className="otherdetails">
            Risus non nisl ornare arcu et nibh gravida mattis arcu.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <a className="read" onClick={handleOpen}>
        Read More
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
