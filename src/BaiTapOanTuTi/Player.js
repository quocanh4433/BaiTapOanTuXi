import React, {Component} from 'react';
import {connect} from "react-redux";

class Player extends Component {
    render() {
        console.log(this.props.arrDatCuoc)

        return (
            <div className='text-center player'>
                <div className='think'>
                    <img style={{transform: 'rotate(104deg)'}} width={100} height={100} src="./img/gameOanTuTi/bua.png"
                         alt=""/>
                </div>

                <div className='speech-bubble'>

                </div>
                <img style={{height: 150, width: 150}} src='./img/gameOanTuTi/player.png' alt=""/>

                <div className="row">
                    {this.props.arrDatCuoc.map((item, index) => {
                        return <div className="col-4" key={index}>
                            <button className='btnItem'>
                                <img width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh}/>
                            </button>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        arrDatCuoc: state.defaultStatus.arrDatCuoc
    }
}

export default connect(mapStateToProps)(Player);