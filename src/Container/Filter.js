import React,{useState} from 'react';
import { connect } from 'react-redux';
import { setfilter,resetfilter } from '../Action';

const Filter = ({setfilter,resetfilter,filter_name}) => {
    const prod=["All items", "Rice items","cold drinks","pizza","Hot drinks"];
    const [filter,setFilter]=useState("All items");

  return (
    <div className='mt-2'>
        <center>
          <span className='h4 m-2'>Filter</span>  
          <select name="filter" className='p-1' onChange={(e)=>setfilter(e.target.value)} >
            {prod.map((item,index)=>(
                <option value={item} key={index}>{item}</option>
            ))}

          </select>
        </center>
      
    </div>
  )
}
const mapStateToProps=(state)=>({
  filter_name:state.filterreducer.filter_name
})

export default connect(mapStateToProps,{setfilter,resetfilter})(Filter);
