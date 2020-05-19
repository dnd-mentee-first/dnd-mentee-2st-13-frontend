import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, login } from '../../modules/auth';
import {check} from '../../modules/user';
import {withRouter} from 'react-router-dom';
import {setToken} from '../../lib/api/client';

class LoginForm extends Component {
    handleChange = e => {
        const { value, name } = e.target;
        this.props.changeField({
            type: 'login',
            key: name,
            value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.props.form);
        const { login, form, history, check}= this.props;
        // console.log(form.user_password);

        // const user = await axios.post('http://54.180.115.91:8000/api/auth/login', {
        //     headers: { 'Content-type': 'application/x-www-form-urlencoded', },
        //     data: {
        //         user_id: form.user_id,
        //         user_password: form.user_password,
        //     }
        // }).then(function(res){
        //     console.log('a');
        //     console.log(res);
        //     console.log('로그인 성공');
        // }). catch (function(error) {
        //
        //     console.log('로그인 실패');
        // });
        try {
            await login({
                user_id: form.user_id,
                user_password: form.user_password,
            });
            const {authorization} = this.props;
            console.log(this.props);
            console.log('a');
            localStorage.setItem('authorization', JSON.stringify(authorization)); // 로컬스토리지에 저장
            setToken(`Bearer ${authorization.token}`);
            // await check();
            // if(!this.props.user) {return}
            if(authorization !== null)
                history.push('/');
        } catch (e) {
            console.log('LoginForm');
            console.log(e);
        }

    };

    componentDidMount() {
        this.props.initializeForm();
    };

    render() {
        const { form } = this.props;
        return (
            <AuthForm
                type="login"
                form={form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default connect(
    ({ auth, user }) => ({
        form: auth.login,
        authorization: auth.authorization,
        user: user.user}),
    {
        changeField,
        initializeForm,
        login,
        check
    }
)(withRouter(LoginForm));
