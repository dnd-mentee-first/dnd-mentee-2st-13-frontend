import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import styles from '../assets/sectionStyle';
import Map from './Map';
import Board from '../components/Board';
import Slider from '../components/Slider';
import MainContents from '../components/MainContents';
import AddContentsBtn from '../components/AddContentsBtn';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';

// 모든 페이지의 중간 레이아웃

const useStyles = makeStyles(styles);

export default function Section({ type }) {
  const classes = useStyles();

  const sectionType = type;
  const food = 'food';
  const tour = 'tour';
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={9}>
          {type === 'main' ? (
            <>
              <Slider />
              <Box style={{ display: 'flex', paddingTop: 100, paddingLeft: 30}}>
                <h1 className={classes.title}>맛집</h1>
                <Box style={{width: 50}}/>
                <Link to={'/foodBoard'} style={{textDecoration: 'none', color: 'black', fontWeight: 'bold', marginTop: 80}}>
                  더보기</Link>
              </Box>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <MainContents type={food} />
              </div>
              <Box style={{ display: 'flex', alignItems: 'center', paddingLeft: 30}}>
                <h5 className={classes.title}>관광지</h5>
                <Box style={{width: 50}}/>
                <Link to={'/foodBoard'} style={{textDecoration: 'none', color: 'black', fontWeight: 'bold', marginTop: 50}}>
                  더보기</Link>
              </Box>
              <MainContents type={tour} />
            </>
          ) : type === 'food' ? (
            <>
              <div style={{display: 'flex', justifyContent: 'center', paddingLeft: 220, paddingBottom: 30}}>
                <h5 className={classes.title}>맛집</h5>
              </div>
              <Map type={sectionType} />
            </>
          ) : type === 'tour' ? (
            <>
              <div style={{display: 'flex', justifyContent: 'center', paddingLeft: 220, paddingBottom: 30}}>
                <h5 className={classes.title}>관광지</h5>
              </div>
              <Map type={sectionType} />
            </>
          ) : (
            <>
              {type === 'foodBoard' ? (
                <>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <h3 className={classes.title} style={{marginRight: 430, marginLeft: 10}}>맛집</h3>
                    <AddContentsBtn/>
                  </div>
                </>
              ) : (
                <>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <h3 className={classes.title} style={{marginRight: 360, marginLeft: 10}}>관광지</h3>
                    <AddContentsBtn/>
                  </div>
                </>
              )}
              <Board type={sectionType} open={open} />
            </>
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
}
