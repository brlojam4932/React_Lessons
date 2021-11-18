import React from 'react';
import "bootswatch/dist/flatly/bootstrap.min.css";
import Home from './components/propImports/Home';
import Navbar from './components/propImports/Navbar';
import Person from './components/propImports/Person';
import Employees from './components/propImports/Employees';
import HooksPractice from './components/propImports/HooksPractice';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RandGenApp from './components/propImports/RandomGenerator';
import Forms from './components/propImports/Forms';
import FormSubmit from './components/propImports/FormsProj/FormSubmit';
import SignIn from './components/propImports/FormsProj/SignIn';
import PrePersonApp from './components/propImports/PrePersonApp';
import PreComponentApp from './components/propImports/PropTypes2';
import PopUps from './components/propImports/PopUps';
import MyUseEffect from './components/propImports/MyUseEffect';
import Pagination from './components/propImports/paginationFolder/Pagination';
import Posts from './components/propImports/PaginationTable/Posts';
import PostsExchange from './components/propImports/PaginationTable/PostsEx';
import ReactConf from './components/propImports/ReactConf';
import CustomHooks from './components/propImports/CustomHooks';
import Blogs from './components/propImports/Blogs/Blogs';
import Groceries from './components/propImports/ListsKeys/Groceries';
// simple react snippets: sfc - A stateless funcitonal component

//Prop Types
//https://youtu.be/7_67nxgw5W4


export default function App(props) {
  const ben = {
    name: "Ben Lopez Reyes",
    age: 54,
    email: "rag4@gmail.com",
    isMarried: false,
    children: []
  };


  const jackDavis = {
    name: "Jack Davis",
    age: 26,
    emai: "jack@gmail.com",
    isMarried: true,
    children: ["Jamie", "Jessica"]
  }

  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/employees">
              <Employees />
            </Route>
            <Route path="/person">
              <div className='container'>
                <Person person={ben} />
                <Person person={jackDavis} />
              </div>
              <PrePersonApp />
              <PreComponentApp />
            </Route>
            <Route path="/hooksPractice">
              <br /><br />
              <CustomHooks />
              <br /><br />
              <ReactConf />
              <br /><br />
              <HooksPractice />
              <RandGenApp />
              <Forms />
              <br /><br />
              <MyUseEffect />
              <br /><br />
              <Pagination />
              <br /><br />
              <Posts />
              <br /><br />
              <PostsExchange />
              <br /><br />
              <Groceries />
              <br /><br />
              <Blogs />
              <br /><br />
            </Route>
            <Route path="/formsSubmit">
              <FormSubmit />
            </Route>
            <Route path="/signIn">
              <SignIn />
            </Route>
            <Route>
              <PopUps path='/popups' />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );


}

