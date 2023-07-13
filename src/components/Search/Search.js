import React, { Component } from 'react'
import withRouter from '../../withRouter';
import { clearErrors } from "../../actions/errorActions";
import { resend, verifyCode } from "../../actions/authActions";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer1 from '../Footer/Footer';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { updateAccount, saveUsernameAlbedo, pkeyGoogleUser } from "../../actions/authActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Navbar1 from '../Dashboard/Navbar1';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "",
            isLoading: false,
            errors: {},
            items: Array.from({ length: 20 }),
            searchQuery: '',
            results: [],
            preferences:[],
            coinGecko:[]
            
        }

        this.onChange = this.onChange.bind(this)
        

    }

/**
    fetchCoinGeckoData = (searchQuery) => {
        const apiKey = 'YOUR_API_KEY'; // Replace with your CoinGecko API key
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${searchQuery}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
      
        axios
          .get(url, {
            headers: {
              'Content-Type': 'application/json',
              // Add any additional headers if required
            },
          })
          .then((response) => {
            const coinGeckoResults = response.data;
            // Do something with the CoinGecko results, such as updating state or merging with existing results
          })
          .catch((error) => {
            console.error('Error fetching CoinGecko data:', error);
          });
      };
       */

    handleInputChange = event => {
        const searchQuery = event.target.value;
        this.setState({ searchQuery }, () => {
            this.performSearch();
        });
    }

    performSearch = () => {
        const { searchQuery } = this.state;
      
        // Fetch data from your MongoDB
        fetch(`https://edunode.herokuapp.com/api/search?searchQuery=${searchQuery}`)
          .then((response) => response.json())
          .then((data) => {
            const mongoResults = data;
            this.setState({ results: mongoResults });
      
            // Fetch data from CoinGecko
            axios
              .get(`https://api.coingecko.com/api/v3/search?query=${searchQuery}`)
              .then((response) => {
                const coinGeckoResults = response.data;
                this.setState({ coinGecko: coinGeckoResults });
                console.log(coinGeckoResults)
                console.log(coinGeckoResults.coins)
              })
              .catch((error) => {
                console.error('Error fetching CoinGecko data:', error);
              });
          })
          .catch((error) => {
            console.error('Error fetching data from MongoDB:', error);
          });
      };
      

