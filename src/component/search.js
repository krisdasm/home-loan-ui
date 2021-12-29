import React, { useState } from "react";
import LoanAppService from "../service/service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Search = () => {
    const [loanData, setLoanData] = useState();
    const [searchId, setSearchId] = useState("");
    const onChangeSearchId = e => {
        const searchId = e.target.value;
        setSearchId(searchId);
    };

    const findById = () => {
        find(searchId)
    };

    const find = (query) => {
        LoanAppService.find(query)
            .then(response => {
                console.log(response.data);
                setLoanData(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div className='container-fluid px-5 py-3 bg-primary text-white'>
            <Link to='/loan' className='text-white'>{'<Back'}</Link>
            <h1 className='text-center'>Welcome to loan application</h1>
            <div className="input-group my-3">
                <input
                    size={25}
                    placeholder="Loan id"
                    value={searchId}
                    name="searchId"
                    onChange={onChangeSearchId}
                />
                <div className="input-group-append px-2">
                    <button onClick={findById} className="btn btn-success">
                        Submit
                    </button>
                </div>
            </div>
            {
                loanData ? (<div class="container mt-3">
                    <h2>Loan Application Status</h2>
                    <table className="table table-bordered text-white">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Submit Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{loanData.firstName}</td>
                                <td>{loanData.lastName}</td>
                                <td>{loanData.emailId}</td>
                                <td>{loanData.status}</td>
                                <td>{loanData.date}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                ) : (<div></div>)
            }
        </div >
    );
}

export default Search;
