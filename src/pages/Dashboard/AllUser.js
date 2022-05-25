import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllUserRow from './AllUserRow';

const AllUser = () => {
    const { isLoading, data: users, refetch } = useQuery('allUser', () =>
        fetch('http://localhost:5000/allUsers')
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-sm my-2 font-medium'>All Users: <span className='bg-red-600 text-white rounded-full px-2.5 text-xs py-1'>{users.length}</span></h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <AllUserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></AllUserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;