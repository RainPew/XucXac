const stateDefault = {
    taiXiu: true,  // true là tài 3 -> 11, false là xiu (12 <)
    mangXucXac: [
        { ma: 6, hinhAnh: './img/6.png' },
        { ma: 5, hinhAnh: './img/5.png' },
        { ma: 4, hinhAnh: './img/4.png' }
    ],
    soBanThang: 0,
    tongSoBanChoi: 0,
}

const GameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DAT_CUOC":
            state.taiXiu = action.taiXiu;
            return { ...state }
        case "XUC_XAC":
            let arrXucXac = [];
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucXacNgauNhien = {
                    ma: soNgauNhien, hinhAnh: `./img/${soNgauNhien}.png`
                }
                arrXucXac.push(xucXacNgauNhien);
            }
            // setState 
            state.mangXucXac = arrXucXac;
            // số bàn chơi
            state.tongSoBanChoi += 1;
            // số bàn thắng
            let tongSoDiem = arrXucXac.reduce((soDiem, xucXac, index) => {
                return soDiem += xucXac.ma
            }, 0)
            if ((tongSoDiem > 11 && state.taiXiu) || (tongSoDiem <= 11 && state.taiXiu === false)) {
                state.soBanThang += 1;
            }

            return { ...state }
        default: return { ...state }
    }
}

export default GameXucXacReducer;