import ActionTypes from "../actionTypes";

/* 
! reducer
* state'in nasıl değişeceğine karar verir.
* reducer normal bir fonksiyondur.
* ve bu fonksiyon iki parametre alır
* > state: reducer'da tutulan verilerin son durumunu
* > action: verilerin nasıl değişeceğini ifade eden nesne 

*useReducer'dan farklı olarak initialStat'i state parametresine varsayılan değer olarak veririz.
*/

const initialState = {
  todos: [],
  isDarkMode: true,
  x: "",
  y: "",
};

const todoReducer = (state = initialState, action) => {
  //aksiyonun type'ına göre gwewkli güncellemeyi yap

  switch (action.type) {
    //eğer ADD aksiyonu çalışırsa:

    case ActionTypes.ADD:
      return {
        ...state, // state'deki diğer değerleri muhafaza et
        todos: state.todos.concat(action.payload), //-todusu güncelle
      };

    //eğer delete aksiyonu çalışırsa
    case ActionTypes.DELETE:
      //diziden silinecek elemanı kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      //reducer'da tutulan todos değerini
      return { ...state, todos: filtred };

    //eğer  UPDATE aksiyonu çalışırsa
    case ActionTypes.UPDATE:
      // -todos dizisindeki elemanı güncelle
      const updatedArr = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      //reducar'da tutulan todosu güncelle
      return { ...state, todos: updatedArr };

    // eğer SET aksiyonu çalışırsa
    case ActionTypes.SET:
      return {
        ...state,
        todos: action.payload,
      };
    //eğer gelen aksiyon yukarıdakilerden biri değilse varolan state'i koru
    default:
      return state;
  }
};

export default todoReducer;
