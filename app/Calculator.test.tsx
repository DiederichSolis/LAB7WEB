import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculadora';
// Calculator.test.tsx
import '@testing-library/jest-dom';
import React from 'react';


describe('Calculator Component', () => {
  it('Calculadora inicial', () => {
    render(<Calculator />);
    const display = screen.getByRole('textbox', { name: /display/i });
    const result = screen.getByRole('textbox', { name: /resultado/i });
    expect(display).toBeInTheDocument();
    expect(result).toBeInTheDocument();
    expect(display).toHaveValue('');
    expect(result).toHaveValue('');
  });

  it('display on button click', () => {
    render(<Calculator />);
    const display = screen.getByRole('textbox', { name: /display/i });
    fireEvent.click(screen.getByText('1'));
    expect(display).toHaveValue('1');
    fireEvent.click(screen.getByText('2'));
    expect(display).toHaveValue('12');
    fireEvent.click(screen.getByText('3'));
    expect(display).toHaveValue('123');
  });

  it('calcualro resultado "=" button click', () => {
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

  it('uso de  "C" button click', () => {
    render(<Calculator />);
    const display = screen.getByRole('textbox', { name: /display/i });
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('C'));
    expect(display).toHaveValue('');
  });

  it('convertir numero negativo"+/-" button click', () => {
    render(<Calculator />);
    const display = screen.getByRole('textbox', { name: /display/i });
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+/-'));
    expect(display).toHaveValue('-1');
  });

  it('eliminar el ulimo dato de la cadenas "Backspace" button click', () => {
    render(<Calculator />);
    const display = screen.getByRole('textbox', { name: /display/i });
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('Backspace'));
    expect(display).toHaveValue('1');
  });
});
