import React from "react"

class HelloWorld extends React.Component {
  state = {
    who: "world",
  }

  handleClick = (event) => {
    const name = event.currentTarget.innerHTML
    this.setState({
      who: name,
    })
  }

  render() {
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button onClick={this.handleClick}>World</button>
        <button onClick={this.handleClick}>Friend</button>
        <button onClick={this.handleClick}>React</button>
      </div>
    )
  }
}

export default HelloWorld
