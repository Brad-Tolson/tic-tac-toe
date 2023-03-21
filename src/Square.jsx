import React from "react";

const Square = (props) => {
    console.log(props.squares, props.player);

    return (
        <div className="square">
            {props.propVar}
        </div>
    );
};

export default Square;