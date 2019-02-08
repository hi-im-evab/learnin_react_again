import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class YourComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        const axios = require('axios');

        var pokeboy;

        const that = this
        const setState = this.setState.bind(this);

        console.log('pre async');

        axios.get("https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=Pikachu")
            .then(function (response) {
                // handle success
                that.setState();
                console.log('async');

                console.log(response);

                pokeboy = response.data.data[0];

                //that.setState({pokeboy: pokeboy});

                console.log(pokeboy.id);
                console.log(pokeboy.image);
                console.log(pokeboy.name);
                console.log(pokeboy.types[0]);

                var array = [pokeboy.id, pokeboy.image, pokeboy.name, pokeboy.types[0]];

                setState({ data: array });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    render() {
        return (<div>
            POKEMON INFO
            {this.state.data === null ?
                <div>Loading</div>
                :
                <div>
                    {this.state.data[0]} <br></br>
                    <img src={this.state.data[1]}></img> <br></br>
                    {this.state.data[2]} <br></br>
                    {this.state.data[3]} <br></br>

                </div>
            }
        </div>);
    }
}



ReactDOM.render(
    // <Game />,
    <YourComponent />,
    document.getElementById('root')
);



// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square">
//                 {/* TODO */}
//             </button>
//         );
//     }
// }

// class Board extends React.Component {


//     renderSquare(i) {
//         return <Square />;
//     }

//     render() {
//         const status = 'Next player: X';

//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }

// class Game extends React.Component {
//     shitDicks() {
//         const axios = require('axios');

//         var pokeboy = 'stupid';

//         const that = this;

//         axios.get("https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=Pikachu")
//             .then(function (response) {
//                 that.setState();


//                 console.log('1');

//                 // handle success
//                 console.log(response);

//                 pokeboy = response.data.data[0];

//                 //that.setState({pokeboy: pokeboy});

//                 console.log(pokeboy.id);
//                 console.log(pokeboy.image);
//                 console.log(pokeboy.name);
//                 console.log(pokeboy.types[0]);
//             })
//             .catch(function (error) {
//                 // handle error
//                 console.log(error);
//             })
//             .then(function () {
//                 // always executed
//             });


//         console.log('2');
//     }

//     render() {
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board />
//                 </div>
//                 <div className="game-info">
//                     <div>{/* status */}</div>
//                     <ol>{/* TODO */}</ol>
//                 </div>

//                 <div>
//                     {this.state && this.state.data &&
//                         <div>{'This will just render after the return of the async call'}</div>
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

// ========================================
