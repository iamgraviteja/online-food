import React, { Component } from 'react';
import axios from 'axios';

import Restaurant from './Restaurant/Restaurant';
import Aux from '../../hoc/Auxilary';

class Restaurants extends Component {

    state = {
        restaurants: null,
        activeRestaurant: null
    }

    componentDidMount() {
        axios.get('https://react-order-food.firebaseio.com/restaurants.json')
            .then(response => {
                console.log(response);
                this.setState({ restaurants: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    selectRestHandler = (id) => {
        console.log(id);
        this.props.history.push({ pathname: '/orders' });
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
                return <Restaurant
                    key={restaurant.id}
                    name={restaurant.details.name}
                    rating={restaurant.details.rating}
                    minOrder={restaurant.details.minOrder}
                    clicked={() => this.selectRestHandler(restaurant.id)}
                />
            })
        );
        if (!this.state.restaurants) {
            restaurants = <p>Loading...</p>
        }

        return (
            <Aux>
                {restaurants}
            </Aux>
        );
    }
};

export default Restaurants;
