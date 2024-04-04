//! Aksiyon Nesnelerini Oluşturan Fonksiyon
// Payload değeri dinamik olacağı için fonksiyonları tercih ettik
// ve payload değerini parametre olarak aldık
//bu fonksiyonlar çağrıldığında bir aksiyon nesnesi döndürüyor
//bileşen içerisindeki dispatch alanındaki kodları kısaltıp daha okunabilir yapıyoruz

import ActionTypes from "../actionTypes";

export const addTodo = (payload) => {
  return {
    type: ActionTypes.ADD,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: ActionTypes.DELETE,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: ActionTypes.UPDATE,
    payload,
  };
};

export const setTodos = (payload) => {
  return {
    type: ActionTypes.SET,
    payload,
  };
};
