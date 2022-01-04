import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    marginLeft: "52px",
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    height: "60vh",
    width: "100%",
    marginTop: "50px",
    marginBottom: "30px",
  },
}))

export default function MainFeaturedPost(props) {
  const classes = useStyles()
  const { post } = props

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}></div>
        </Grid>
      </Grid>
    </Paper>
  )
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
}
