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
            console.log(data)
            console.log(data.data)
            console.log(data.data[0].id)
        
            this.setState({
                beer: data
            })
            // console.log(data.name)
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
                                <BeerCard data={beers} />
                            </div>
                    )
                })}
            </div>
        );
    }
}


export default BeerFetch;