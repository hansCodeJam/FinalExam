import React, {Component} from 'react';
import axios from 'axios';
import BeerCard from './beerCard';

class BeerFetch extends Component {
    constructor(){
        super()
        this.state = {
           beer: []
        }
    }
    
    getBeer = () => {
    
        let url = "https://api.punkapi.com/v2/beers"
    
        axios.get(url).then(data => {
        
            this.setState({
                beer: data
            })
        })
    
    }

    componentDidMount() {
        this.getBeer();
    }

    render() {
        return (
            <div>
                {this.state.beer.map((beers,idx) => {
                    return(
                        <div key={beers.id}>
                                <BeerCard beer={beers} />
                            </div>
                    )
                })}
            </div>
        );
    }
}


export default BeerFetch;