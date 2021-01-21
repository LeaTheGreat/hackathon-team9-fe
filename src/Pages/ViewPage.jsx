import React, { useState, useEffect } from "react";
import { getSurveyByChildId } from "../lib/api";
import Typography from "@material-ui/core/Typography";
import {
  Card,
  CardContent,
  Container,
  Paper,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavbarFull from "./../Components/NavbarFull";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";

const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "auto",
    padding: "0 20px 10px",
  },
  container: {
    borderRadius: "20px",
    maxHeight: 440,
    padding: "0 20px 10px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function ViewPage(props) {
  const classes = useStyles();

  const [survey, setServey] = useState(null);
  let id = props.match.params.id;

  useEffect(() => {
    getSurveyByChildId(id).then((res) => setServey(res));
  }, [id]);
  const getText = (survey) => {
    console.log(survey);
    const prc = survey.prediction_probability * 100;

    if (survey.prediction == 1) {
      return `With probability ${prc}% child has potential for ASD`;
    } else {
      return `With probability ${prc}% child has NO potential for ASD`;
    }
  };

  return (
    <div className="dash">
      <NavbarFull />
      <Container>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" id="tableTitle" component="div">
                Results
              </Typography>
              <Button variant="contained" color="primary">
                Send to doctor
              </Button>
            </Toolbar>
          </TableContainer>
          {survey && <Typography variant="h4">{getText(survey)}</Typography>}
        </Paper>
      </Container>
    </div>
  );
}
