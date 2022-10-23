const initialState = [false, false, false, false, false];

const reducer = (state, action) => {
  switch (action) {
    case "state-1":
      return [...state, (state[0] = !state[0])];
    case "state-2":
      return [...state, (state[1] = !state[1])];
    case "state-3":
      return [...state, (state[2] = !state[2])];
    case "state-4":
      return [...state, (state[3] = !state[3])];
    case "state-5":
      return [...state, (state[4] = !state[4])];
  }
};

export { initialState, reducer };
