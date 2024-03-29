import { useState  } from 'react';
import FormInput from '../form-input/form-input.component';
import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth  } 
    from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password === '') {
            alert('passwords is required');
            return;
        }

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });

            console.log(user);
        }
         catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }            
        }

        setFormFields(defaultFormFields);
    
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>            
                <FormInput label="Display Name" type="text" required onChange={handleChange} name='displayName' value={displayName}></FormInput>

                <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}></FormInput>

                <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}></FormInput>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}></FormInput>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;
