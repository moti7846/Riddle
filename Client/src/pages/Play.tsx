import { useEffect, useRef, useState } from "react";
import { Form } from "react-router";

export default function Play() {
  // let riddle = { question: "Loading...", answer: "" };
  // let answer = "";
  const [index, setIndex] = useState(1);
  const [riddle, setRiddle] = useState(null);
  const [isRiddle, setIsRiddle] = useState(true);

  function game(event) {
    event.preventDefault();
    const form = event.target;
    const answer = form.elements[0].value;
    if (answer == riddle[index].correctAnswer) {
      setIndex(index + 1);
      if (index + 1 < riddle.length) {
        setIndex(index + 1);
        form.reset();
      } else {
        setIsRiddle(false);
      }
    } else {
      alert("wrong answer, try again");
    }
  }


  useEffect(() => {
    const fetchRiddle = async () => {
      const response = await fetch("http://localhost:3200/riddle");
      if (response.status !== 200) (<p>server Error</p>);
      const temp = await response.json()
      console.log(temp)
      setRiddle(temp);
    };
    fetchRiddle();
  }, []);
  return (
    <>
      {isRiddle && (
        <form onSubmit={game}>
          <h2>{riddle ? riddle[index].name : "Loading..."}</h2>
          <label htmlFor="answer">{riddle ? riddle[index].taskDescription : "Loading..."}</label>
          <input type="text" id="answer" />
          <button type="submit">submit</button>
        </form>
      )}
      {!isRiddle && <div>game over</div>}
    </>
  );
}


