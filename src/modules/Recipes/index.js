import React, {useEffect, useState} from 'react';
import {Nav, Table} from "react-bootstrap";
import axios from "axios";

const Recipes = () => {

    // here you set a state to tell the component it need to wait
    //  until the result is fetched from the api
    const [loadingData, setLoadingData] = useState(true);

    const [data, setData] = useState([]);

    const recipes = [
        {id: 1, title: "recipe 1"},
        {id: 2, title: "recipe 2"},
    ];

    useEffect(() => {
        async function getData() {
            // await axios
            //     .get("https://jsonplaceholder.typicode.com/users")
            //     .then((response) => {
            //         // check if the data is populated
            //         console.log('data loaded from remote')
            //         console.log(response.data);
            //         setData(response.data);
            //         // you tell it that you had the result
            //         setLoadingData(false);
            //     });

            setData(recipes);
            setLoadingData(false);
        }
        if (loadingData) {
            // if the result is not ready so you make the axios call
            getData().then(() => console.log('data loaded'));
        }
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td><Nav.Link href={`/recipe/edit/${item.id}`} >Edit</Nav.Link></td>
                    </tr>

                ))}
                </tbody>
            </Table>
        </div>

    );
}

export default {
    routeProps: {
        path: '/recipes',
        component: Recipes
    },
    name: 'Recipes',
}
