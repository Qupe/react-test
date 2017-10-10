import React, {Component} from 'react';
import Card from './components/card/card';
import Jsonp from 'jsonp';

import './App.css'

const TOKEN = '1362124742.3ad74ca.6df307b8ac184c2d830f6bd7c2ac5644'

export default class App extends Component {

    state = {
        photos: []
    };

    componentDidMount() {
        let count = 20;
        let url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + TOKEN + '&count=' + count;

        Jsonp(url, null, (error, response) => {
            if (error) {
                return error.message;
            } else {
                this.setState({photos: response.data});
            }
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.photos.map( photo =>
                    <Card key={photo.id} photo={photo}>
                    </Card>
                )}
            </div>
        )
    }
};