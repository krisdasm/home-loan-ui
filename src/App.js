import React, { useState } from "react";
import LoanAppService from "./service/service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const App = () => {

  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  const [loanId, setLoanId] = useState();


  const [values, setValues] = useState({
    title: 'Mr.', firstName: '', lastName: '', gender: 'Male', age: '', emailId: '', panNo: '', loanType: 'HL',
    loanAmount: '', existingLoan: false, remark: ''
  });
  const set = name => {
    return ({ target: { value } }) => {
      console.log(" name::" + name + " value::" + value)

      setValues(oldValues => ({ ...oldValues, [name]: value }));
    }
  };

  const handleCheck = event => {
    console.log(" name::" + event.target.name + " value::" + event.target.checked)
    setValues(oldValues => ({ ...oldValues, [event.target.name]: event.target.checked }));
    console.log("values", JSON.stringify(values))
  }

  const handleSubmit = () => {

    console.log("values", JSON.stringify(values))
    wait(10000);
    LoanAppService.applyLoan(values)
      .then(response => {
        console.log(response.data);
        setLoanId(response.data._id);
      })
      .catch(e => {
        console.log(e);
      });


  }
  return (
    <div className='container-fluid px-5 py-3 bg-primary text-white'>
      <h1 className='text-center'>Welcome to loan application</h1>
      <div className="col-xs-1 justify-content-center">
        <Link to='/search' className='text-white'>Click here - To know the application status</Link>
      </div>
      <div>
        <fieldset className="py-2">
          <label className="px-2">Title:</label>
          <select className="custom-select" value={values.title} onChange={set('title')}>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Prop.">Prop.</option>
          </select>
        </fieldset>
        <fieldset className="py-2">
          <label className="px-2">First name:</label>
          <input
            placeholder="First name"
            value={values.firstName} onChange={set('firstName')}
          />
        </fieldset>
        <fieldset className="py-2">
          <label className="px-2">Last name:</label>
          <input
            placeholder="Last name"
            value={values.lastName} onChange={set('lastName')}
          />
        </fieldset>
        <fieldset className="py-2">
          <label class="px-2">Gender:</label>
          <select class="custom-select" value={values.gender} onChange={set('gender')}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </fieldset>
        <fieldset className="py-2">
          <label className="px-2">Age:</label>
          <input
            placeholder="Age"
            size="5"
            value={values.age} onChange={set('age')}
          />
        </fieldset>
        <fieldset className="py-2">
          <label className="px-2">Email Id:</label>
          <input
            placeholder="Email Id"
            size="40"
            value={values.emailId} onChange={set('emailId')}
          />
        </fieldset>
        <fieldset className="py-2">
          <label className="px-2">PAN:</label>
          <input
            placeholder="PAN"
            size="30"
            value={values.panNo} onChange={set('panNo')}
          />
        </fieldset>
        <fieldset className="py-2">
          <label className="px-2">Loan type:</label>
          <select className="custom-select" value={values.loanType} onChange={set('loanType')}>
            <option value="HL">Home loan</option>
            <option value="PL">Personal loan</option>
            <option value="BL">Business loan</option>
          </select>
        </fieldset>
        <fieldset className="py-2">
          <label className="px-2">Loan amount:</label>
          <input
            placeholder="Loan amount"
            size="30"
            value={values.loanAmount} onChange={set('loanAmount')}
          />
        </fieldset>
        <fieldset className="py-2">
          <label className="px-2">Existing loan?:</label>
          <input
            type="checkbox"
            name='existingLoan'
            checked={values.existingLoan} onChange={e => handleCheck(e)}
          />
        </fieldset>
        <fieldset className="py-2">
          <label className="px-2">Remark:</label>
          <textarea className="mt-2"
            placeholder="Remark if any"
            value={values.remark} onChange={set('remark')}
          />
        </fieldset>
        <button onClick={handleSubmit} className="btn btn-secondary px-2" type="submit">Submit</button>
      </div >
      {
        loanId ? (<div><h1>Application id:: {loanId}</h1></div>) : (<div></div>)
      }

    </div >
  );
}

export default App;
