import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import Parallax from '../components/Parallax';
import styles from '../assets/frameStyle';
import Section from './Section';

// 모든 페이지의 바탕 레이아웃

const useStyles = makeStyles(styles);

export default function Frame({ type }) {
  const classes = useStyles();

  const frameType = type;
  return (
    <>
      <Parallax filter image={require('../assets/img/mainBg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={9}>
              <h1 className={classes.title}>Welcome to MATTANG.</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Section type={frameType} />
        </div>
      </div>
    </>
  );
}
