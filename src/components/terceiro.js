import React, { Component } from 'react'
import { ThemeProvider, AppBar, TextField, Button,RadioGroup,FormControlLabel,Radio } from "@mui/material"


export class Terceiro extends Component {

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
                    11- e importante para mim poder incentivar o crescimiento espiritual dos outros capacitalos a viver  vitoriosamente
                    </p>
                    <RadioGroup
                        aria-label="1"                       
                        name="radio-buttons-group"
                        onChange={handleChange('r11')}
                        defaultValue= {values.r11}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                    12- dou coisas ou dinheiro liberalmente com alegria, amor e generosidade para o senhor

                    </p>
                    <RadioGroup
                        aria-label="2"                        
                        name="radio-buttons-group"
                        onChange={handleChange('r12')}
                        defaultValue= {values.r12}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                    13- eu gosto de trabalhar com os outros e de coordenar as açaões 
                    </p>
                    <RadioGroup
                        aria-label="3"
                        defaultValue= {values.r13}
                        name="radio-buttons-group"
                        onChange={handleChange('r13')}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                    14- gosto de visitar as pessoas hospitalizadas ou que não podem sair de casa
                    </p>
                    <RadioGroup
                        aria-label="4"
                        defaultValue= {values.r14}
                        name="radio-buttons-group"
                        onChange={handleChange('r14')}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                    15- preparo minha pregação de tal forma que leve as pessoas a um ponto de decisão definido
                    </p>
                    <RadioGroup
                        aria-label="5"
                        defaultValue= {values.r15}
                        name="radio-buttons-group"
                        onChange={handleChange('r15')}
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


export default Terceiro
