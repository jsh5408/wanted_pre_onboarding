import React, {useState} from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    z-index: -1;
`;
const Wrapper = styled.div`
    padding: 2px;
    text-align: center;
    justify-content: center;
    position: relative;
    display: inline-block;
    background: lightgray;
    border-radius: 10px;
    margin-bottom: 30px;
`;
const Label = styled.label`
    cursor: pointer;
    width: 200px;
    background: lightgray;
    border-radius: 10px;
    position: relative;
    display: inline-block;
`;
const RadioBtn = styled.input`
    display: none;
    &:checked + ${Label} {
        background: white;
    }
`;

const Toggle = () => {
    const [isToggle, setToggle] = useState("base");

    const onBtnChange = (e) => {
        //console.log(e.target.value);
        setToggle(e.target.value);
    }

    return (
        <div>
            <GlobalStyle/>
            <Wrapper>
                <RadioBtn type="radio" id="base" className="base" value="base" name="toggle" onChange={onBtnChange} checked={isToggle === 'base'? true : false} />
                <Label htmlFor="base">기본</Label>
                <RadioBtn type="radio" id="detail" className="detail" value="detail" name="toggle" onChange={onBtnChange} checked={isToggle === 'detail'? true : false} />
                <Label htmlFor="detail">상세</Label>
            </Wrapper>
            <div>
                {isToggle === 'base' ?
                <span>기본</span>
                :
                <span>상세</span>
                }
            </div>
        </div>
    );
}

export default Toggle;