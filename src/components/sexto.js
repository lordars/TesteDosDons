import React, { Component } from 'react'
import { ThemeProvider, AppBar, TextField, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material"


export class Sexto extends Component {

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
                    26-estou interesado em fazer com que todas as organizações da igreja recebam recursos financeiros para a obra
                    </p>

                    <RadioGroup
                        aria-label="1"
                        name="radio-buttons-group"
                        onChange={handleChange('r26')}
                        defaultValue= {values.r26}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>
                    27- sou muito sensivel a necessidade de que a administração seja sem atrito na igreja de forma que tudo ande "com dcencia e ordem ".
                    </p>

                    <RadioGroup
                        aria-label="2"
                        name="radio-buttons-group"
                        defaultValue= {values.r27}
                        onChange={handleChange('r27')}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>

                    28- falo carinhosamente e auxilio pessoas necessitadas ou imposibilitados de se ajudarem; eu defendo e protejo estas pessoas

                    </p>

                    <RadioGroup
                        aria-label="3"
                        defaultValue= {values.r28}
                        name="radio-buttons-group"
                        onChange={handleChange('r28')}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>
                    29-sofro profundamente com os pecados dos outros e estou extramente desejoso de ver a vontade de Deus acontencer em todas as situções
                    </p>

                    <RadioGroup
                    aria-label="4"
                    defaultValue= {values.r29}
                    name="radio-buttons-group"
                    onChange={handleChange('r29')}
                    >
                    <FormControlLabel value="3" control={<Radio />} label="Muito" />
                    <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                    <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                    <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>
                    30- gosto de aliviar a carga das pessoas que ocupam posição-chave, par aque elas possam esforçar-se mais em sua tarefa particular
                    </p>

                    <RadioGroup
                    aria-label="5"
                    name="radio-buttons-group"
                    onChange={handleChange('r30')}
                    defaultValue= {values.r30}
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

export default Sexto
