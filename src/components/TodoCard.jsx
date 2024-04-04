import Modal from "../components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "../store/actionTypes";
import { deleteTodo } from "../store/action/todoActions";
import { updateTodo } from "../store/action/todoActions";
import api from "../utils/api";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // Silme aksiyonunu reducer'a ilet
  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(deleteTodo(todo.id)))
      .catch((err) => alert("Üzgünüz bir hata oluştu."));
    dispatch(deleteTodo(todo.id));
  };

  // Tamamla(is_done) aksiyonunu reducer'a ilet
  const toggleIsDone = () => {
    // is_done değeri mevcut değerin tersi olan yeni nesne oluştur.
    const updated = { ...todo, is_done: !todo.is_done };
    api
      .put(`/todos/${todo.id}`, updated)
      .then(() => dispatch(updateTodo(updated)))
      .catch((err) => alert("Üzgünüz Bir Hata Oluştu."));
    // Store'u güncelleneceğini reducer'a haber ver
    dispatch(updateTodo(updated));
  };

  return (
    <div className="border shadow-lg p-4 my-4">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
      <p>{todo.created_at}</p>
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Düzenle
      </button>
      <button onClick={toggleIsDone} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamla"}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
