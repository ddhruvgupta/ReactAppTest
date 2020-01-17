import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import { View } from 'react-native';
import { magenetometer } from "react-native-sensors";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId) {
    // console.log(dishId)
    this.setState({ selectedDish: dishId })
  }

  // subscription = magenetometer.subscribe(({ x, y, z, timestamp }) =>
  //   console.log({ x, y, z, timestamp })
  // );

  render() {

    return (
      <View>
        <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </View>
    );
  }
}

export default Main;