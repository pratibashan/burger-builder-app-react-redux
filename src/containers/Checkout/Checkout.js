import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData'


class Checkout extends Component {
  _isMounted = false;
  state = {
    ingredients: null,
    price: 0
  }


  UNSAFE_componentWillMount() {
    this._isMounted = true;

    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      // console.log(param)
      // ['salad', '1']
      if (param[0] === 'price') {
        price = param[1];
      }
      else {
        ingredients[param[0]] = +param[1];
      }
    }
    if (this._isMounted) {
      this.setState({ ingredients: ingredients, totalPrice: price });
    }
  }


  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  UNSAFE_componentWillUnmount() {
    this._isMounted = false
  }


  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler} />
        <Route path={this.props.match.path + '/contact-data'}
          render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
      </div>
    )
  }

}

export default Checkout;



// const query = new URLSearchParams(this.props.location.search);
//     console.log(`query:${query}`)
//     console.log(query.entries())
//     const ingredients = {};

//     for (let param of query.entries()) {
//       //query.entries() => ['salad','1']
//       ingredients[param[0]] = +param[1]  // + => to convert the value into number type
//     }
//     console.log(`ingredients:${ingredients}`)
//     // this.setState({ ingredients: ingredients })