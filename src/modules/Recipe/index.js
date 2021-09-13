import React from 'react';
import {useParams} from "react-router";
import {Form, Image} from "react-bootstrap";

const Recipe = () => {
    const { id } = useParams();
    return ( <div>
        <h1>Recipe id: {id}</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="Enter recipe's title" />
                <Form.Text className="text-muted">
                    An awesome title for your recipe
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as={"textarea"} type="description"
                              style={{ height: '100px' }}
                              placeholder="Enter recipe's description" />
                <Form.Text className="text-muted">
                    Describe your recipe
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formIngredients">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control as={"textarea"}
                              style={{ height: '100px' }}
                              placeholder="Enter recipe's ingredients" />
                <Form.Text className="text-muted">
                    Ingredients for your recipe
                </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formDirections">
                <Form.Label>Directions</Form.Label>
                <Form.Control as={"textarea"}
                              style={{ height: '100px' }}
                              placeholder="Enter recipe's directions" />
                <Form.Text className="text-muted">
                    Directions for your recipe
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTags">
                <Form.Label>Tags</Form.Label>
                <Form.Control type="tags" placeholder="Enter recipe's tags" />
                <Form.Text className="text-muted">
                    Comma separated tags. Example: american, sweet, cookies
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" id="formActive">
                <Form.Text className="lead">
                    Images
                </Form.Text>
                <Image src="https://res.cloudinary.com/dniiru5xy/image/upload/c_thumb,f_auto,q_60,w_300,h_200,q_auto:low/v1564258209/recipes21/bmc3laji2jowpla3fd4q.jpg" thumbnail />
                <Image src="https://res.cloudinary.com/dniiru5xy/image/upload/c_thumb,f_auto,q_60,w_300,h_200,q_auto:low/v1564258209/recipes21/a4ctm4kkgqv1asqt6otr.jpg" thumbnail />
            </Form.Group>

            <Form.Group className="mb-3" id="formActive">
                <Form.Check type="checkbox" label="Active" />
            </Form.Group>

        </Form>
    </div>)
};

export default {
    routeProps: {
        path: '/recipe/edit/:id',
        component: Recipe
    },
    name: 'Recipe',
}
