import React, { Component } from "react";
import Npc from "./Npc";
import Player from "./Player";
import Result from "./Result";
import "./Rps.css";
import { connect } from "react-redux";

class Rps extends Component {
  render() {
    return (
      <div className="gameRps">
        <div className="row text-center mt-4">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4 mt-5">
            <Result />
            <button
              className="btn btn-success p-2 display-4 mt-5"
              onClick={() => {
                {
                  this.props.playGame();
                }
              }}
            >
              Play game
            </button>
          </div>
          <div className="col-4">
            <Npc />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      // function loop
      let randomNpcItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count > 10) {
          clearInterval(randomNpcItem) //stop function Interval()
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(Rps);
