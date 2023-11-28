import { useState } from "react";
import { Container } from "./style.js"
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
export function Input({text, eyeButton = false , large = false, ...rest}) {
    
    const [showPassword, setShowPassword] = useState(false)
    function togglePasswordVisibility() {
        setShowPassword(!showPassword)
    }

    return(
        <Container $large={large}>
            <strong>{text}</strong>
            {
                eyeButton ? (
                    <>
                        <input {...rest} type={showPassword ? "text" : "password"}/>
                        {eyeButton &&
                            (
                                <button type="button" onClick={togglePasswordVisibility}>
                                    {showPassword ? <PiEyeBold size={20} /> :<PiEyeClosedBold size={20} /> }
                                </button>
                            )
                        }
                    </>
                ) :  <input {...rest} />
            }
            
        </Container>
    )
}