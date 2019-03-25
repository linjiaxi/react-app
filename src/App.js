import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from './counter.redux'

const mapStateToProps = state => ({
  num: state
})

const mapDispatchToProps = ({
  add, minus, asyncAdd
})

class App extends Component {
  render() {
    return (
      <div>
        <p>{this.props.num}</p>
        <div>
          <button onClick={this.props.add} >+</button>
          <button onClick={this.props.minus} >-</button>
          <button onClick={this.props.asyncAdd} >延迟加1</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
