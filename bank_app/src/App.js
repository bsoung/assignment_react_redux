import React, { Component } from 'react';
import './App.css';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AccountList from './components/accountList';
import AccountForm from './components/accountForm';

class App extends Component {
  componentDidMount() {
    this.props.actions.selectAccount(2);

    this.props.actions.depositToAccount(1, 100000000);

    this.props.actions.withdrawFromAccount(3, 50);

    this.props.actions.transfer({ from: 1, to: 3, amount: 500 });
  }

  onSubmitDeposit = e => {
    e.preventDefault();
    let number = prompt('Enter deposit');
    number = Number(number);

    this.props.actions.depositToAccount(Number(e.target.id.value), number);
  };

  onSubmitWithdraw = e => {
    e.preventDefault();

    let number = prompt('Withdraw amount');
    number = Number(number);

    this.props.actions.withdrawFromAccount(Number(e.target.id.value), number);
  };

  onSubmitTransfer = e => {
    e.preventDefault();

    this.props.actions.transfer({
      from: Number(e.target.accountFrom.value),
      to: Number(e.target.accountTo.value),
      amount: Number(e.target.amount.value)
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bank Dashboard</h2>
        </div>
        <AccountForm
          accounts={this.props.accounts}
          onSubmitTransfer={this.onSubmitTransfer}
        />
        <AccountList
          accounts={this.props.accounts}
          onSubmitDeposit={this.onSubmitDeposit}
          onSubmitWithdraw={this.onSubmitWithdraw}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    transactions: state.transactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
