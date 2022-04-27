import React, {useState} from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const GlobalStyle = createGlobalStyle`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100%;
    z-index: -1;
`;

const Email = styled.form`
    position: relative;
    padding: 20px;
    display: grid;
    justify-content: center;
`;

const EmailInput = styled.input`
    width: 400px;
    height: 30px;
    background-color: lightgray;
    border: 0;
    text-indent: 10px;
`;

const EmailError = styled.div`
    visibility: hidden;
    &.active {
        visibility: visible; 
        color: red;
    }
`;

const CheckIcon = styled(FontAwesomeIcon)`
    position: relative;
    left: 90%;
    top: -24px;
    color: gray;

    &.ok {
        color: lightseagreen;
    }
`;

const Password = styled.form`
    position: relative;
    padding: 20px;
    display: grid;
    justify-content: center;
`;

const PasswordInput = styled.input`
    width: 400px;
    height: 30px;
    background-color: lightgray;
    border: 0;
    text-indent: 10px;
`;

const EyeIcon = styled(FontAwesomeIcon)`
    position: relative;
    left: 90%;
    top: -24px;
    cursor: pointer;
    visibility: hidden;
    z-index: 1;

    &.open {
        color: lightseagreen;
        top: -40px;
        left: 90%;
    }

    &.show {
        visibility: visible;
    }
`;

const Input = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState({
        type: 'password',
        visible: false
    });

    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    const onEmailChange = (e) => {
        setEmailErr(false);
        setEmail(e.target.value);
        if(!emailRegex.test(e.target.value)) {
            setEmailCheck(false);
        }
        else {
            setEmailCheck(true);
        }
    }

    const checkEmail = (e) => {
        e.preventDefault();
        if(!emailRegex.test(email)) {
            setEmailErr(true);
        }
        else {
            setEmailErr(false);
        }
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const checkPassword = (e) => {
        e.preventDefault();
    }

    const onEyeClick = () => {
        if(!passwordCheck.visible) {
            setPasswordCheck({type: 'text', visible: true});
        }
        else {
            setPasswordCheck({type: 'password', visible: false});
        }
    }

    return (
        <div>
            <GlobalStyle/>
            <Email name="email" onSubmit={checkEmail}>
                <label htmlFor="email">E-mail</label>
                <br/>
                <EmailInput type="email" placeholder="E-mail" value={email} onChange={onEmailChange}/>
                <CheckIcon icon={faCircleCheck} className={'check '+ (emailCheck ? 'ok' : '')}/>
                <EmailError id="email_error" className={emailErr ? 'active':''}>Invalid e-mail address.</EmailError>
            </Email>
            <Password onSubmit={checkPassword}>
                <label htmlFor="password">Password</label>
                <br/>
                <PasswordInput type={passwordCheck.type} placeholder="Password" value={password} onChange={onPasswordChange}/>
                <EyeIcon icon={faEyeSlash} className={'closed '+ (passwordCheck.visible ? '' : 'show')} onClick={onEyeClick} />
                <EyeIcon icon={faEye} className={'open '+ (passwordCheck.visible ? 'show' : '')} onClick={onEyeClick} />
            </Password>
        </div>
    );
}

export default Input;