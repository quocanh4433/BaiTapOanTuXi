import React, {Component} from 'react';

class Computer extends Component {
    render() {
        return (
            <div className='player text-center'>
                <div className='think'>
                    <img style={{transform: 'rotate(120deg)'}} width={100} height={100} src="./img/gameOanTuTi/bua.png"
                         alt="./img/gameOanTuTi/bua.png"/>
                </div>

                <div className='speech-bubble'>

                </div>
                <img style={{height: 250, width: 250}} src='./img/gameOanTuTi/playerComputer.png' alt=""/>
            </div>
        );
    }
}

export default Computer;