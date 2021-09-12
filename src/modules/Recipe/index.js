import React from 'react';
import {useParams} from "react-router";

const Recipe = () => {
    const { id } = useParams();
    return ( <div>
        <h1>Recipe id: {id}</h1>
    </div>)
};

export default {
    routeProps: {
        path: '/recipe/edit/:id',
        component: Recipe
    },
    name: 'Recipe',
}
