import React, { useState } from "react";
import ProjectDialog from "../ProjectsDialog/ProjectsDialog";
import './ProjectTile.scss';

const ProjectTile = (props) => {
  const [open, setOpen] = useState(false);
  const { title, description, img } = props;

  const handleClickOpen = () => {
    if (description) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div key={title}>
      <div className="item" onClick={handleClickOpen}>
        <img src={require("./assets/" + img)} alt="no"></img>
        <h3>{title}</h3>
      </div>

      <ProjectDialog
        title={title}
        text={description}
        open={open}
        onClose={() => handleClose()}
      />
    </div>
  );
};

export default ProjectTile;
