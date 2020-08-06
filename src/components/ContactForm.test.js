import React from 'react';
import {render, screen, fireEvent, act } from '@testing-library/react';
import user from '@testing-library/user-event'

//import Component for Testing
import ContactForm from './ContactForm'


// COPY AND PASTE SKELETON
// test('', () => {

// })

test('can render the form', () => {
    render(<ContactForm />)
})

test('Displays output from form when filled out and submitted',  () => {
    //STEP 1: Render Contact Form
    render(<ContactForm />)
    //STEP 2: Get different inputs
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    //STEP 3: Fill Out Inputs
    fireEvent.change(firstNameInput, {target: { value: 'Chayce' }});
    fireEvent.change(lastNameInput, {target: { value: 'Solchaga' }});
    fireEvent.change(emailInput, {target: { value: 'chayce@lambda.com' }});
    fireEvent.change(messageInput, {target: { value: 'Message Test' }});
    //STEP 4: Query for Submit Button
    // const submitBtn = screen.getByRole('button', {name: /submit/i});
    //STEP 5: Click Submit Button
    
    act(() => {
        user.click(screen.getByRole('button', {name: /submit/i}));
    });

    //STEP 6: Make assertions
    // expect(screen.findByTestId('formData').toBeInTheDocument();

})