import React, { Component } from 'react';
import Icon from './Icon'

class Form extends Component {
  render() {
    return (
      <div>
        <div className="mx-2">
          <button className="btn aqua-gradient" data-toggle="modal" data-target="#SingUpModal"  style={{}}>ADD TO CART</button>

        </div>

        <div>

          <div className="modal fade" id="LoginModal" tabIndex={-1} role="dialog" aria-labelledby="LoginModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="LoginModalLabel">Log In to Night Out</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                      else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/*Sing Up Modal */}
          <div className="modal fade" id="SingUpModal" tabIndex={-1} role="dialog" aria-labelledby="SingUpModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content" >
                <div className="modal-header" style={{ backgroundColor: ' #ffe6ff' }} >

                  <label for="fname" style={{ fontSize: '30px', color: 'black', fontFamily: 'serif' }}>Payment </label>
                  <Icon />

                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">

                      <label htmlFor="Name" style={{ color: 'black' }}>Full Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Enter Your Name" />

                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4" style={{ color: 'black' }}>Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Emaiil" />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4" style={{ color: 'black' }}>Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="inputAddress2" style={{ color: 'black' }}>Address</label>
                      <input type="text" className="form-control" id="inputAddress2" placeholder="Residential address" />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputCity" style={{ color: 'black' }}>Phone Number</label>
                        <input type="text" className="form-control" id="inputCity" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState" style={{ color: 'black' }}>State</label>
                        <select id="inputState" className="form-control">
                          <option selected>Choose...</option>
                          <option>Pakistan</option>
                          <option>India</option>
                          <option>U.S.A</option>
                          <option>China</option>
                          <option>Turkey</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label htmlFor="inputZip" style={{ color: 'black' }}>Zip Code</label>
                        <input type="text" className="form-control" id="inputZip" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Check me out
                      </label>

                      </div>
                    </div>
                    <button type="submit" className="btn  blue-gradient">Add To Cart</button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn purple-gradient" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Form;