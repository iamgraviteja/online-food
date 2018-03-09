import React, { Component } from 'react';

import Restaurant from './Restaurant/Restaurant';
import Aux from '../../hoc/Auxilary';

class Restaurants extends Component {

    state = {
        restaurants: {
            laComida: {
                name: "La Comida",
                rating: 4.3,
                dishes: {
                    pasta: {
                        name: "Pasta",
                        price: 100,
                        quantity: 0
                    },
                    pizza: {
                        name: "Pizza",
                        price: 200,
                        quantity: 0
                    },
                    dulces: {
                        name: "Dulces",
                        price: 300,
                        quantity: 0
                    }
                }
            },
            laPastel: {
                name: "La Pastel",
                rating: 4,
                dishes: {
                    brownie: {
                        name: "Brownie",
                        price: 10,
                        quantity: 0
                    },
                    cookies: {
                        name: "Cookies",
                        price: 15,
                        quantity: 0
                    },
                    cake: {
                        name: "Cake",
                        price: 20,
                        quantity: 0
                    }
                }
            }
        },
        activeRestaurant: null
    }

    onDishAddHandler = () => {

    }
    onDishRemoveHandler = () => {

    }

    render() {

        const restaurantsArray = [];
        for (let key in this.state.restaurants) {
            restaurantsArray.push({
                id: key,
                details: this.state.restaurants[key]
            });
        }
        return (
            <Aux>
                {restaurantsArray.map(restaurant => {
                    return <Restaurant
                        key={restaurant.id}
                        name={restaurant.details.name}
                        rating={restaurant.details.rating}
                        dishes={restaurant.details.dishes}                       
                    />
                })}
            </Aux>
        );
    }
};

export default Restaurants;
