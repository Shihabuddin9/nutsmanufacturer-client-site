import React from 'react';
import { toast } from 'react-toastify';

const AllUserRow = ({ user, refetch, index }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`https://hidden-brook-45557.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role ? <button class="btn btn-xs text-green-500">Already Admin</button> : <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default AllUserRow;