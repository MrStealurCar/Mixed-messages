import "./App.css";

const people = [
  "Elvis Presley",
  "Jimmy Buffett",
  "Johnny Depp",
  "Kevin James",
  "Babe Ruth",
  "Kobe Bryant",
  "Shaquille O'Neal",
  "Tony Stark",
];
const activities = [
  "watched a movie ",
  "started a podcast ",
  "walked a dog ",
  "learned React ",
  "went for a run ",
  "pet a cat ",
  "kissed a frog ",
  "read a book ",
];
const places = [
  " the beach",
  " Disney World",
  " the pizzaria",
  " the golf course",
  " a restaurant",
  " your mom's house",
  " the bowling alley",
  " the park",
];
const finalMsg = [];
const randomPerson = Math.floor(Math.random() * people.length);
const randomAcivity = Math.floor(Math.random() * activities.length);
const randomPlace = Math.floor(Math.random() * places.length);
finalMsg.push(people[randomPerson]);
finalMsg.push(" " + activities[randomAcivity]);
finalMsg.push("at " + places[randomPlace]);
function App() {
  return (
    <div className="App">
      <header className="App-header">{finalMsg}</header>
    </div>
  );
}

export default App;
