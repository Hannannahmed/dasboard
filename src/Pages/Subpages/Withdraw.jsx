import React from 'react'
import WithdrawTable from './WithdrawTable'

const Withdraw = () => {
  return (
    <>
   <div className="container">
        <h4 className='monthly_report'>Withdraw Form</h4>
        <div className="underline_div"></div>
    <div className="row p-3">
        <div className="col-md-6 mt-5">
            <label htmlFor="" className='mb-2 w'>Account Number</label>
            <input type="text" className='form-control' placeholder='Account Number' />
        </div>
        <div className="col-md-6 mt-5">
        <label htmlFor="" className='mb-2 label_class'>Withdraw Amount</label>
            <input type="text" className='form-control' placeholder='Withdraw Account' />
        </div>
        <div className="col-md-6 mt-5">
        <label htmlFor="" className='mb-2 label_class'>CVC</label>
            <input type="text" className='form-control' placeholder='CVC'/>
        </div>
        <div className="col-md-12 text-center">
            <button className='btn_submit '>Submit</button>
        </div>
        <div className="col-md-12 mt-4 ">
        <h4 className='monthly_report'>Withdraw Table</h4>
        <div className="underline_div"></div>
        <div className='mt-4'>
            <WithdrawTable />   
            </div>
        </div>
    </div>
   </div>
    
    </>
  )
}

export default Withdraw