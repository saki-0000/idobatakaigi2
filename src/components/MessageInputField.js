import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  }
})

const MessageField = () => {
  const classes = useStyles()
  return <div className={classes.root}>MessageField</div>
}

export default MessageField
