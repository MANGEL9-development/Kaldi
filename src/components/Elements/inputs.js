import React from "react"

export function InputField(props){
    return <>
        <div class="input-field">
            {
                props.leftButton ?
                    <button>true</button> 
                    :
                    <></>
            }
            <input type="text" />
            {
                props.rightButton ?
                    <button>true</button> 
                    :
                    <></>
            }
        </div>
    </>
}

export function PasswordField(props){
    return <InputField rightButton />
}