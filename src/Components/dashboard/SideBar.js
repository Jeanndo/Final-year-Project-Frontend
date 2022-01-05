import * as React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import FormatAlignJustifyOutlinedIcon from "@material-ui/icons/FormatAlignJustifyOutlined"
import AttachmentOutlinedIcon from "@material-ui/icons/AttachmentOutlined"
import PersonAddIcon from "@material-ui/icons/PersonAdd"
import PeopleIcon from "@mui/icons-material/People"
import { useStyles } from "./style"

const SideBar = ({
  setOpen,
  setIsForm,
  setIsCsv,
  setAddAdmin,
  setIsAdmins,
}) => {
  const classes = useStyles()
  const handleFormPrediction = () => {
    setOpen(true)
    setIsForm(true)
    setIsCsv(false)
    setAddAdmin(false)
  }
  const handleFileUploading = () => {
    setOpen(true)
    setIsCsv(true)
    setIsForm(false)
    setAddAdmin(false)
  }
  const handleAddAdmin = () => {
    setOpen(true)
    setIsForm(false)
    setIsCsv(false)
    setAddAdmin(true)
  }

  const handleAdmins = () => {
    setOpen(true)
    setIsAdmins(true)
    setIsForm(false)
    setIsCsv(false)
    setAddAdmin(false)
  }

  return (
    <div>
      <ListItem button>
        <ListItemIcon onClick={handleAddAdmin}>
          <PersonAddIcon className={classes.Icons} />
        </ListItemIcon>
        <ListItemText primary="Add Admin" onClick={handleAddAdmin} />
      </ListItem>
      <ListItem button>
        <ListItemIcon onClick={handleAdmins}>
          <PeopleIcon className={classes.Icons} />
        </ListItemIcon>
        <ListItemText primary="All Admins" onClick={handleAdmins} />
      </ListItem>
      <ListItem button>
        <ListItemIcon onClick={handleFormPrediction}>
          <FormatAlignJustifyOutlinedIcon className={classes.Icons} />
        </ListItemIcon>
        <ListItemText
          primary="Predict With Form"
          onClick={handleFormPrediction}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon onClick={handleFileUploading}>
          <AttachmentOutlinedIcon className={classes.Icons} />
        </ListItemIcon>
        <ListItemText primary="Csv File" onClick={handleFileUploading} />
      </ListItem>
    </div>
  )
}

export default SideBar
