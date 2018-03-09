import React, { Component } from 'react';

import Dish from './Dish/Dish';

class Dishes extends Component {
    state = {
        total: 0   
    }
    // componentDidMount() {
    //     console.log(this.state);
    // }
    // componentDidUpdate() {
    //     console.log(this.state);
    // }
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
        for (let key in this.props.dishes) {
            dishesArray.push({
                id: key,
                details: this.props.dishes[key]
            });
        }

        return (
            <div>
                {dishesArray.map((dish, index) => {
                    return <Dish
                        name={dish.details.name}
                        price={dish.details.price}
                        key={dish.id}
                        quantity={dish.details.quantity}
                    // addDish={() => this.addDishHandler(index)}
                    // removeDish={() => this.removeDishHandler(index)}
                    />
                })}

                <p style={{ display: this.state.total > 0 ? 'block' : 'none' }}>Total: <strong>${this.state.total}</strong></p>
                <p>Dish count: {this.state.dishCount}</p>
            </div>
        );
    }
};

export default Dishes;
