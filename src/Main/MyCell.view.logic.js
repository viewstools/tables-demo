import MyCell from './MyCell.view.js'
import React from 'react'

const MyCellLogic = props => (
  <MyCell {...props} everySecondRow={props.rowIndex % 2 === 1} />
)
export default MyCellLogic
