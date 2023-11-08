import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import "./changepassword.css";

const ChangePassword = ({ dispatch, props }) => {
  const [fieldslogin, setFieldsLogin] = useState({});
  const [errorslogin, setErrorsLogin] = useState({});

  const inputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFieldsLogin((prevState) => ({ ...prevState, [name]: value }));
    setErrorsLogin((prevState) => ({ ...prevState, [name]: '' }));
  };

  const history = useHistory();

  const changePassword = () => {

    if (handleValidationLogin()) {
      const data = {
        oldPassword: fieldslogin.oldPassword,
        password: fieldslogin.password,
        transactionPassword: fieldslogin.oldPassword,
      };
      dispatch(userActions.changePassword(data, history));
    }
  };

  const handleValidationLogin = () => {
    let errorslogin = {};
    let formIsValid = true;

    if (!fieldslogin.oldPassword || fieldslogin.oldPassword === '') {
      formIsValid = false;
      errorslogin.oldPassword = 'Old Password Cannot Be Blank.';
    }

    if (!fieldslogin.password || fieldslogin.password === '') {
      formIsValid = false;
      errorslogin.password = 'New Password Cannot Be Blank.';
    }
    // confirmPassword
    if (!fieldslogin["confirmPassword"] || fieldslogin["confirmPassword"] === "") {
      formIsValid = false;
      errorslogin["confirmPassword"] = "Confirm Password Cannot Be Blank";
    } else if (fieldslogin["password"] !== fieldslogin["confirmPassword"]) {
      formIsValid = false;
      errorslogin["confirmPassword"] = "Passwords and Confirm Password do not match";
    } else {
      errorslogin["confirmPassword"] = "";
    }

    setErrorsLogin(errorslogin);
    return formIsValid;
  };



  return (
    <>
      <div className=' w-full min-h-screen mainclass '>
     
        <div className='flex justify-center'>
          <div className='w-full'>
            <div className='w-full justify-center flex pt-[4rem] rounded-[4px]'>
              <div className='border-2 border-[#007bff] rounded-lg  lg:w-[650px] md:w-[600px] password-item sm:w-72'>
                <div className='flex justify-center items-center'>

                </div>
                <div className='px-4 space-y-2'>
                  <div className="form-group">
                    <input id="oldpassword"
                      className='w-full border-2 border-[#007bff]  p-1.5 focus:outline-none text-xs md:text-sm font-medium text-gray-400 rounded'
                      type="password"
                      name="oldPassword"
                      placeholder='Old Password'
                      value={fieldslogin.oldPassword}
                      onChange={inputChange}
                    />
                  </div>
                  {errorslogin && errorslogin["oldPassword"] ?
                    <div className="flex justify-center">
                      <div className="text-red-700 w-full ">
                        {errorslogin["oldPassword"]}
                      </div>
                    </div>
                    : null}

                  <div className="form-group">
                    <input className='w-full border-2 border-[#007bff]  p-1.5 focus:outline-none md:text-sm text-xs font-medium text-gray-400 rounded'
                      type="password"
                      name="password"
                      id="password"
                      placeholder='New Password'
                      value={fieldslogin.password}
                      onChange={inputChange}
                    />
                  </div>
                  {errorslogin && errorslogin["password"] ?
                    <div className="flex justify-center">
                      <div className="text-red-700 w-full ">
                        {errorslogin["password"]}
                      </div>
                    </div>
                    : null}

                  <div className="form-group ">
                    <input className='w-full border-2 border-[#007bff]  p-1.5 focus:outline-none text-xs md:text-sm font-medium text-gray-400 rounded'
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder='Retype Password'
                      value={fieldslogin.confirmPassword}
                      onChange={inputChange}
                    />
                  </div>
                  {errorslogin && errorslogin["confirmPassword"] ?
                    <div className="flex justify-center">
                      <div className="text-red-700 w-full ">
                        {errorslogin["confirmPassword"]}
                      </div>
                    </div>
                    : null}
                  <div className="form-group space-x-2 py-3">
                    <button onClick={changePassword} type="button" className="bg-[#5CB85C] w-full border-2 border-[#007bff] text-white text-lg uppercase font-bold px-4 py-1 rounded tracking-widest">Submit</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='lg:col-span-4 col-span-0'></div>
        </div>
      </div>












      {/* <div className=' w-full min-h-screen mainclass '>
        <div className='flex space-x-1 p-1'>
          <Sidebar
            open={true}
            props={props}
            showSport={true}
          />
          <div className='grid grid-cols-12 pt-20'>
            <div className='lg:col-span-4 col-span-0 '></div>
            <div className='w-full lg:col-span-4 col-span-12'>
              <div className='w-full p-4 pt-8 rounded-[4px]'>
                <div className='border-2 border-[#007bff] rounded-lg lg:w-[450px] md:w-[550px] w-[300px]'>
                  <div className='flex justify-center items-center'>
                    <img src={treeexchcom} alt="" className="w-48" />
                  </div>
                  <div className='px-4 space-y-2'>
                    <div className="form-group">
                      <input id="oldpassword"
                        className='w-full border-2 border-[#007bff]  p-1.5 focus:outline-none text-xs md:text-sm font-medium text-gray-400 rounded'
                        type="password"
                        name="oldPassword"
                        placeholder='Old Password'
                        value={fieldslogin.oldPassword}
                        onChange={inputChange}
                      />
                    </div>
                    {errorslogin && errorslogin["oldPassword"] ?
                      <div className="flex justify-center">
                        <div className="text-red-700 w-full ">
                          {errorslogin["oldPassword"]}
                        </div>
                      </div>
                      : null}

                    <div className="form-group">
                      <input className='w-full border-2 border-[#007bff]  p-1.5 focus:outline-none md:text-sm text-xs font-medium text-gray-400 rounded'
                        type="password"
                        name="password"
                        id="password"
                        placeholder='New Password'
                        value={fieldslogin.password}
                        onChange={inputChange}
                      />
                    </div>
                    {errorslogin && errorslogin["password"] ?
                      <div className="flex justify-center">
                        <div className="text-red-700 w-full ">
                          {errorslogin["password"]}
                        </div>
                      </div>
                      : null}

                    <div className="form-group ">
                      <input className='w-full border-2 border-[#007bff]  p-1.5 focus:outline-none text-xs md:text-sm font-medium text-gray-400 rounded'
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder='Retype Password'
                        value={fieldslogin.confirmPassword}
                        onChange={inputChange}
                      />
                    </div>
                    {errorslogin && errorslogin["confirmPassword"] ?
                      <div className="flex justify-center">
                        <div className="text-red-700 w-full ">
                          {errorslogin["confirmPassword"]}
                        </div>
                      </div>
                      : null}
                    <div className="form-group space-x-2 py-3">
                      <button onClick={changePassword} type="button" className="bg-[#5CB85C] w-full border-2 border-[#007bff] text-white text-lg uppercase font-bold px-4 py-1 rounded tracking-widest">Submit</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className='lg:col-span-4 col-span-0'></div>
          </div>
        </div>
      </div> */}


    </>
  );
};

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}

export default withRouter(connect(mapStateToProps)(ChangePassword));