componentDidMount(){
    const { email } = this.state;
    fetch(`https://edunode.herokuapp.com/api/search/${email}`)
    .then(response => response.json())
    .then(data => {
        this.setState({ preferences: data });
    })
    .catch(error => {
        console.error(error);
    });

}

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });

    };
    

    render() {
        const { searchQuery, results,preferences,coinGecko } = this.state;
        const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "";
        return (
            <>
                <div>
                <Navbar1 />
                <br></br>
                <br></br>
                
                   
                        <Grid container spacing={2}>
                            {/* <Grid xs={5} sm={3.5} md={2}>
                                <Item><Sidebar props={email} /></Item>
                            </Grid> */}

                            <Grid item xs={12} sm={10} md={100}>
                                <div>
                                    <div>
                                        <div>
                                        
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                value={searchQuery}
                                                onChange={this.handleInputChange}
                                                style={{ border: '1px solid gray', borderRadius: '5px', padding: '5px' }}
                                            />
                                            <button onClick={this.performSearch} style={{ backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', padding: '5px' }} >Search</button>




                                            <div className="row justify-content-center card-deck d-flex">
                                                {results.courses && results.courses.map(course => (
                                                    <div className="col-md-4 mb-4 h-100" key={course.id}>
                                                        <div className="card shadow h-100">
                                                            <div className="card-body">
                                                                <h6 className="card-title"> Course </h6>
                                                                <h5 className="card-title">{course.title}</h5>
                                                                <p className="card-text">{course.description}</p>
                                                                <p className="card-text">

                                                                    <a href={course.link} className="card-link">
                                                                        <FontAwesomeIcon icon={faLink} className="mr-2" />
                                                                        {course.link}
                                                                    </a>

                                                                </p>
                                                                <p className="card-text">
                                                                    <small className="text-muted">
                                                                        Tags: {course.tags.join(", ")}
                                                                    </small>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                {results.posts && results.posts.map(post => (
                                                    <div className="col-md-4 mb-4 h-100" key={post.id}>
                                                        <div className="card shadow h-100">
                                                            <div className="card-body">
                                                            <h6 className="card-title"> Post </h6>
                                                                <h5 className="card-title">{post.title}</h5>
                                                                <p className="card-text" dangerouslySetInnerHTML={{ __html: post.description }} ></p>
                                                                <a href={post.link} className="card-link">
                                                                    <FontAwesomeIcon icon={faLink} className="mr-2" />
                                                                    {post.link}
                                                                </a>
                                                                <p className="card-text">
                                                                    <small className="text-muted">
                                                                        Tags: {post.tags.join(", ")}
                                                                    </small>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                {results.blogs && results.blogs.map(blog => (
                                                    <div className="col-md-4 mb-4 h-100" key={blog.id}>
                                                        <div className="card shadow h-100">
                                                            <div className="card-body">
                                                            <h6 className="card-title"> Blog </h6>
                                                                <h5 className="card-title">{blog.title}</h5>
                                                                <p className="card-text">{blog.description}</p>
                                                                <p className="card-text">
                                                                    <a href={blog.link} className="card-link">
                                                                        <FontAwesomeIcon icon={faLink} className="mr-2" />
                                                                        {blog.link}
                                                                    </a>

                                                                    <p className="card-text">
                                                                        <small className="text-muted">
                                                                            Tags: {blog.tags.join(", ")}
                                                                        </small>
                                                                    </p>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="row justify-content-center card-deck d-flex">
                                                {coinGecko.coins && coinGecko.coins.slice(0, 10).map(coin => (
                                                    <div className="col-md-4 mb-4 h-100" key={coin.id}>
                                                        <div className="card shadow h-100">
                                                            <div className="card-body">
                                                                <h6 className="card-title"> Coins </h6>
                                                                <img src={coin.large}></img>
                                                                <label>Coin Name:</label>
                                                                <h5 className="card-title">{coin.name}</h5>
                                                                <label>Coin Symbol:</label>
                                                                <p className="card-text">{coin.symbol}</p>
                                                                <label>Market Rank:</label>
                                                                <p className="card-text">{coin.market_cap_rank}</p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                </div>
                                                <div className="row justify-content-center card-deck d-flex">
                                                {coinGecko.exchanges && coinGecko.exchanges.slice(0, 10).map(exchange => (
                                                    <div className="col-md-4 mb-4 h-100" key={exchange.id}>
                                                        <div className="card shadow h-100">
                                                            <div className="card-body">
                                                                <h6 className="card-title"> Exchanges </h6>
                                                                <img src={exchange.large}></img>
                                                                <label>Exchange Name:</label>
                                                                <h5 className="card-title">{exchange.name}</h5>
                                                                <label>Market Type:</label>
                                                                <p className="card-text">{exchange.market_type}</p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                </div>
                                                <div className="row justify-content-center card-deck d-flex">
                                                {coinGecko.nfts && coinGecko.nfts.slice(0, 10).map(nft => (
                                                    <div className="col-md-4 mb-4 h-100" key={nft.id}>
                                                        <div className="card shadow h-100">
                                                            <div className="card-body">
                                                                <h6 className="card-title"> Nfts </h6>
                                                                <img src={nft.thumb}></img>
                                                                <label>Nft Name:</label>
                                                                <h5 className="card-title">{nft.name}</h5>
                                                                <label>Nft Symbol:</label>
                                                                <p className="card-text">{nft.symbol}</p>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                </div>


                                        </div>


                                    </div>

                                </div>


                            </Grid>

                        </Grid>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                       
                        
                   
                </div>



            </>
        )

        // if (!this.props.auth.isAuthenticated) {
        //   return <Redirect to="/" />
        // }


    }

}

const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
});

Search = connect(
    mapStateToProps, { updateAccount, saveUsernameAlbedo, pkeyGoogleUser, verifyCode, clearErrors }
)(Search);

export default Search = reduxForm({
    form: "ReduxForm",
    fields: ["name", "pkey"],
    clearErrors,
    updateAccount,
    saveUsernameAlbedo,
    pkeyGoogleUser

})(withRouter(Search));

