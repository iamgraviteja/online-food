import React, { Component } from 'react';
import axios from 'axios';

import Restaurant from './Restaurant/Restaurant';
import Aux from '../../hoc/Auxilary';
import classes from './Restaurants.css';

class Restaurants extends Component {

    state = {
        restaurants: null,
        activeRestaurant: null
    }

    componentDidMount() {
        axios.get('https://react-order-food.firebaseio.com/restaurants.json')
            .then(response => {
                this.setState({ restaurants: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    selectRestHandler = (id) => {
        this.props.history.push({ pathname: '/dishes/' + id });
    }

    render() {

        const restaurantsArray = [];
        for (let key in this.state.restaurants) {
            restaurantsArray.push({
                id: key,
                details: this.state.restaurants[key]
            });
        }
        let restaurants = (
            restaurantsArray.map(restaurant => {
                return (
                    <Restaurant
                        key={restaurant.id}
                        name={restaurant.details.name}
                        rating={restaurant.details.rating}
                        minOrder={restaurant.details.minOrder}
                        clicked={() => this.selectRestHandler(restaurant.id)}
                    />

                );
            })
        );
        if (!this.state.restaurants) {
            restaurants = <p>Loading...</p>
        }

        return (
            <Aux>
                <div className={classes.Restaurants}>
                    {restaurants}
                </div>
            </Aux>
        );
    }
};

export default Restaurants;
