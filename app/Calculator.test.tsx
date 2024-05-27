import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';
// Calculator.test.tsx
import '@testing-library/jest-dom';
import React from 'react';


describe('Calculator Component', () => {


  it('resultado "=" button click', () => {
    render(<Calculator />);
    const display = screen.getByRole('textbox', { name: /display/i });
    const result = screen.getByRole('textbox', { name: /resultado/i });
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(display).toHaveValue('');
    expect(result).toHaveValue('3');
  });

  it('Limpiar "C" button click', () => {
    render(<Calculator />);
    const display = screen.getByRole('textbox', { name: /display/i });
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('C'));
    expect(display).toHaveValue('');
  });

  it('convertir numero negativo "+/-" button click', () => {
    render(<Calculator />);
    const display = screen.getByRole('textbox', { name: /display/i });
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+/-'));
    expect(display).toHaveValue('-1');
  });

  it('should delete last character on "Backspace" button click', () => {
    render(<Calculator />);
    const display = screen.getByRole('textbox', { name: /display/i });
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('Backspace'));
    expect(display).toHaveValue('1');
  });
});
