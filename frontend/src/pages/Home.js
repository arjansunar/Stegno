import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div style={{ width: '500px' }}>
            <h1 className="logo" style={{ fontSize: '64px', borderBottom: 'solid #5C9CD7 3px', marginBottom: '5px' }}>Stegno</h1>
            <p className="description" style={{ fontSize: '24px', marginTop: '5px', color: '#999595' }}>
                Stegno is a project that enables you to create
                steganographic images and decode it.
            </p>
            <main style={{ border: 'solid #497FE9 3px', borderRadius: '1.5rem', width: '500px', height: '40vh', marginTop: '3rem' }}>
                <div style={{ height: '100%' }}>
                    <p style={{ margin: '2rem 3rem', fontSize: '34px', fontWeight: 'bold' }}>Choose your use case: </p>
                    <div className="buttons" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '4rem' }}>
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" style={{ fontSize: '1.2rem', backgroundColor: '#031722', borderRadius: '2rem' }}>
                                Encode
                        </Button>
                        </Link>
                        <Link to='/decrypt' style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="primary" style={{ fontSize: '1.2rem', backgroundColor: '#031722', borderRadius: '2rem' }}>
                                Decode
                        </Button>
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Home
