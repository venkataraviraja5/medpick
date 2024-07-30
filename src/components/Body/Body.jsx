import React from 'react'
import "./Body.css"

const Body = () => {

    const arr = [{asset:"Ge ECG MAchine",code:"AG 7645698",department:"Blood Center",date:"03/08/2034",downtime:"10hr:24m:32s",status:false},
        {asset:"Ge ECG MAchine",code:"AG 7645698",department:"Blood Center",date:"03/08/2034",downtime:"10hr:24m:32s",status:true},
        {asset:"Ge ECG MAchine",code:"AG 7645698",department:"Blood Center",date:"03/08/2034",downtime:"10hr:24m:32s",status:false},
        {asset:"Ge ECG MAchine",code:"AG 7645698",department:"Blood Center",date:"03/08/2034",downtime:"10hr:24m:32s",status:true},
        {asset:"Ge ECG MAchine",code:"AG 7645698",department:"Blood Center",date:"03/08/2034",downtime:"10hr:24m:32s",status:false},
        {asset:"Ge ECG MAchine",code:"AG 7645698",department:"Blood Center",date:"03/08/2034",downtime:"10hr:24m:32s",status:false},
        {asset:"Ge ECG MAchine",code:"AG 7645698",department:"Blood Center",date:"03/08/2034",downtime:"10hr:24m:32s",status:false},

    ]
  return (
    <div >
      <div className='bodyTop'>
        <div className='bodyTop-left'>
            <img src='/search.png' className='searchimage' />
          <input type='text' placeholder='search' className='search-box'/>
          <select className='selectoption'><option>September</option></select>
          <select  className='selectoption2'><option>Aug 5</option></select>
          <img src='/images.png' className='images'/>
        </div>
        <div className='bodyTop-right'>
          <div className='inner-box'>
            <div>
                Add incident
            </div>
            <div>
                <img src='/plus.png' className='plus-img'/>
            </div>
          </div>
        </div>
      </div>
      <div className='main-body'>
        <table>
            <thead className='table-head'>
                <tr>Asset</tr>
                <tr>Code</tr>
                <tr>Department</tr>
                <tr>Date & Time</tr>
                <tr>Down Time</tr>
                <tr>Status</tr>
                <tr>Report</tr>
            </thead>
            <hr></hr>
            <tbody>
                {arr.map((value,index) => (
                    <tr key={index} className='table-row-data'>
                        <td>{value.asset}</td>
                        <td>{value.code}</td>
                        <td>{value.department}</td>
                        <td>{value.date}</td>
                        <td>{value.downtime}</td>
                        <td>{value.status ? <p className='open-btn'>Open</p> : <p style={{marginTop:"-1px"}}>Cleared</p>}</td>
                        <td>{value.status ? null :<img src='/download.png' className='download'/> }</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Body
