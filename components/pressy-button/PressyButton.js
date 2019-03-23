import { connect } from 'react-redux';
import styled from 'styled-components';
import { buttonPressed } from './actions';

const BigButton = styled.button`
    padding: 16px;
    color: white;
    background-color: red;
    border-radius: 8px;
`;

const PressyButtonBase = ({ buttonPresses, buttonPressed }) => (
    <>
        <div>Welcome, welcome my friends! You've pressed the button {buttonPresses} times</div>
        <BigButton onClick={buttonPressed}>Press meh</BigButton>
    </>
)

const mapStateToProps = state => ({
    buttonPresses: state.buttonPresses,
});

const mapDispatchToProps = {
    buttonPressed,
};

export const PressyButton = connect(mapStateToProps, mapDispatchToProps)(PressyButtonBase);