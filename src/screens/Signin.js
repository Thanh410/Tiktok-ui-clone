import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        // we will change it later;
    };
    return (
        <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center">
            <div style={{ width: 300 }}>
                <h1 className="text-center">Sign in</h1>
                <Form onSubmit={onFormSubmit}>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 mt-3">
                        Sign in
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;
