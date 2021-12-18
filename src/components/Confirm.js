import React, { Component } from 'react'
import { ThemeProvider, AppBar, TextField, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material"


export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }
    back = e => {
        e.preventDefault();
        this.props.backStep();

    }
  

    render() {
        const { values, handleChange } = this.props;
       

        return (

            <div>
                <React.Fragment>
                    <AppBar title="Test dos dones" />

                    <p>
                        Verifique que todos os campos estam prenchidos
                    </p>
                    <ul>
                        
              
                    </ul>


                    <br />
                    <Button

                        variant="contained"
                        color="success"
                        onClick={this.continue}
                    >Finalizar</Button>
                    <Button

                        variant="contained"
                        color="secondary"
                        onClick={this.back}
                    >voltar</Button>
                </React.Fragment>
            </div>
        )
    }
}

export default Confirm
