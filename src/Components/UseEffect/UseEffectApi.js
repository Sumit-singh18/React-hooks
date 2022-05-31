import React, { useState, useEffect } from 'react'
import './useapi.css'

const UseEffectApi = () => {
    const [user, setuser] = useState([])
    const url = 'https://api.github.com/users';

    const getUsers = async () => {
        const response = await fetch(url);
        const user = await response.json();
        setuser(user)
    }
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            <h1>  Github User</h1>
            <ul className='users'>
                {
                    user.map((userx) => {
                        const { id, avatar_url, login,node_id } = userx;
                        return (
                            <li key={id}>
                                <img src={avatar_url} alt={login}/>
                                <div>
                                    <h4>{login}</h4>
                                    <a href={node_id}>Profile</a>
                                </div>
                            </li>
                            )

                    })
                }
            </ul>
        </div>
    )
}

export default UseEffectApi