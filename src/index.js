import React from "react";
import ReactPaginate from "react-paginate";
import ReactDOM from "react-dom";
import Loader from "./components/Loader/Loader";
import HeroesList from "./components/HeroesList/HeroesList";
import HeroesView from "./components/HeroesView/HeroesView";
import { Pagination } from 'semantic-ui-react';
import "./index.css";
import { resolve } from "path";
import { reject } from "q";





class App extends React.Component {
  state = {
    isLoading: true,

    // numberFoto: 1,
    person: [],

    currentPage: 0
  };

  componentDidMount = () => {
    const URL_SWAPI = "https://swapi.co/api/people";
    fetch(URL_SWAPI, {
      method: "GET"
    })
      .then(responce => {
        return responce.json();
      })
      .then(({ results }) => {
        this.setState({
          isLoading: false,
          person: results
        });
      })
      .catch(err => console.log(err));
  };

  // ;
  onFoto = name => {
    const index = this.state.person.findIndex(elem => elem.name === name);
    this.setState({
      numberFoto: index + 1

    });
    //console.log(index);
  }





  pageChangeHandler = ({ selected }) => {

    let url = `https://swapi.co/api/people/?page=${selected + 1}`;
    this.setState({ currentPage: selected })

    fetch(url)
      .then(responce => {
        return responce.json();
      })
      /*.then(data => {
        
        let NewPerson = [];
        let oldList = this.state.person.slice();
        NewPerson = oldList.concat(data.results) 
        this.setState({
          person: NewPerson
        });
      });*/

      .then(({ results }) => {

        let NewPerson = [];
        let copyList = [];

        //console.log("person",this.state.person)
        copyList = this.state.person.splice(0);


        //console.log("del", copyList)

        NewPerson = copyList.concat(results)

        //NewPerson=NewPerson.concat(results)
        console.log("new", NewPerson)
        this.setState({

          person: NewPerson

        });





      });



  };



  /*async componentWillMount() {
      
    let url = `https://swapi.co/api/people`;
    // ;
    const response = await fetch(url);
    const people = await response.json();
  
    // .then()
    // const response2 = await fetch(url2)
    // const imges = await response2.json()
    // console.log(imges)
  
    this.setState({
      isLoading: false,
          person: people.results
      
    });
    
  }*/

  render() {
    //console.log(this.state.numberFoto);
    console.log("personout", this.state.person);


    console.log("pagination", this.state.currentPage)
    return (
      <div className="container bootstrap snippet">
        {
          this.state.isLoading
            ?
            <Loader />
            : <React.Fragment>
              <HeroesList HeroesList={this.state.person}

                onFoto={this.onFoto}

              > </HeroesList>

              <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={9}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.pageChangeHandler}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                forcePage={this.state.currentPage}
              />

              <HeroesView
                numberF={this.state.numberFoto}
              ></HeroesView>

            </React.Fragment>



        }






      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
