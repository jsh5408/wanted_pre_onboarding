import React, {useState} from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100%;
    z-index: -1;
`;

const Wrapper = styled.div`
    text-align: center;
    justify-content: center;
    position: relative;
    display: grid;
`;

const Output = styled.div`
    padding: 2px;
    text-align: end;
    justify-content: center;
    margin-bottom: 30px;
    background: lightgray;
    width: 400px;
    height: 40px;
    padding-top: 20px;
    span {
        padding-right: 20px;
    }
`;

const RangeSlider = styled.input`
    -webkit-appearance: none;
    width: 400px;
    height: 7px;
    margin-bottom: 20px;
    background: lightgray;
    border-radius: 5px;
    background-image: linear-gradient(lightseagreen, lightseagreen);
    background-repeat: no-repeat;
    background-size: ${props => props.value}% 100%;
    &:focus {
        outline: none;
    }
    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        background: lightseagreen;
        cursor: pointer;
        box-shadow: 0 0 2px 0 #555;
        transition: background 0.3s ease-in-out;
        border: 3px solid white;
    }
`;
const Buttons = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
    position: relative;
`;
const Button = styled.button`
    background: lightgray;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    &:hover {
        background: lightseagreen;
    }
`;

//border-color: lightseagreen;
/*
-webkit-appearance: none;
        background: lightseagreen;
*/

const Slider = () => {
    const [value, setValue] = useState("50");
    
    const onSliderChange = (e) => {
        setValue(e.target.value);
    }

    const onBtnClick = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <GlobalStyle/>
            <Wrapper>
            <Output>
                <span><b>{value}</b>&nbsp;&nbsp;&nbsp;&nbsp;%</span>
            </Output>
            <RangeSlider type="range" id="range" name="range" min="1" max="100" value={value} onChange={onSliderChange} step="1" />
            <Buttons>
                <Button value="1" onClick={onBtnClick}>1%</Button>
                <Button value="25" onClick={onBtnClick}>25%</Button>
                <Button value="50" onClick={onBtnClick}>50%</Button>
                <Button value="75" onClick={onBtnClick}>75%</Button>
                <Button value="100" onClick={onBtnClick}>100%</Button>
            </Buttons>
            </Wrapper>
        </div>
    );
}

export default Slider;