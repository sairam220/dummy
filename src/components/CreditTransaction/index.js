import { Component } from 'react';
import Sidebar from '../Sidebar';
import { Rings } from 'react-loader-spinner'
import MainNavbar from '../MainNavbar';
import LastThreeCard from '../LastThreeCard'
import Header from '../Header';

class CreditTransaction extends Component{

    state={allTransaction:[]}

componentDidMount(){
    this.getAlltransactions()
}
   
getAlltransactions=async()=>{
    const url=`https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=${30}&offset=${0}`
    const options={
        method:'GET',
        headers:{
            'x-hasura-admin-secret': 'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        }
    }
    const response=await fetch(url,options)
    const data=await response.json()

    const res=data.transactions.map(each=>({
        amount:each.amount,
        category:each.category,
        date:each.date,
        id:each.id,
        transactionName:each.transaction_name,
        type:each.type,
        userId:each.user_id
    }))

    const final=res.filter(each=>(each.type="credit"))

    this.setState({allTransaction:final})
    
      
}

renderLoadingView= () => (
    <div className="flex justify-center items-center ">
      <Rings color="#00BFFF" height={80} width={80} />
    </div>
  );


    render(){
       
        return(
            <div className='main-home-container'>
            {
                this.state.allTransaction.length===0?this.renderLoadingView()
                :<div className="home-container">
                <Sidebar/>
                <Header/>
                <div className='sidebar-container-11'>
                <MainNavbar/>
                <div className="credit-debit-container">
                <ul className="last-three-transaction-container">
                {
                    this.state.allTransaction.map(eachTransaction=>(
                        <LastThreeCard  transaction={eachTransaction} key={eachTransaction.id}/>
                    ))
                }
            </ul>
                 </div>
                    
            
            </div>
            </div>
            
    }
            </div>
            
        )
    }
}

export default CreditTransaction