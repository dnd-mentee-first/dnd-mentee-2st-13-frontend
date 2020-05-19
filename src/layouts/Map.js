import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import MapFood from '../components/MapFood';
import MapTour from '../components/MapTour';

// 맛집, 관광지 페이지(foodPage, tourPage) 지도 레이아웃

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '133%',
    marginBottom: 30
  },
  details: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  map: {
    width: '150%',
    height: '700px',
  },
}));

export default function Map({ type }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.map}>
        <CardMedia>
          {type === 'food' ? (
            <>
              <MapFood />
            </>
          ) : (
            <>
              <MapTour />
            </>
          )}
        </CardMedia>
      </div>
    </Card>
  );
}
