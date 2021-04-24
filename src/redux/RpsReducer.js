const stateDefault = {
  arrayBet: [
    {
      id: "keo",
      image: "./img/keo.png",
      bet: false,
    },
    {
      id: "bua",
      image: "./img/bua.png",
      bet: true,
    },
    {
      id: "bao",
      image: "./img/bao.png",
      bet: false,
    },
  ],
  result: "Let's play",
  totalWin: 0,
  totalRound: 0,
  npc: {
    id: "keo",
    image: "./img/keo.png",
  },
};

const RpsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SELECT_ITEM": {
      let arrayUpdate = [...state.arrayBet];
      arrayUpdate = arrayUpdate.map((item, index) => {
        if (item.id === action.id) {
          return { ...item, bet: true };
        }
        return { ...item, bet: false };
      });
      state.arrayBet = arrayUpdate;
      return { ...state };
    }

    case "RANDOM": {
      let randomNum = Math.floor(Math.random() * 3);
      let randomItem = state.arrayBet[randomNum];
      state.npc = randomItem;
      return {...state}
    }

    case "END_GAME": {
      let player = state.arrayBet.find((item) => item.bet === true);
      let npc = state.npc;
      switch (player.id) {
        case "keo":
          if (npc.id === "keo") {
            state.result = "Draw";
          } else if (npc.id === "bua") {
            state.result = "Lose";
          } else {
            state.totalWin += 1;
            state.result = "Win";
          }
          break;
        case "bua":
          if (npc.id === "keo") {
            state.totalWin += 1;
            state.result = "Win";
          } else if (npc.id === "bua") {
            state.result = "Draw";
          } else {
            state.result = "Lose";
          }
          break;
        case "bao":
          if (npc.id === "keo") {
            state.result = "Lose";
          } else if (npc.id === "bua") {
            state.totalWin += 1;
            state.result = "Win";
          } else {
            state.result = "Draw";
          }
          break;
        default:
          state.totalWin += 1;
          state.result = "Win";
          break;
      }
      state.totalRound += 1;

      return { ...state };
    }

    default:
      return { ...state };
  }
  
};

export default RpsReducer;
