import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import axios from "axios";

const Users = () => {

    // here you set a state to tell the component it need to wait
    //  until the result is fetched from the api
    const [loadingData, setLoadingData] = useState(true);

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            await axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    // check if the data is populated
                    console.log('data loaded from remote')
                    console.log(response.data);
                    setData(response.data);
                    // you tell it that you had the result
                    setLoadingData(false);
                });
        }
        if (loadingData) {
            // if the result is not ready so you make the axios call
            getData().then(() => console.log('data loaded'));
        }
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>Edit</td>
                    </tr>

                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default {
    routeProps: {
        path: '/users',
        component: Users
    },
    name: 'Users',
}
