/**
 * Created by Administrator on 2017/4/23.
 */

import React, {Component,PropTypes} from 'react'
import fetchUser from 'twitter'

class Twitter extends Component {
  state = {
    user:null,
  }
  static propTypes = {
    userName:PropTypes.string.isRequired,
  }
  componentDidMount () {
    fetchUser(this.props.username)
      .then((user) => this.setState({user}))
  }
  render () {
    return this.props.children(this.state.user)
  }
}