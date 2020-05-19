import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, register } from '../../modules/auth';
import { setToken } from '../../lib/api/client';
import {check} from '../../modules/user';
import {withRouter} from 'react-router-dom';

class RegisterForm extends Component {
  handleChange = e => {
    const { value, name } = e.target;
    this.props.changeField({
      type: 'register',
      key: name,
      value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { register, form, check,history } = this.props;
    console.log('test');
    console.log(this.props.form);
    if (form.user_password !== form.passwordConfirm) {
      console.log('패스워드 일치하지 않음');
      return;
    }
    // const user = await axios.post('http://54.180.115.91:8000/api/auth/register', {
    //   headers: { 'Content-type': 'application/x-www-form-urlencoded', },
    //   data: {
    //     user_id: form.user_id,
    //     user_email: form.user_email,
    //     user_password: form.user_password,
    //     user_name: form.user_name,
    //     area_id: 1,
    //     sigungu_id: 105,
    //   }
    // }).then(function(res){
    //   console.log('a');
    //   console.log(res);
    // }). catch (function(error) {
    //   console.log('회원가입 실패');
    // });
    try {
      await register({
        user_id: form.user_id,
        user_email: form.user_email,
        user_password: form.user_password,
        user_passwordConfirm: form.user_passwordConfirm,
        user_name: form.user_name,
        area_id: '1',
        sigungu_id: '105',
      });
      const {authorization} = this.props;
      localStorage.setItem('authorization', JSON.stringify(authorization)); // 로컬스토리지에 저장
      setToken(`Bearer ${authorization.token}`);
      // await check();
      // if(!this.props.user) {
      //   console.log('error');
      //   return}
      history.push('/');
    } catch (e) {
      console.log('RegisterForm');
      console.log(e);
    }
  };

  componentDidMount() {
    this.props.initializeForm();
  }

  render() {
    const { form } = this.props;
    return (
      <AuthForm
        type="register"
        form={form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(
  ({ auth, user }) => ({
    form: auth.register,
    authorization: auth.authorization,
    user: user.user
  }),
  {
    changeField,
    initializeForm,
    register,
    check
  }
)(withRouter(RegisterForm));
