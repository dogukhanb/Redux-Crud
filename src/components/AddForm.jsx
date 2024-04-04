import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/action/todoActions";
import api from "../utils/api";
import { toast } from "react-toastify";

const AddForm = () => {
  //bu bileşen içerisinde dispatch methodunu kullanmamızı sağlar.
  const dispatch = useDispatch();
  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();
    // store'a kaydedilecek olan veriyi hazırla
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString("en"),
    };

    //veriyi api'a kaydet

    const promise = api
      .post("/todos", newTodo)
      //istek başarılı olursa veriyi store'a kaydet
      .then(() => dispatch(addTodo(newTodo)))
      //istek başarısız olursa
      .catch((err) => {
        throw new Error();
      });

    toast.promise(promise, {
      pending: "Yeni Todo Yükleniyor",
      success: "Todo Başarıyla eklendi",
      error: "Eklenirken bir Sorun Oluştu",
    });

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="örn: typescript projesi"
        type="text"
      />
      <button className="btn btn-warning">GÖNDER</button>
    </form>
  );
};

export default AddForm;
