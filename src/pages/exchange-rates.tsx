import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'antd';
import Spinner from '../components/spinner/spinner';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators,State } from '../state';

const ExchangeRates = () => {
 const [base, setBase] = useState('');
 const dispatch=useDispatch();
 const {getRatesByBaseAction}=bindActionCreators(actionCreators,dispatch);
 const rateList=useSelector((state:State)=>state.rateList).baseRateList;
 const loading=useSelector((state:State)=>state.rateList).loading;

  useEffect(() => {
    if(rateList.length===0) getRatesByBaseAction("USD");
  },[])

  const columns = [
  {
    title: 'Name',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'Value',
    dataIndex: 'rate',
    key: 'rate',
  },

];
  return (
    <div className='container-fluid'>
      <div className='exchangeclass'>
      <label className='labelclass'> Select  </label>
      <select value={base} 
        className="selectclass"
        onChange={(e) => {
          const value = e.target.value;
          setBase(value);
          getRatesByBaseAction(value);
        }}>
           {rateList.map((d) => (
          <option value={d.symbol} key={d.symbol}>
            {d.symbol}
          </option>
        ))}
      </select>
      <div className="tablestyle">
       { loading ? (
                    <Spinner />
                     ) : (
                    rateList &&
                     (
                 <Table columns={columns} dataSource={rateList}  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5','10','20','50'] }} />
                     ))}

      </div>
      </div>
    </div>
  )
}
export default ExchangeRates; 