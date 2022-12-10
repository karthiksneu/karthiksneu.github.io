import React, { useState, useEffect } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { login } from '../../actions/userAction'
import { Row, Col } from 'react-bootstrap'


const LoginScreen = ({ location, history }) => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')


      const dispatch = useDispatch()
      const userLogin = useSelector(state => state.userLogin)
      const { loading, error, userInfo } = userLogin

      const redirect = location.search ? location.search.split('=')[1] : '/'

      useEffect(() => {
            if (userInfo) {
                  history.push(redirect)
            }

      }, [history, userInfo, redirect])
     
      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(login(email, password))
      }


      return (
            <>
                  <div className="maincontainer">
                        <div class="container-fluid">
                              <div class="row no-gutter">

                                    <div class="col-md-6 d-none d-md-flex bg-image"></div>

                                    <div class="col-md-6 bg-light">
                                          <div class="login d-flex align-items-center py-5">

                                                <div class="container">
                                                      <div class="row">
                                                            <div class="col-lg-10 col-xl-7 mx-auto">
                                                                  <h2 class="display-4">Welcome!</h2>
                                                                  {error && <Message variant='danger'>{error}</Message>}
                                                                  {loading && <Loader />}                                                                  
                                                                  <form onSubmit={submitHandler} >
                                                                        <div class="input-field">
                                                                              <input className='email' id="inputEmail" type="email" placeholder="Email ID*" required="" autofocus="" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                                        </div>
                                                                        <div class="input-field">
                                                                              <input className='password' id="inputPassword" type="password" placeholder="Password*" required=""  value={password} onChange={(e) => setPassword(e.target.value)} />
                                                                        </div>
                                                                        <button type="submit" class="btn btn-dark btn-inline text-uppercase rounded-pill shadow-sm">Login</button>
                                                                        <div class="text-center d-flex justify-content-between mt-4"><p>New User? <a href="/signup" class=" text-muted">
                                                                              <u>Register Here</u></a></p></div>
                                                                  </form>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                 
            </>
      )
}

export default LoginScreen