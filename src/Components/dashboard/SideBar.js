import * as React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import FormatAlignJustifyOutlinedIcon from "@material-ui/icons/FormatAlignJustifyOutlined"
import AttachmentOutlinedIcon from "@material-ui/icons/AttachmentOutlined"
import PersonAddIcon from "@material-ui/icons/PersonAdd"
import { useStyles } from "./style"

const SideBar = ({ setOpen }) => {
  const classes = useStyles()
  return (
    <div>
      <ListItem button>
        <ListItemIcon onClick={() => setOpen(true)}>
          <PersonAddIcon className={classes.Icons} />
        </ListItemIcon>
        <ListItemText primary="Add Admin" />
      </ListItem>
      <ListItem button>
        <ListItemIcon onClick={() => setOpen(true)}>
          <FormatAlignJustifyOutlinedIcon className={classes.Icons} />
        </ListItemIcon>
        <ListItemText primary="Predict With Form" />
      </ListItem>
      <ListItem button>
        <ListItemIcon onClick={() => setOpen(true)}>
          <AttachmentOutlinedIcon className={classes.Icons} />
        </ListItemIcon>
        <ListItemText primary="Csv File" />
      </ListItem>
    </div>
  )
}

export default SideBar
