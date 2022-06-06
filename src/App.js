import { useEffect } from "react";
import "./styles.css";

export default function App() {
  const callApi = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    data = await data.json();
    console.log("api1");
    await callApi2();
  };

  const callApi2 = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    data = await data.json();
    console.log(data, "ap12");
  };

  useEffect(() => {
    const asyncFun = async () => {
      console.log("fetching started");
      callApi();
      console.log("fetching ended");
    };
    asyncFun();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
