import React from "react";
import "./HeroesItem.css";

class HeroesItem extends React.Component {
  state = {
    name: this.props.name,
    height: this.props.height,
    mass: this.props.mass,
    hair_color: this.props.hair_color,
    skin_color: this.props.skin_color,
    eye_color: this.props.eye_color,
    birth_year: this.props.birth_year,
    gender: this.props.gender,
    homeworld: this.props.homeworld,


  };



  render() {
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld } = this.state;
    /*let url = `https://starwars-visualguide.com/assets/img/characters/1.jpg`;*/
    //const{numberF} =this.props;
    //console.log("hgffhgf",this)
    return (

     
      <div className="col-md-12 col-lg-12">
        <div className="post vt-post">
          <div className="row">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
              <div className="post-type post-img">
                <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXC4Npe5DWO1X8NEEtFJUSbUjJYZkfUVXEGS2oL5volRrDywa&s" className="img-responsive" alt="image post"></img></a>
              </div>
             
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
              <div className="caption">
                <h3 className="md-heading"><a href="#" >{name}</a></h3>
                <div className="row">
                  <div className="col-3">
                    <h6> Height: <b>{height} </b> </h6>
                    <h6> Mass: <b>{mass} </b> </h6>
                  </div>
                  <div className="col-3">
                    <h6> Hair color: <b>{hair_color} </b> </h6>
                    <h6> Skin color: <b>{skin_color} </b> </h6>
                  </div>
                  <div className="col-4">
                    <h6> Eye color: <b>{eye_color} </b> </h6>
                    <h6> Year of birth: <b>{birth_year} </b> </h6>
                  </div>
                  <h6> Gender: <b>{gender} </b> </h6>

                </div>
                <button onClick={this.props.onFoto} > View foto</button>
              </div>

            </div>
          </div>
        </div>

        <div className="clearfix"></div>
      </div>

    )





  }

  /* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXC4Npe5DWO1X8NEEtFJUSbUjJYZkfUVXEGS2oL5volRrDywa&s*/

}

export default HeroesItem;