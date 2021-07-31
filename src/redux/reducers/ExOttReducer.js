const defaultState = {
    arrDatCuoc: [
        ~{ma: 'keo', hinhAnh: './img/gameOanTuTi/keo.png', datCuoc: true},
        {ma: 'bua', hinhAnh: './img/gameOanTuTi/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: './img/gameOanTuTi/bao.png', datCuoc: false},
    ],

    result: 'i am 3000',
    soBanWin: 0,
    soBanChoi: 0,
    computer: {ma: 'keo', hinhAnh: './img/gameOanTuTi/keo.png'},
}

const ExOttReducer = (state = defaultState, action) => {
    switch (action.type) {
        default: return {...state}
    }
}

