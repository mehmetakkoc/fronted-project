const data = [
  {
    id: 0,
    img: "https://picsum.photos/200/300",
    name: "bahtiyar",
    text: "Just add your desired image size (width & height) after our URL, and you'll get a random image.",
  },
  {
    id: 1,
    img: "https://picsum.photos/200/300",
    name: "bahtiyar1",
    text: " bir Just add your desired image size (width & height) after our URL, and you'll get a random image.",
  },
  {
    id: 2,
    img: "https://picsum.photos/200/300",
    name: "bahtiyar2",
    text: " iki Just add your desired image size (width & height) after our URL, and you'll get a random image.",
  },
];

export const initialState = {
  loading: false,
  list: data,
  total: 0,
};

export const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_CONTACT":
      return state.list.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
