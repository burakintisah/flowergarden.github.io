import React, { Component } from 'react'

import { Container } from 'reactstrap';
import { Button, Input } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../layouts/NavbarCustomer'
import Footer from '../../layouts/Footer'


// WEIRD BUG WHEN ORDER HAS MESSAGE UI SHOWS MESSAGE AS ID
class OrderTracking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account_id: null,
            
            r: [],

            c: [
                { label: 'ID', field: 'order_id' },
                { label: 'Flower Arrangement Name', field: 'arrangement_name' },
                { label: 'Price', field: 'price' },
                { label: 'Order Date', field: 'desired_delivery_date' },
                { label: 'Delivery Status', field: 'delivery_status' },
                { label: 'Seller', field: 'seller_status' },
                { label: 'Courier', field: 'courier_status' },
            ],
            data: [],

            selectedOrder: null,
            redirectToOrderDetails: false
        }
    }

    // All orders are taken!
    componentDidMount() {
        const { match: { params } } = this.props;
        this.setState({ account_id: params.account_id })
        axios.get('http://localhost:5000/order/customer/' + params.account_id).then(res => {
            //console.log(res)
            if (res.data.status === 1) {
                this.setState({ r: res.data.data })
                console.log(res.data.message)
                console.log(res.data.data)
            }
            else {
                console.log(res.data.message)
            }
        });
    }

    takeOrderId = event => { event.preventDefault(); this.setState({ selectedOrder: event.target.value }); console.log(this.state.selectedOrder); }

    seeOrderDetails = event => {
        this.setState({redirectToOrderDetails: true})
    }

    render() {

        if (this.state.redirectToOrderDetails === true){
            return <Redirect push to={`/orderdetails/accountid=${this.state.account_id}/orderid=${this.state.selectedOrder}`} />
        }

        this.state.data = {
            columns: this.state.c,
            rows: this.state.r
        };
        return (
            <div>
                <Navbar />
                <Container>
                    <MDBDataTable
                        striped
                        bordered
                        small
                        data={this.state.data}
                    />
                    <br /> <br />
                    <div class="input-group mb-3" className="mt-4" style={{ float: 'right' }}>
                        <div class="input-group-prepend">
                            <Input className="mr-5" style={{ width: '350px' }} type="text" placeholder="Enter the id of the order..." onChange={this.takeOrderId} />
                            <Button className="btn-lg btn-dark mr-5 ml-25" onClick={this.seeOrderDetails}>Order Details</Button>
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default OrderTracking;