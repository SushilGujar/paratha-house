import React, {useState} from 'react';
import CustomButton from './CustomButton';
import FormInput from './FormInput';
import './signup.styles.scss';

export default function Signup (props) {
    const [login, setLogin] = useState({email: '', password: ''});

    const handleChange = (e) => {
        let {name, value} = e.target;
        setLogin({...login, [name]: value});
    }

    const signIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className='sign-in'>
            <span>Sign in with your email and password</span>
            <form onSubmit={signIn}>
                <FormInput name='email' type='email' label='Email' value={login.email} changeHandler={handleChange} required></FormInput>
                <FormInput name='password' type='password' label='Password' value={login.password} changeHandler={handleChange} required></FormInput>
                <CustomButton name='Sign in' type='submit'>Sign In</CustomButton>
            </form>
        </div>
    );
};