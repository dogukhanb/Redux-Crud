/*
! Store  Oluşturma
* 1. redux kütüphanesinden 'createStore' methodu import edilir.
* 2. store içerisinde tutulacak olan her bir veri için reducerlar oluşturulur.
* 3. oluşturulan reducerlar 'combineReducers' ile birleştirilir.
* 4. store'a oluşan birleştirilen reducerlar tanıtılır.
*/

import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import todoReducer from "./reducers/todoReducer";

// Birden fazla reducer carsa bunları birleştiririz.

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

//store oluşturulur

const store = createStore(rootReducer);

// projeyi tanıtma için export ediyoruz

export default store;
