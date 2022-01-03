import { useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import Qmark from "./assets/images/Questionmark.png";
import userImg from "./assets/images/download.png";

import Table from "./components/Table/table.jsx";
function App(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(props.users.filter(user => user.status !== undefined).length);
  }, [props.users]);
  
  return (
    <div className="App container-fluid ">
      <main className="container m-auto ">
        <div className="container pt-5">
          <div className="row">
            <p className="col-md-6 text-left">
              <img className="img-left" src={userImg} alt="loading"></img>
              Users
            </p>
            <div className="col-md-5 text-right">
              {users} Selected
              <img className="img-right" src={Qmark} alt="loading" />
            </div>
          </div>
        </div>
        <Table></Table>
      </main>
    </div>
  );
}
const matchStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(matchStateToProps)(App);
