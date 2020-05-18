import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./JobCardMenu.css";

const ITEM_HEIGHT = 48;

interface IJobCardMenuProps {
  id: string;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
}

const JobCardMenu = (props: IJobCardMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEdit = () => {
    props.handleEdit(props.id)
    handleClose();
  }
  const handleDelete = () => {
    props.handleDelete(props.id)
    handleClose();
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem selected={false} onClick={handleEdit}>
          Edit
        </MenuItem>
        <MenuItem selected={false} onClick={handleDelete}>
          <div className="jobcard-delete-menuitem"> Delete </div>
        </MenuItem>
      </Menu>
    </div>
  );
}


export default JobCardMenu;