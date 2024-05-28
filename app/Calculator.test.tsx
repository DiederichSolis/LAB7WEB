import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculadora';
import '@testing-library/jest-dom';
import React from 'react';
require('@testing-library/jest-dom');

describe('Calculator Component', () => {
  let display: HTMLElement, result: HTMLElement;

  beforeEach(() => {
    render(React.createElement(Calculator));
    display = screen.getByLabelText('display');
    result = screen.getByLabelText('resultado');
  });

  it('should render initial display', () => {
    expect(display).toBeInTheDocument();
    expect(result).toBeInTheDocument();
    expect(display).toHaveValue('');
    expect(result).toHaveValue('');
  });

  it('should update display on button click', () => {
    fireEvent.click(screen.getByText('1'));
    expect(display).toHaveValue('1');
    fireEvent.click(screen.getByText('2'));
    expect(display).toHaveValue('12');
    fireEvent.click(screen.getByText('3'));
    expect(display).toHaveValue('123');
  });

  it('should calculate result on "=" button click', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(display).toHaveValue('');
    expect(result).toHaveValue('3');
  });

  it('should clear display on "C" button click', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('C'));
    expect(display).toHaveValue('');
  });

  it('should toggle negative number on "+/-" button click', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+/-'));
    expect(display).toHaveValue('-1');
  });

  it('should delete the last character on "Backspace" button click', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('Backspace'));
    expect(display).toHaveValue('1');
  });
});

describe('Calculator Component', () => {
  let display: HTMLElement, result: HTMLElement;

  beforeEach(() => {
    render(<Calculator />);
    display = screen.getByLabelText('display');
    result = screen.getByLabelText('resultado');
  });

  it('should render initial display', () => {
    expect(display).toBeInTheDocument();
    expect(result).toBeInTheDocument();
    expect(display).toHaveValue('');
    expect(result).toHaveValue('');
  });

  it('should update display on button click', () => {
    fireEvent.click(screen.getByText('1'));
    expect(display).toHaveValue('1');
    fireEvent.click(screen.getByText('2'));
    expect(display).toHaveValue('12');
    fireEvent.click(screen.getByText('3'));
    expect(display).toHaveValue('123');
  });

  it('should calculate result on "=" button click', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(display).toHaveValue('');
    expect(result).toHaveValue('3');
  });

  it('should clear display on "C" button click', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('C'));
    expect(display).toHaveValue('');
  });

  it('should toggle negative number on "+/-" button click', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+/-'));
    expect(display).toHaveValue('-1');
  });

  it('should delete the last character on "Backspace" button click', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('Backspace'));
    expect(display).toHaveValue('1');
  });
});
