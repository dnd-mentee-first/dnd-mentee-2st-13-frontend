import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SelectArea from '../SelectArea';

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    minWidth: 120,
  },

}));

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const classes = useStyles();

  const [area, setArea] = useState(1);
  const [sigungu, setSigungu] = useState(105);
  const fetchArea = () => {

  };

  const fetchRegion = () => {
  };

  React.useEffect(() => {
    fetchArea();
    fetchRegion();
  }, []);

  const handleChangeArea = event => {
    console.log(event.target.value);
    console.log('지역');
    setArea(event.target.value);
  };

  const handleChangeRegion = event => {
    console.log(event.target.value);
    console.log('구');
    setSigungu(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        {textMap[type]}
      </Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="user_id"
          label="아이디"
          name="user_id"
          value={form.user_id}
          onChange={onChange}
          autoComplete="user_id"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="user_password"
          label="패스워드"
          type="password"
          id="user_password"
          value={form.user_password}
          onChange={onChange}
          autoComplete="current-password"
        />
        {type === 'register' && (
          <>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passwordConfirm"
              label="패스워드 확인"
              type="password"
              id="passwordConfirm"
              value={form.passwordConfirm}
              onChange={onChange}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user_name"
              label="이름"
              name="user_name"
              value={form.user_name}
              onChange={onChange}
              autoComplete="user_name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user_email"
              label="이메일 주소"
              name="user_email"
              value={form.user_email}
              onChange={onChange}
              autoComplete="user_email"
              autoFocus
            />
            <SelectArea area={form.area_id} region={form.sigungu_id}/>
          </>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {textMap[type]}
        </Button>
        {type === 'login' ? (
          <Grid container justify="space-between" alignItems={'center'}>
            <Grid direction={'column'} style={{}}>
              <Grid item xs>
                <Link href="#">
                  {'Forgot id?'}
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="#">
                  {'Forgot password?'}
                </Link>
              </Grid>
            </Grid>
            <Grid item>
              <Link href="/register">{`Don't have an account? Sign Up`}</Link>
            </Grid>
          </Grid>
        ) : (
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login">{`Already have an account? Sign in`}</Link>
            </Grid>
          </Grid>
        )}
      </form>
    </React.Fragment>
  );
};

export default AuthForm;
