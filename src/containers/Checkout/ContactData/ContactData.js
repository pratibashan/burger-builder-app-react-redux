import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css'
import axios from '../../../axios-orders';

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }
  orderHandler = (e) => {
    e.preventDefault();
    console.log(this.props.ingredients)

    this.setState({ loading: true })

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Prati Shan',
        address: {
          street: '1111 test street',
          zipcode: '12314',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => this.setState({ loading: false }))
      .catch(this.setState({ loading: false }))

  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4> Enter your Contact Data </h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="text" name="name" placeholder="Your Email" />
          <input type="text" name="name" placeholder="Street" />
          <input type="text" name="name" placeholder="Postal Code" />
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>

        </form>

      </div>
    )
  }
}

export default ContactData