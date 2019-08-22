import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';

class Counter extends React.Component {
    //state = { count: 0 };

    increment = () => {
        // this.props.dispatch(increment());
        this.props.increment();
        // this.setState({
        //     count: this.state.count + 1
        // });
    }

    decrement = () => {
        // this.props.dispatch(decrement());
        this.props.decrement();
        // this.setState({
        //     count: this.state.count - 1
        // });
    }

    reset = () => {
        // this.props.dispatch(reset());
        this.props.reset();
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <h3>{this.props.count}</h3>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`. 

const mapDispatchToProps = {
    increment,
    decrement,
    reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
