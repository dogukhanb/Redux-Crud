import { useRef } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "../store/actionTypes";
import { updateTodo } from "../store/action/todoActions";
import api from "../utils/api";

const Modal = ({ close, todo }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const handleClick = () => {
    //1) inputtaki değeri al
    const newText = inputRef.current.value;
    //2) todo nesnesinin title değerini güncelle
    const updatedTodo = {
      ...todo,
      text: newText,
      created_at: new Date().toLocaleDateString(),
    };
    //3) api'a güncel veriyi kaydet
    api
      .put(`/todos/${todo.id}`, updatedTodo)

      //4) reducer'a elemanın güncelleneceğini haber ver
      .then(() => dispatch(updateTodo(updatedTodo)))
      .catch((err) => alert("Üzgünüz Bir Hata Oluştu."));
    //5) modalı kapat
    close();
  };
  return (
    <div className="modal bg-black d-block text-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title">Todo'yu GÜncelle</h5>
          </div>
          <div className="modal-body m-2">
            <label>Yeni Başlık</label>
            <input
              ref={inputRef}
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary"
            >
              Kaydet
            </button>
            <button onClick={close} type="button" className="btn btn-secondary">
              İptal Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
