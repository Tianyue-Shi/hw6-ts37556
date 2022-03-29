import React, {useState} from "react";
import Button from '@mui/material/Button';
import '../App.css';

export default function Component() {
    const [name, setName] = useState("");  // hook for first name
    const [lastName, setLastName] = useState("");  // hook for last name

    const handleClick = () => {  // handle button click event
        fetch("/user/" + name)
                .then(response => response.json())
                .then(data => {
                    setLastName(data.output)  // retrieve last name
                })
                .catch(error => console.log(error))
        }

        return (
            <div>
                <form>
                    {/*  Prompt user input for first name */}
                    <label>Enter a First Name: </label><br/>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br/>
                    {/*  button for submission */}
                    <Button variant={"contained"}
                            onClick={handleClick}
                    >Submit</Button><br/><br/>
                    {/* label for last name or no last name message */}
                    <label>The Last Name is: {lastName}</label>
                </form>
            </div>
        );
    }