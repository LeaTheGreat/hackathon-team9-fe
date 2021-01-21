import React, { useState, useEffect } from "react";
// import { getSurveyByChildId } from "../lib/api";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavbarFull from "./../Components/NavbarFull";

const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "auto",
  },
});

export default function ViewPage(props) {
  const classes = useStyles();

  const [survey, setServey] = useState(null);
  let id = props.match.params.id;

  useEffect(() => {
    // getSurveyByChildId(id).then((res) => setServey(res));
  }, [id]);

  return (
    <div className="dash">
      <NavbarFull />
      <Container>
        <Paper className={classes.root}>{JSON.stringify(survey)}</Paper>
      </Container>
    </div>
  );
}
