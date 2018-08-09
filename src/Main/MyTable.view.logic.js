import React from 'react'
import MyTable from './MyTable.view.js'

class MyTableLogic extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    fetch('/data-small.json')
      .then(res => res.json())
      .then(data => this.setState({ from: data, isLoading: false }))
  }

  render() {
    const { props, state } = this

    return <MyTable {...props} {...state} />
  }
}

export default MyTableLogic
