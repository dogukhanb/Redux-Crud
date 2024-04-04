// Projede kullanılan aksiyon tipleri string şeklinde tanımlandığından dikkat dağınıklığı sonucu oluşabilecek ve tespit etmesi zaman alacağından hatalarının önüne geçmek için tipleri bir nesne içerisinde tanımlarız.

//Nesne şeklinde tanımladığımız için artık oto tamamlama özelliği sayesinde harf yazım hatalarınıdan büyük oranda kurtuluyoruz.

const ActionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  SET: "SET",
};

export default ActionTypes;
