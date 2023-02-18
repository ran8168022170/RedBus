export const getData = (source, destination, date, setBusList) => {
  fetch(
    `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}&date=${date}`
  )
    .then((res) => res.json())
    .then((data) => setBusList(data))
    .catch((error) => {
      console.log("error: " + error);
    });
};
