const React = require('react')

class DigitalClicker extends React.Component {
  constructor(){
    super()

    this.state = {
      timesClicked: 0
    }
    this.changeTime = this.changeTime.bind(this)
  }

  changeTime(){
    this.setState({
      timesClicked: (this.state.timesClicked + 1)
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.changeTime}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

module.exports = DigitalClicker;
