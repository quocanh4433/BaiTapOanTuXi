import React, {Component} from 'react';
import './BaiTapOanTuTi.css'
import Player from "./Player";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";

class BaiTapOanTuTi extends Component {
    render() {
        return (
            <div className='gameOTX'>
                <div className='row text-center'>
                    <div className="col-4 mt-5">
                        <Player/>
                    </div>
                    <div className="col-4 mt-5">
                        <KetQuaTroChoi/>
                        <button className='btn btn-success mt-5 display-4'>Play game</button>
                    </div>
                    <div className="col-4 mt-5">
                        <Computer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapOanTuTi;