import React, { Component } from 'react'
import logo from '../../logo.svg'
import { Link, Redirect } from 'react-router-dom'


class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

            search: "",
            redirectTo: false
        }
    }

    changeSearch = event => { event.preventDefault(); this.setState({ search: event.target.value }); console.log(this.state.search); }


    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link className="navbar-brand text-white ml-5 " to="/" >FlowerGarden   &nbsp;
                    <img src={logo} alt="logo" style={{ width: '35px' }} />
                </Link>

                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span >
                        <i className="fas fa-bars" style={{ color: '#fff' }} />
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="form-inline ml-auto">
                        <input className="form-control mr-sm-2 ms-5" type="search" placeholder="Search" aria-label="Search" onChange={this.changeSearch} />
                        <Link to={"/customer/accountid=" + this.props.account_id +"/districtid="+ this.props.district_id + "/" + this.state.search }>
                            <button className="btn btn-outline-primary my-2 my-sm-0 " type="submit" disabled={this.state.search === ""} >Search</button>
                        </Link>
                    </form>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to={"/notification-list/custaccountid=" + this.props.account_id}>Notifications&nbsp;<i class="fas fa-bell"></i></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-white text-uppercase ml-5" to={"/selectDistrict/accountid=" + this.props.account_id}>Change Destination&nbsp; <i class="fas fa-home"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to={"/ordertracking/accountid=" + this.props.account_id}>Order Tracking&nbsp;<i class="fas fa-truck-moving"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to={{ pathname: "/profile" }}>My Account&nbsp;<i class="fas fa-user"></i></Link>
                        </li>
                    </ul>

                </div>

            </nav>
        );
    }
}



export default Navbar;