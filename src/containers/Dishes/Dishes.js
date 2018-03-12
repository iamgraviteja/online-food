import React, { Component } from 'react';
import axios from 'axios';

import Dish from './Dish/Dish';
import Aux from '../../hoc/Auxilary';

class Dishes extends Component {
    state = {
        dishes: null,
        total: 0
    }
    componentDidMount() {
        axios.get('https://react-order-food.firebaseio.com/dishes.json/101')
            .then(response => {
                console.log(response);
                this.setState({ dishes: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    addDishHandler = (index) => {

        //Need to change later
        let updatedDishes = [...this.state.dishes];
        updatedDishes[index].count = this.state.dishes[index].count + 1;

        this.setState({
            dishes: updatedDishes,
            total: this.state.total + updatedDishes[index].price,
            dishCount: this.state.dishCount + 1
        })
    }

    removeDishHandler = (index) => {
        //Need to change later
        let updatedDishes = [...this.state.dishes];
        updatedDishes[index].count = this.state.dishes[index].count - 1;

        this.setState({
            dishes: updatedDishes,
            total: this.state.total - updatedDishes[index].price,
            dishCount: this.state.dishCount - 1
        })

    }

    render() {

        const dishesArray = [];
        for (let key in this.state.dishes) {
            dishesArray.push({
                id: key,
                details: this.state.dishes[key]
            });
        }
        let dishes = <p>Loading....</p>;

        if (this.state.dishes) {
            dishes = (
                <div>
                    {dishesArray.map((dish, index) => {
                        return <Dish
                            name={dish.details.name}
                            price={dish.details.price}
                            key={dish.id}
                        // addDish={() => this.addDishHandler(index)}
                        // removeDish={() => this.removeDishHandler(index)}
                        />
                    })}

                    <p style={{ display: this.state.total > 0 ? 'block' : 'none' }}>Total: <strong>${this.state.total}</strong></p>
                    <p>Dish count: {this.state.dishCount}</p>
                </div>
            );
        }
        return (
            <Aux>
                {dishes}
            </Aux>
        );
    }
};

export default Dishes;
