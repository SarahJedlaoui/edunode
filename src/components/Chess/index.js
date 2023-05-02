import React from "react";
import Chessboard from "chessboardjsx";

class ChessBoardEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "start",
      squareStyles: {},
      draggable: true,
    };
  }

  handleDrop = ({ sourceSquare, targetSquare }) => {
    // update the square styles and position in the state
    const { squareStyles } = this.state;
    squareStyles[targetSquare] = { backgroundColor: "deepskyblue" };
    squareStyles[sourceSquare] = null;
    const newPosition = "start";
    this.setState({
      position: newPosition,
      squareStyles,
    });
  };
  
  

  render() {
    const { position, squareStyles, draggable } = this.state;

    return (
      <div>
        <Chessboard
          position={position}
          onDrop={this.handleDrop}
          squareStyles={squareStyles}
          draggable={draggable}
        />
      </div>
    );
  }
}

export default ChessBoardEditor;
