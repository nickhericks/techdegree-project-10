import React from "react";
import { Redirect } from "react-router-dom";
import { Consumer } from "./Context";

const AddPlayerForm = () => {

  return (
    <Consumer>
      {value => {

				console.log(value);
				
				{/* Run handleSignOut method from Provider in Context/index.js file */}
				value.actions.signOut();

        return (
          <React.Fragment>
						{/* <form onSubmit={handleSubmit}>
							<input
								type="text"
								ref={playerInput}
								placeholder="Enter a player's name"
							/>

							<input type="submit" value="Add Player" />
						</form> */}
            <Redirect to="/" />
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default AddPlayerForm;
