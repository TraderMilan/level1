import {useState} from "react";
import {useNavigate} from "react-router-dom";


export interface AuthFormProps {
    mode: 'login' | 'register';
}

export function useAuthForm({mode}: AuthFormProps) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const endPoint = mode;

    async function handleSubmit() {
        try {
            setError("")

            if (name.trim().length === 0 || password.trim().length === 0) return

            const res = await fetch(`http://localhost:3000/users/${endPoint}`, {
                method: 'POST',
                body: JSON.stringify({username: name, password: password}),
                headers: {'Content-Type': 'application/json'}
            })

            if (!res.ok) throw new Error('Authentification Failed');

            const data = await res.json();

            if (mode === 'login') {
                localStorage.setItem('token', data.access_token);
                navigate('/main');
            } else {
                alert(data.message);
                navigate('/login');
            }

        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred');
            }
        }

    }

    return {setName, setPassword, name, password, handleSubmit, endPoint, error};


}