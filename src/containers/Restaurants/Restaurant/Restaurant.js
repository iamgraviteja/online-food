import React, { Component } from 'react';

import classes from './Restaurant.css';
import Image from '../../../assets/restaurant.jpg';
import Dishes from '../../Dishes/Dishes';

class Restaurant extends Component {
    render() {       
        return (
            <div className={classes.Restaurant}>
                <div className={classes.RestaurantDetails}>
                    <div className={classes.Basic}>
                        <h3>{this.props.name}</h3>
                        <span>Rating - <strong>{this.props.rating}</strong></span>
                    </div>
                    <Dishes dishes={this.props.dishes} />
                </div>
                <div className={classes.RestaurantImg}>
                    <img src={Image} alt="restaurantImg" />
                </div>
            </div >
        );
    }
}

export default Restaurant;
