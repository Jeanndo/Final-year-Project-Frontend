import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles((theme) => ({
  NavContainer: {
    position: "fixed",
    width: "100%",
    zIndex: 1,
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingRight: "80px",
    minHeight: "70px",
    backgroundColor: "orange",
    color: "#000000",
  },
  heading__primary: {
    color: "#000000",
    fontWeight: 700,
  },
}))
