import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/usersxx")
      .then((res) => {
        console.log(res.data);
        // catchはerrorが発生した時に実行する部分
      })
      .catch((err) => console.log(err));
  };
  const onClickUsers1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data);
        // catchはerrorが発生した時に実行する部分
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUsers1}>id=1のuser</button>
    </div>
  );
}
