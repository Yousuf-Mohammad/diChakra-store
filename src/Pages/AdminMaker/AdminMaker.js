import React from 'react';
import { useState } from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';



const AdminMaker = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <div style={{ margin: "200px" }}>
                <form>
                    <input type="email" name="" label="Mail Address" id="" onBlur={handleOnBlur} />

                    <input style={{ marginLeft: "10px" }} onClick={handleAdminSubmit} className="btn btn-secondary" type="submit" />
                </form>
                {success && <p>Made Admin successfully!</p>}

            </div>
        </div>
    );
};

export default AdminMaker;