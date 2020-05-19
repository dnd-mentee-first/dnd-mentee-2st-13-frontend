import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [area, setArea] = React.useState('');
  const [region, setRegion] = React.useState('');

  React.useEffect(() => {
  }, []);

  const handleChangeArea = event => {
    setArea(event.target.value);
  };

  const handleChangeRegion = event => {
    setRegion(event.target.value);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">{props.area}</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={props.area}
          onChange={handleChangeArea}
          className={classes.selectEmpty}
        >
          {/*<MenuItem value="">*/}
          {/*  <em>None</em>*/}
          {/*</MenuItem>*/}
          <MenuItem value={props.area}></MenuItem>
          <MenuItem value={1}>서울</MenuItem>
          <MenuItem value={6}>부산</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-lael">{props.region}</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={props.region}
          onChange={handleChangeRegion}
          className={classes.selectEmpty}
        >
          {
            area === 1 ? (
              <div>
                <MenuItem value={105}>강남구</MenuItem>
                <MenuItem value={106}>강동구</MenuItem>
                <MenuItem value={107}>강북구</MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem value={4}>해운대구</MenuItem>
                < MenuItem value={5}>부산진구</MenuItem>
                <MenuItem value={6}>북구</MenuItem>
              </div>
            )
          }
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}
