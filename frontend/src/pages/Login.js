import React from 'react'
import { Input, InputLabel, FormControl } from '@material-ui/core';

function Login() {
    return (
        <div>
            <main style={{ border: 'solid #497FE9 3px', borderRadius: '1.5rem', width: '500px', height: '40vh', marginTop: '3rem', display: 'flex', flexDirection: 'column' }}>
                {/* <div style={{ display: 'flex', margin: '3rem 5rem', justifyContent: 'space-around' }}>
                    <InputLabel><strong>Username:</strong></InputLabel>
                    <Input placeholder='example@gmail.com'></Input>
                </div>
                <div style={{ display: 'flex', margin: '3rem 5rem', justifyContent: 'space-around' }}>
                    <InputLabel><strong>Password:</strong></InputLabel>
                    <Input ></Input>
                </div> */}
                <FormControl style={{ width: '50%', margin: '1rem 4rem' }}>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl style={{ width: '50%', margin: '1rem 4rem' }}>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" /></FormControl>
            </main>
        </div>
    )
}

export default Login
