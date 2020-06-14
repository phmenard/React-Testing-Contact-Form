import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";




test("renders App without crashing", () => {
  render(<App />);
});


test("First Name is greater than 3 char's", () =>{
  const { getByTestId } = render(<ContactForm />);
  const firstName = getByTestId(/firstName/i);
  
  fireEvent.change(firstName, {target: {value: "paul"}});
 

});

test('You can add text to first name', () => {
  const { getByTestId } = render(<ContactForm />);
  const firstNameInput = getByTestId(/firstName/i);
 
  fireEvent.change(firstNameInput, { target: { value: 'paul' } });
  
  expect(firstNameInput.value).toBe('paul');
});

test('Yow can add text to last name', () => {
  const { getByTestId } = render(<ContactForm />);
  const lastNameInput = getByTestId(/lastName/i);
 
  fireEvent.change(lastNameInput, { target: { value: 'jacob' } });
  
  expect(lastNameInput.value).toBe('jacob');
});

test('You can add text to email input', () => {
  const { getByTestId } = render(<ContactForm />);
  const emailInput = getByTestId(/email/i);
  
  fireEvent.change(emailInput, { target: { value: 'paul@yahoo.com' } });
  
  expect(emailInput.value).toBe('paul@yahoo.com');
});

test('You can add text to message', () => {
  const { getByTestId } = render(<ContactForm />);
  const messageInput = getByTestId(/message/i);
  
  fireEvent.change(messageInput, { target: { value: 'test message' } });
  
  expect(messageInput.value).toBe('test message');
});

