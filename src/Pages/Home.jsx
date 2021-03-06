import React, { useState, useEffect, useCallback } from "react";
import Baby from "../scss/img/landing-img.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { getArticles } from "../lib/api";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Footer from "../Components/Footer";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

const Home = () => {
  const history = useHistory();

  return (
    <>
      {/* Hero */}
      <main className="hero">
        <Navbar />
        <img src={Baby} alt="baby" className="hero__img" />
      </main>

      {/* Mid Section */}
      <section className="section">
        <div className="test">
          <h3 className="test__heading">Test your child</h3>
          <p className="test__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem
            deserunt optio omnis ipsa tempora.
          </p>
          <button
            className="test__button"
            onClick={() => history.push("/parent-dash")}
          >
            TEST
          </button>
        </div>
        <div className="test">
          <h3 className="test__heading">Latest Articles</h3>
          <p className="test__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem
            deserunt optio omnis ipsa tempora.
          </p>
        </div>
      </section>

      <Container maxWidth="lg" className="container mb-3">
        <ArticleContainer />
      </Container>

      <Footer />
    </>
  );
};

function ArticleContainer(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      console.log(res);
      setArticles(res);
    });
  }, []);
  return (
    // <section className="articles">
    <Grid container spacing={4} justify="space-evenly">
      {articles &&
        articles.map((article) => (
          <Article key={article._id} article={article} />
        ))}
    </Grid>
  );
}

function Article({ article }) {
  const history = useHistory();
  const classes = useStyles();

  const callback = useCallback(() => history.push(`/article/${article._id}`), [
    history,
    article._id,
  ]);

  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.root} onClick={callback}>
        <CardActionArea>
          <CardMedia className={classes.media} image={article.picture} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {article.caption}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.shorttext}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Home;
