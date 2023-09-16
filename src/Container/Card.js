import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import filter_name from '../Reducer/filterreducer';
import { addorder, resetTableNumber, resetfilter } from '../Action';

const Card = ({filter_name,addorder,table_number}) => {
    const [data,setData]=useState([]);
    const [clonedata,setClonedata]=useState([]);
    useEffect(()=>{
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(
            response=>response.json()
        ).then(
            json=>{
                setData(json.items);
                setClonedata(json.items);
            }
        )

    },[])

    useEffect(()=>{
        if(filter_name !="All Items"){
            let specific=clonedata.filter(item=>item.category===filter_name);
            setData(specific);
        }
        else{
            setData(clonedata);
        }
    },[ filter_name])
    const Handler=async(id,name,prize,url)=>{
        if(table_number!= null){
            await addorder(id,name,prize,table_number,url)
            await resetTableNumber
            await resetfilter
            alert("order placed successfully");

        }
        else{
            alert('please select the table number');
        }
    }
  return (
    <div>
      <center>
        {data.length >0?
    <div className='container'>
        <div className='row'>
            {data.map((item)=>(
                <div className="col-md-4 mt-3" style={{padding:'5px'}} key={item.id}>
                   <div className="card" style={{width:'18rem',padding:'3px'}}>
                   <img src={item.url} className='card-img-top' />
                    <div className="card-body">
                        <div className="card-title">{item.name}</div>
                        <div className="card-text">Rs.{item.prize}</div>
                        <button className='btn btn-primary' onClick={()=>Handler(item.id,item.name,item.prize,item.url)}>Order</button>
                   </div>
                        
                    </div>
                </div>
            ))}

        </div>

    </div>    
    :
    <div className="spinner-border text-primary">

    </div>
    }
      </center>
    </div>
  )
}
const mapStateToProps=(state)=>({
    filter_name:state.filterreducer.filter_name,
    table_number:state.tablereducer.table_number
})

export default connect(mapStateToProps,{addorder})(Card);
