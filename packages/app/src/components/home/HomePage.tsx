import React from 'react';
import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import { Page, Header, Content } from '@backstage/core-components';

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
  },
  content: {
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  }
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <Page themeId="home">
      <Header title="Home" />
      <Content>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} md={8} lg={6}>
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <Typography variant="h4" className={classes.title}>
                  Welcome to Backstage
                </Typography>
                <Typography variant="body1">
                  Future homepage content will be hosted here. This space will be used for 
                  important information, shortcuts, and dashboard elements.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
}; 