import React from 'react';
import { Link } from 'react-router-dom';


function Header() {

    const nav = [
        { ID: 1, label: "Mobile Phones" },

        { ID: 2, label: "Cars" },
        { ID: 3, label: "Motorcycles" },
        { ID: 4, label: "Houses" },
        { ID: 5, label: "Tv-Video-Audio" },
        { ID: 6, label: "Tablets" },
        { ID: 7, label: "Lands & Plots" },


    ];

    return (

        <React.Fragment>
            <div className="header fixed flex aic">

                <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                <div className="logo">

                </div>
                <div className="location manifest flex aic fa fa-search" style={{ fontSize: '20px',paddingRight:'50px' }}>

                    <div className="icon-search  " style={{height:'35px',width:'90px'}}>
                        {/* <input className="label s15 font" placeholder="Your location" value="Pakistan" /> */}
                        {/* <button className="fa fa-chevron-down s24 " /> */}
                        {/* <input type="text" placeholder="Pakistan" className="query font s24" /> */}
                        <select id="inputState" className="form-control" style={{width:'140px'}}>
                          <option selected>Pakistan</option>
                          <option>Pakistan</option>
                          <option>India</option>
                          <option>U.S.A</option>
                          <option>China</option>
                          <option>Turkey</option>
                          <option>Other</option>
                        </select>
                    {/* <button className=" icon-search go fa fa-chevron-down s24 cfff" /> */}
                    </div>
{/* 
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
                      </div> */}
                </div>
                <div className="search flex aic">
                    <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="query font s15" />
                    <button className=" icon-search go fa fa-search s24 cfff" />

                </div>
                <div className="actions flex aic">
                    <Link to="/account/signin" className="color fontb s16 noulh noul">  Sign in </Link>

                    <button className="sell flex aic color">

                        <div className="fa fa-plus s24 icon-plus ico" style={{ marginRight: '6px', fontSize: '25px' }} >

                            <h2 className="s18 font" >Sell</h2>
                        </div>
                    </button>
                </div>
            </div>


            <div className="hnav fixed flex aic">
                <button className="view-cates flex aic color">


                </button>
                {nav.map(item => {
                        return (
                            <Link to={"/browser" + item.ID} className="noul noulh color bl font s15   ">{item.label}</Link>
                        )
                    })
                }
            </div>
            <ard />
        </React.Fragment>
    )

}

export default Header;