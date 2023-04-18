import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Profile from "components/profile/Profile";
import user from "data/user.json";
import data from "data/data.json";
import friends from "data/friends.json";
import transactions from "data/transactions.json";
import { AppCont } from "./App.styled";
import Statistics from "components/statistics/Statistics";
import FriendList from "./components/friendsList/FriendList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";

function App() {
  return (
    <AppCont>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
      <GlobalStyle />
    </AppCont>
  );
}

export default App;
