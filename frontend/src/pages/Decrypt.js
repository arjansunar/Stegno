import React, { useContext } from 'react'
import { Input, InputLabel, FormControl } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { inputContext } from '../context/InputContext';
function Decrypt() {
    const { inputValues, setinputValues } = useContext(inputContext);
    const storeImageAsBase64 = async (e) => {
        const file = e.target.files[0]
        const base64Image = await convertTobase64(file)
        const base64Data = base64Image.split(',')[1]
        console.log(base64Data)

        setinputValues({ ...inputValues, image64: base64Data })
    }
    const convertTobase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
    return (
        <div>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                <h1 className="logo" style={{ fontSize: '64px', borderBottom: 'solid #5C9CD7 3px', marginBottom: '5px' }}>Stegno</h1>
            </Link>
            <h1 style={{ fontSize: '30px' }}>Decode</h1>

            <main style={{ border: 'solid #497FE9 3px', borderRadius: '1.5rem', width: '500px', minHeight: '40vh', marginTop: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <FormControl style={{ width: '50%', margin: '3rem 0 0rem 5rem' }}>
                    <InputLabel htmlFor="my-input">Message length</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {
                        setinputValues({ ...inputValues, to: e.target.value })
                    }} />
                </FormControl>
                <p style={{ margin: '1rem 5rem', fontSize: '2rem', fontWeight: 'bold' }}>Message: </p>
                <p style={{ margin: '0rem 5rem', fontSize: '1rem', color: '#999595', overflow: 'overlay', height: '10vh' }}>hello</p>
                <label style={{
                    border: '1px solid #ccc',
                    display: 'inline-block',
                    padding: '6px 12px',
                    cursor: 'pointer',
                    width: '3.5rem',
                    position: 'relative',
                    left: '22rem',
                    top: '-8rem',
                    color: '#999595'
                }}>
                    <input type="file" style={{ display: 'none' }} accept="image/png, image/jpeg" onChange={e => storeImageAsBase64(e)} />
                        Upload image
                </label>
            </main>

        </div >
    )
}

export default Decrypt
