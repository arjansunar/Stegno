import React, { useContext } from 'react'
import { Input, InputLabel, FormControl, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { inputContext } from '../context/InputContext';
function Login() {

    const { inputValues, setinputValues } = useContext(inputContext);
    return (
        <div>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                <h1 className="logo" style={{ fontSize: '64px', borderBottom: 'solid #5C9CD7 3px', marginBottom: '5px' }}>Stegno</h1>
            </Link>
            <h1 style={{ fontSize: '30px' }}>Login</h1>

            <main style={{ border: 'solid #497FE9 3px', borderRadius: '1.5rem', width: '500px', height: '40vh', marginTop: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <FormControl style={{ width: '50%', margin: '3rem 0 1rem 5rem' }}>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {
                        setinputValues({ ...inputValues, emailId: e.target.value })
                    }} />
                </FormControl>
                <FormControl style={{ width: '50%', margin: '1rem 5rem' }}>
                    <InputLabel htmlFor="input">Password</InputLabel>
                    <Input id="input" type='password' aria-describedby="my-helper-text" onChange={(e) => {
                        setinputValues({ ...inputValues, password: e.target.value })
                    }} />
                </FormControl>
                <Link to='/encrypt' style={{ textDecoration: 'none' }} >
                    <Button variant="contained" color="primary" style={{
                        fontSize: '1.2rem',
                        backgroundColor: '#031722',
                        borderRadius: '1rem',
                        marginLeft: '22rem'
                    }}>
                        Next
                    </Button>
                </Link>
            </main>
        </div>
    )
}

export default Login
