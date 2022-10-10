// hooks
import { useState } from 'react';

// styled components
import Form from '../../styled/Form';
import Input from '../../styled/Input';
import Label from '../../styled/Label';
import Button from '../../styled/Button';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;

            default:
                break;
        }
    };

    return (
        <Form>
            <Label htmlFor="email">Email</Label>
            <Input
                type="email"
                placeholder="Email address"
                name="email"
                id="email"
                onChange={handleInputChange}
                value={email}
            />

            <Label htmlFor="password">Password</Label>
            <Input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={handleInputChange}
                value={password}
            />

            <Button type="submit" primary bottomed>
                Log In
            </Button>
        </Form>
    );
};

export default LoginForm;
