import React from 'react'
import './Button.css'

type Props = {
  size?: string
  onClick?: React.MouseEventHandler
}

interface IState {
  n: number
}

class Button extends React.Component<Props, IState> {
  static displayName = 'MyButton';
  static defaultProps = {
    size: 'normal'
  }
  constructor(props: Props) {
    super(props)
    console.log(this.props.size! + 1)
    this.state = {
      n: 1
    }
  }
  onClick = () => {
    this.setState({
      n: this.state.n + 1
    })
  }
  render() {
    return (
      <div className="button" onClick={this.props.onClick}>
        <span onClick={this.onClick}>
          {this.props.children}
          {this.state.n}
        </span>
      </div>
    )
  }
}

export default Button;