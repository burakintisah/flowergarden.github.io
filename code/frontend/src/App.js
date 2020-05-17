import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  // getAccounts = _ => {
  //   axios.get('/login')
  //     .then((res) => {
  //       console.log(res.data);
  //       this.setState({ accounts: res.data.accounts });
  //     })
  //     .catch(error => console.log(error));
  // }

  // componentDidMount() {
  //   this.getAccounts();

  // }



  //showAccounts = account => <div key={account.idAccount}> {account.name}</div>
  handleSubmit = event => {
    event.preventDefault();
    // var data = {
    //   province_id:1
    // }
    // axios.post('/district', data)
    //   .then(res => {
    //     console.log(res);
    //   })
    this.setState({ account_id: 3 })
    axios.get('http://localhost:5000/arrangement/seller/'+this.state.account_id).then(res => {
      if (res.data.status === 1) {
        this.setState({ r: res.data.data })
        console.log(res.data)
      }

    });
  }

  changeEmail = event => {
    event.preventDefault();
    this.setState({ email: event.target.value });
  }

  changePassword = event => {
    event.preventDefault();
    this.setState({ password: event.target.value });
  }


  render() {
    // const { accounts } = this.state;
    // return (
    //   <div className="App">
    //     {accounts.map(this.showAccounts)}

    //   </div>
    // );
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input value={this.state.email} onChange={this.changeEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input onChange={this.changePassword} type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
