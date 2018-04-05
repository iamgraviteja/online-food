import React, { Component } from 'react';

import Dish from './Dish/Dish';
import Aux from '../../hoc/Auxilary';
import classes from './Dishes.css';
import Image from '../../assets/shopping-purse-icon.png';

class Dishes extends Component {
    state = {
        dishes: {
            dish1: {
                name: "pasta",
                price: 50,
                count: 0
            },
            dish2: {
                name: "pizza",
                price: 80,
                count: 0
            },
            dish3: {
                name: "burger",
                price: 20,
                count: 0
            }
        },
        dishCount: 0,
        total: 0
    }
    componentDidMount() {

    }
    addDishHandler = (id) => {
        let dishes = { ...this.state.dishes };
        let updatedDish = { ...dishes[id] };
        updatedDish.count = this.state.dishes[id].count + 1;
        let updatedDishes = { ...this.state.dishes, [id]: updatedDish }

        this.setState({
            dishes: updatedDishes,
            total: this.state.total + updatedDish.price,
            dishCount: this.state.dishCount + 1
        })
    }

    removeDishHandler = (id) => {       
        let dishes = { ...this.state.dishes };
        let updatedDish = { ...dishes[id] };
        updatedDish.count = this.state.dishes[id].count - 1;
        let updatedDishes = { ...this.state.dishes, [id]: updatedDish }

        this.setState({
            dishes: updatedDishes,
            total: this.state.total - updatedDish.price,
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

        const dishCounter = <div className={classes.BagCounter}>{this.state.dishCount}</div>;             

        return (
            <Aux>
                <div className={classes.Dishes}>
                    {
                        dishesArray.map(dish => {
                            return <Dish
                                key={dish.id}
                                name={dish.details.name}
                                price={dish.details.price}
                                quantity={dish.details.count}
                                addDish={() => this.addDishHandler(dish.id)}
                                removeDish={() => this.removeDishHandler(dish.id)}
                            />
                        })
                    }
                    <div>
                        Total: ${this.state.total}
                    </div>
                    <div className={classes.Bag}>
                        {this.state.dishCount > 0 ? dishCounter : null}
                        <img src={Image} alt='cart' height="20" width="20" />
                    </div>
                </div>

            </Aux>

        );
    }
};

export default Dishes;
