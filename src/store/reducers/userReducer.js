const initialState = {
  users: [],
  isDarkMode: true,
  x: "",
  y: "",
};

const userReducer = (state = initialState, action) => {
  //aksiyonun type'ına göre gwewkli güncellemeyi yap
  switch (action.type) {
    case "EKLE":
      return state;

    case "ÇIKAR":
      return state;

    //eğer gelen aksiyon yukarıdakilerden biri değilse varolan state'i koru

    default:
      return state;
  }
};

export default userReducer;
