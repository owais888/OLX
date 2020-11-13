import React, { Component } from 'react';

class Pcc extends Component {
  render() {
    return (
      <div>



        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />

          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">

              <img className="d-block w-100" src="https://i.pinimg.com/originals/c6/b7/8e/c6b78ed22b30a8230f5ccea2ddc88468.jpg" alt="First slide" />
            </div>
          </div>

        </div>


      </div>
    );
  }
}

export default Pcc;