import React, { Component } from 'react';
import axios from 'axios';

import Dish from './Dish/Dish';
import Aux from '../../hoc/Auxilary';
import classes from './Dishes.css';
import Image from '../../assets/shopping-purse-icon.png';
import Modal from '../../components/UI/Modal/Modal';

class Dishes extends Component {
    state = {
        dishes: null,
        dishCount: 0,
        total: 0,
        selectedDishes: null,
        purchasing: false
    }

    componentDidMount() {
        axios.get('https://react-order-food.firebaseio.com/dishes.json')
            .then(response => {
                this.setState({ dishes: response.data });
            })
            .catch(err => {
                console.log(err);
            })
    }

    addDishHandler = (id) => {
        let dishes = { ...this.state.dishes };
        let updatedDish = { ...dishes[id] };
        updatedDish.count = this.state.dishes[id].count + 1;
        let updatedDishes = { ...this.state.dishes, [id]: updatedDish }

        this.setState({
            selectedDishes: updatedDishes,
            total: this.state.total + updatedDish.price,
            dishCount: this.state.dishCount + 1,
        })
    }

    removeDishHandler = (id) => {
        let dishes = { ...this.state.dishes };
        let updatedDish = { ...dishes[id] };
        updatedDish.count = this.state.dishes[id].count - 1;
        let updatedDishes = { ...this.state.dishes, [id]: updatedDish }

        this.setState({
            selectedDishes: updatedDishes,
            total: this.state.total - updatedDish.price,
            dishCount: this.state.dishCount - 1
        })

    }

    purchasingHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    purchasingCancelHandler = () => {
        this.setState({
            purchasing: false
        });
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

        let dishes = <p>Loading...</p>;
        if (this.state.dishes) {
            dishes = dishesArray.map(dish => {
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


        return (
            <Aux>
                <div className={classes.Dishes}>
                    {dishes}
                    <div>
                        Total: ${this.state.total}
                    </div>
                    <div className={classes.Bag} onClick={this.purchasingHandler}>
                        {this.state.dishCount > 0 ? dishCounter : null}
                        <img src={Image} alt='cart' height="20" width="20" />
                    </div>
                </div>
                <Modal show={this.state.purchasing} cancelPurchase={this.purchasingCancelHandler} />
            </Aux>

        );
    }
};

export default Dishes;
