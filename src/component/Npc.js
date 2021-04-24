import React, { Component } from "react";
import { connect } from "react-redux";

class Npc extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -20px}
      25% {top: 0}
      50% {top: -20px}
      75% {top: 0}
      100% {top: 0}
  }`;

    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div className="speech">
          <img
            style={{
              width: 100,
              height: 100,
              position: "relative",
              animation: `randomItem${Date.now()} 0.1s`,
            }}
            src={this.props.npc.image}
            alt={this.props.npc.image}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/playerComputer.png"
          alt="npc"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    npc: state.RpsReducer.npc,
  };
};

export default connect(mapStateToProps)(Npc);
