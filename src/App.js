import "./styles.css";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";
import { useState } from "react";
export default function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]);

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (counter) => {
    console.log({ counter });
    const newCounters = [...counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value--;
    setCounters(newCounters);
  };

  const handleReset = () => {
    // const counters = counters.map((c) => {
    //   c.value = 0;
    //   return c;
    // });
    setCounters((counters) => counters.map((c) => ({ ...c, value: 0 })));
  };

  // const handleDelete = counterId => {
  //   console.log("event handler called", counterId);
  //   const counters = this.state.counters.filter(c => c.id !== counterId);
  //   this.setState({ counters });
  // };

  const handleDelete = (counterId) => {
    console.log(counterId);
    setCounters((counters) => counters.filter((c) => c.id !== counterId));
  };

  return (
    <div className="App">
      <Navbar count={counters.filter((item) => item.value > 0).length} />
      <Counters
        cartItemCount={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
        onDelete={handleDelete}
      />
    </div>
  );
}
