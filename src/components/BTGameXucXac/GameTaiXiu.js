import React, { Component } from 'react'
import InfoGame from './InfoGame'
import { connect } from 'react-redux'
import './style/style.css'
import XucXac from './XucXac'
class GameTaiXiu extends Component {
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">
          Game Xúc Xắc
        </div>
        <div className="row text-center mt-5">
          <div className="col-4">
            <button onClick={() => {
               this.props.datCuoc(true) 
            }} className="btn-game">Tài</button>
          </div>
          <div className="col-4">
            <XucXac />
          </div>
          <div className="col-4">
            <button onClick={() => {
               this.props.datCuoc(false) 
            }} className="btn-game">Xỉu</button>
          </div>
        </div>
        <div className="infoGame text-center">
          <InfoGame />
          <button onClick={() => {
            this.props.xuXac()
          }} className="btn btn-success p-2 display-4 mt-5">Play Game</button>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      // tạo action
      let action = {
        type: 'DAT_CUOC',
        taiXiu
      }
      // dispatch lên reducer
      dispatch(action)
    },
    xuXac: () => {
      dispatch({
        type: 'XUC_XAC',
      })
    }
  }
}

export default connect(null,mapDispatchToProps)(GameTaiXiu)
