import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 15px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: #218838;
    }

    &:active {
        color: #ff0000
    }
`

const Button = function ({ label, type, handleClick }) {
    return (
        <StyledButton onClick={handleClick} type={type} >{label}</StyledButton>
    )
}

export default Button;