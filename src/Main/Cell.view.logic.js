import Cell from './Cell.view.js'
import React from 'react'

const CellLogic = props => (
  <Cell {...props} everySecondRow={props.rowIndex % 2 === 1} />
)
export default CellLogic
