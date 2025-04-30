import React, {useState} from "react";

type userProps = {
    name: string;
    email: string;
}

function LoginCheck() {

    const [user, setUser] = useState<userProps | null>({} as userProps);

    const handleLogin = () => {
        setUser({
            name: 'berkan',
            email: 'djklshf@gmail.com',
        });
    }

    const handleLogout = () => {
        setUser({} as userProps);
    }

    return (
        <div>
            <button onClick={handleLogin}>Giriş Yap</button>
            <button onClick={handleLogout}>Çıkış Yap</button>
            <div>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
            </div>
        </div>
    )
}

export default LoginCheck;