/**
 * Created by Administrator on 2017/6/3.
 */
import React,{Component} from 'react'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

//   tick() {
//     this.timerID = setInterval(()=>{
//       this.setState({
//         date: new Date()
//     })
//     })
//   }
//
//   componentDidMount() {
//     this.tick()
//   }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount () {
    this.timerID = setInterval(() => this.tick(),1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div>
        <h1 style={{color:'#fb3'}} className="hello">定时器</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default Clock;