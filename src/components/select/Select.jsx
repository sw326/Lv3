import React from 'react';
import { StUnderContainer } from '../ProjectCss';
import styled from 'styled-components';

const Select = () => {
    return (
        <StUnderContainer>
            <div>
                <h1>Select</h1>
                <StSelect>
                    <option>React</option>
                    <option>Spring</option>
                    <option>Java</option>
                    <option>JavaScript</option>
                </StSelect>
                <StSelect>
                    <option>React</option>
                    <option>Spring</option>
                    <option>Java</option>
                    <option>JavaScript</option>
                </StSelect>
            </div>
        </StUnderContainer>
    );
};

export default Select;

const StSelect = styled.select`
    border: 1px solid rgb(221, 221, 221);
    border-radius: 8px;
    margin-right: 10px;
    width: 300px;
    height: 50px;
`;

// const StOption = styled.option`
// display: flex;
// align-items: center;
// justify-content: center;
// `;