import React, { Component } from 'react';
import {connect} from 'react-redux';


class Result extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.result}</div>
                <div className="display-4 text-success">Total wins: <span className="text-warning">{this.props.totalWin}</span></div>
                <div className="display-4 text-success">Total rounds: <span className="text-warning">{this.props.totalRound}</span></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.RpsReducer.result,
        totalWin: state.RpsReducer.totalWin,
        totalRound: state.RpsReducer.totalRound,
    }
}

export default connect(mapStateToProps)(Result)