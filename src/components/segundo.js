import React, { Component } from 'react'
import { ThemeProvider, AppBar, TextField, Button,RadioGroup,FormControlLabel,Radio } from "@mui/material"


export class Segundo extends Component {

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
                    6- eu acho f ácil delegar responsabilidades aos outros e treinar outras pessoas para trabalhar na igreja
                    </p>
                    <RadioGroup
                        aria-label="1"                       
                        name="radio-buttons-group"
                        onChange={handleChange('r6')}
                        defaultValue= {values.r6}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                    7- sou muito sensível  às   necessidades materias e emocionais de outras pessoas
                    </p>
                    <RadioGroup
                        aria-label="2"                        
                        name="radio-buttons-group"
                        onChange={handleChange('r7')}
                        defaultValue= {values.r7}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                    8-eu comunico as grandes verdades do senhor de  maneira persuasiva e clara
                    </p>
                    <RadioGroup
                        aria-label="3"
                        
                        name="radio-buttons-group"
                        onChange={handleChange('r8')}
                        defaultValue= {values.r8}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                    9- tenho habilidade de fazer com que as pessoas se sintam a vontade e gosto de exercer hospitalidade
                    </p>
                    <RadioGroup
                        aria-label="4"
                        defaultValue= {values.r9}
                        name="radio-buttons-group"
                        onChange={handleChange('r9')}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                    10- gosto de descobrir novidades na biblia e passa-las adiante
                    </p>
                    <RadioGroup
                        aria-label="5"
                        defaultValue= {values.r10}
                        name="radio-buttons-group"
                        onChange={handleChange('r10')}
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


export default Segundo
