import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transations from "./data/transations.json";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import Friendlist from "./components/Friendlist/Friendlist";
import Transaction from "./components/Transaction/Transaction";
function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
      <Friendlist friends={friends} />
      <Transaction transations={transations} />
    </div>
  );
}

export default App;
