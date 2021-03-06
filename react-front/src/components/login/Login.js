import React, {useState} from "react";
import {Redirect, withRouter} from "react-router";
import LoginFormRedux from "./LoginForm";
import Alert from "@material-ui/lab/Alert";
import {Container} from "@material-ui/core";
import {compose} from "redux";
import {loginThunkCreator} from "../../redux/reducers/login-reducer";
import {connect} from "react-redux";

const Login = ({doLogin, isLogged}) => {

    let [error, setError] = useState("")

    const onSubmit = async (formData) => {
        let result = await doLogin(formData.login, formData.password)
        if (result) {
            setError(result);
        }
    }

    let alert;
    if (error) {
        alert = <Alert severity="error">{error}</Alert>
    }

    if (isLogged) {
        return (<Redirect to={"/"}/>)
    } else {
        return (
            <Container maxWidth="sm">
                {alert}
                <LoginFormRedux onSubmit={onSubmit}/>
            </Container>
        )
    }
}

let mapState = (state) => {
    return {
        isLogged: state.login.isLogged
    }
}

const LoginContainer = compose(
    withRouter,
    connect(mapState, {
        doLogin: loginThunkCreator.doLogin,
    })
)(Login)

export default LoginContainer;