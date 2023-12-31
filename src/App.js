import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Transaction from './components/Transaction';
import Home from './components/Home';
import DebitTransaction from './components/DebitTransaction'
import CreditTransaction from './components/CreditTransaction'
import AddTransactionForm from './components/AddTransaction'
import LoginContext from './Context'
import { Component } from 'react';

class App extends Component {

  state={userId:'',adminUserOrNot:false}

  setUserId=(userLoginId)=>{
    this.setState({userId:userLoginId})

  }

  setAdminUserOrNot=(booleanValue)=>{
        this.setState({adminUserOrNot:booleanValue})
        console.log(this.state.adminUserOrNot)
  }

  render(){
    const {userId,adminUserOrNot}=this.state
  
  return (
    <LoginContext.Provider value={{userId,adminUserOrNot,setUserId:this.setUserId,setAdminUserOrNot:this.setAdminUserOrNot}}>
           <Router>
      
      <Switch>
        <Route exact path="/login" component={Login}/>
         
              
              <Route exact path='/' component={Login}/>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/all-transactions' component={Transaction}/>
              <Route exact path='/debit' component={DebitTransaction}/>
              <Route exact path='/credit' component={CreditTransaction}/>
              <Route exact path='/add-transaction' component={AddTransactionForm}/>
             <Route exact path="/profile" component={Profile}/>
              
               
          
      </Switch>
    
  </Router>
    </LoginContext.Provider>

    
  );
}
}

export default App;
