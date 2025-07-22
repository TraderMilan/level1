import {type AuthFormProps, useAuthForm} from "./useAuthForm.ts";


export function AuthForm({mode}: AuthFormProps) {

    const {setName, setPassword, name, password, handleSubmit, endPoint, error} = useAuthForm({mode});


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit()
        }}>
            <h2>{endPoint}</h2>
            <label htmlFor="name">Username</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error.length !== 0 && <div style={{ color: 'red' }}>{error}<br/></div>}
            <button type="submit">{endPoint}</button>
        </form>
    )

}