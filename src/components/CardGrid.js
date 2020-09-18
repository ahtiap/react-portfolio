import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
}));

function CardGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {props.children}
      </Grid>
    </div>
  );
}

export default CardGrid;
