import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="speech">
          <img
            style={{ width: 100, height: 100 }}
            src={this.props.arrayBet.find(item => item.bet === true).image}
            alt= {this.props.arrayBet.find(item => item.bet === true).image}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/player.png"
          alt="player"
        />
        <div className="row">
          {this.props.arrayBet.map((item, index) => {

            //set value bet add border for value selected
            let border = {};
            if(item.bet) {
                border = {border:'5px solid orange'};
            }

            return (
              <div className="col-4" key={index}>
                <button style={border} className="btnItem" onClick={() => {
                    {this.props.bet(item.id)}
                }}>
                  <img src={item.image} alt={item.image} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrayBet: state.RpsReducer.arrayBet,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        bet: (id) => {
            dispatch({
                type:'SELECT_ITEM',
                id
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
