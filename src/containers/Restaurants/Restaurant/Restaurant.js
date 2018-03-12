import React, { Component } from 'react';

import classes from './Restaurant.css';
import Image from '../../../assets/restaurant.jpg';

class Restaurant extends Component {
    render() {
        return (
            <div className={classes.Restaurant} onClick={this.props.clicked}>
                <div className={classes.RestaurantDetails}>
                    <div className={classes.Basic}>
                        <h3>{this.props.name}</h3>
                        <span>Rating - <strong>{this.props.rating}</strong></span>
                    </div>
                    <div>
                        <span>Min. Order: $</span>
                        <span>{this.props.minOrder}</span>
                    </div>
                </div>
                <div className={classes.RestaurantImg}>
                    <img src={Image} alt="restaurantImg" />
                </div>
            </div >
        );
    }
}

export default Restaurant;
