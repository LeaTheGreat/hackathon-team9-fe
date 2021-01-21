import React, { useState, useEffect } from "react";
import { getArticleById } from "../lib/api";
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

export default function ArticlePage(props) {
  const classes = useStyles();

  const [article, setArticle] = useState(null);
  let id = props.match.params.id;

  useEffect(() => {
    getArticleById(id).then((res) => setArticle(res));
  }, [id]);

  return (
    <div className="dash">
      <NavbarFull />
      <Container>
        <Paper className={classes.root}>
          {article && (
            <Card>
              <CardContent>
                <Typography
                  component="h1"
                  variant="h1"
                  // className={classes.cardname}
                >
                  {article.caption}
                </Typography>
                <img src={article.picture} alt="article" />
                <Typography
                  component="p"
                  variant="h6"
                  // className={classes.cardname}
                >
                  {article.text}
                </Typography>
                <a href={article.linksource}>Source</a>
              </CardContent>
            </Card>
          )}
        </Paper>
      </Container>
    </div>
  );
}
