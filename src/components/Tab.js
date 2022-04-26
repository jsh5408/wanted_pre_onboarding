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
    margin-bottom: 30px;
`;
const Label = styled.label`
    cursor: pointer;
    width: 200px;
    position: relative;
    display: inline-block;
`;
const RadioBtn = styled.input`
    display: none;
    &:checked + ${Label} {
        border-bottom-style: solid;
        border-color: lightseagreen;        
    }
`;

const Tab = () => {
    const [isSelected, setSelected] = useState("1");

    const onTabChange = (e) => {
        //console.log(e.target.value);
        setSelected(e.target.value);
    }

    return (
        <div>
            <GlobalStyle/>
            <Wrapper>
                <RadioBtn type="radio" id="potato" className="potato" value="1" name="tab" onChange={onTabChange} checked={isSelected === "1"? true : false} />
                <Label htmlFor="potato">감자</Label>
                <RadioBtn type="radio" id="swpotato" className="swpotato" value="2" name="tab" onChange={onTabChange} checked={isSelected === "2"? true : false} />
                <Label htmlFor="swpotato">고구마</Label>
                <RadioBtn type="radio" id="curry" className="curry" value="3" name="tab" onChange={onTabChange} checked={isSelected === "3"? true : false} />
                <Label htmlFor="curry">카레라이스</Label>
            </Wrapper>
            <div>
                {isSelected === "1" ?
                    <span>감자</span>
                :
                    isSelected === "2"?
                    <span>고구마</span>
                    :
                    <span>카레라이스</span>
                }
            </div>
        </div>
    );
}

export default Tab;