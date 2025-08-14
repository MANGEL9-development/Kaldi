import React from "react"
import { useState } from "react";

export function InputField(props){
    const [isEmpty,setIsEmpty]=useState(true);
    return <>
        <div class="input-field-container">
            <div class="input-field-placeholder">
                <span class={"input-field-placeholder-text"+(isEmpty?" as-placeholder":"")}>
                    {props.placeholder??""}
                </span>
            </div>
            <div
                class="input-field"
                style={{width:props.style?.width}}
            >
                {
                    props.leftButton ?
                        <button>true</button> 
                        :
                        <></>
                }
                <div class="input-field-text-container">
                    <input
                        type={props.type??"text"}
                        onChange={(e)=>{
                            setIsEmpty(e.target.value==="");
                        }}
                    />
                    {
                        props.rightButton ?
                            <button // make this an eye instead of the search icon
                                onClick={() => props.rightButton.onClick?.()}
                            >
                            </button> 
                            :
                            <></>
                    }
                </div>
                
            </div>
            <div class="input-field-error-message">
                <span class="input-field-error-message-text">
                    {props.errorMessage??""}
                </span>
            </div>
        </div>
    </>
}

export function PasswordField(props){
    const [inputType,setInputType]=useState(true); // true=password, false=text
    return <InputField
                {...props} // passes all props from <PasswordField /> to <InputField />
                type={inputType?"password":"text"}
                rightButton={{
                    onClick:()=>{
                        setInputType(!inputType);
                    }
                }}
           />
}

export function EmailField(props){
    return <InputField
                {...props}
                type="email"
           />
}

export function SearchBar(props){
    return (
        <form id="searchbar" class="">
            <div id="search-input-container">
                <input type="search" name="searchquery" id="search-input" placeholder={props.placeholder} />
                {/* TODO: add .focused to #search-input-container when input is focused. remove on blur */}
                <button type="submit">
                    <div id="search-button-onhover"></div>
                </button>
            </div>
        </form>
    );
}

// TODO: eventually have something that has this liquid effect: https://codepen.io/Penno/pen/mVPqdb

// TODO: Add input component for date, credit card number, expiration date (MM/YYYY), number picker
//  (with + and - buttons), radio (and make radio fields like the blocks from Stylish Donuts),
//  checkbox, 
