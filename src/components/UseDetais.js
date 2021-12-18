import React, { Component } from 'react'
import { ThemeProvider, AppBar, TextField, Button,RadioGroup,FormControlLabel,Radio } from "@mui/material"


export class UseDetais extends Component {

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
                        1- gosto de proclamar a verdade de Deus (pregar ) de um modo inspiradao e cheio de entusiamo.
                    </p>
                    <RadioGroup
                        aria-label="1"                       
                        name="radio-buttons-group"
                        onChange={handleChange('r1')}
                        defaultValue= {values.r1}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                       2- eu gosto de cuidar das necessidades dos outros em primeiro lugar, deixado mihas necessidades em segudo plano; eu acho dificil dizer não a um pedido
                    </p>
                    <RadioGroup
                        aria-label="2"                        
                        name="radio-buttons-group"
                        onChange={handleChange('r2')}
                        defaultValue= {values.r2}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>3-explicar a verdade de um texto biblico me agrada imensamente</p>
                    <RadioGroup
                        aria-label="3"
                        defaultValue= {values.r3}
                        name="radio-buttons-group"
                        onChange={handleChange('r3')}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>4-tenho facilidade em encorrajar e animar as pessoas que estão vacilando ou que têm duvidas espirituais

                    </p>
                    <RadioGroup
                        aria-label="4"
                        defaultValue= {values.r4}
                        name="radio-buttons-group"
                        onChange={handleChange('r4')}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                       5- administro bem minhas finanças  para poder contribuir generosamente para a obra do senhor
                    </p>
                    <RadioGroup
                        aria-label="5"
                        defaultValue= {values.r5}
                        name="radio-buttons-group"
                        onChange={handleChange('r5')}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                  
                    <br />
                    <Button

                        variant="contained"
                        color="success"
                        onClick={this.continue}
                    >Continue</Button>
                </React.Fragment>

            </div>
        )
    }
}


export default UseDetais
