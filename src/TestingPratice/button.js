import React from 'react';
import './button.css'
function Button({ label }) {
    return <div data-testid='button' className='button-style'>{label}</div>
}

export default Button;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from './button';
// import { render, getByTestId } from '@testing-library/react'
// import { expect } from '@testing-library/jest-dom'
// it('render without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Button></Button>, div)
// })
// it('renders button correctly', () => {
//     const { getByTestId } = render(<Button label='click me'></Button >)
//     expect(getByTestId('button')).toHaveTextContent('click me')
// })