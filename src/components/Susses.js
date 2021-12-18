import React, { Component } from 'react'
import { AppBar, Card, Button } from "@mui/material"


export class Susses extends Component {

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

        const profesia = parseInt(values.r1) + parseInt(values.r8) +parseInt(values.r15) + parseInt(values.r22) + parseInt(values.r29)
        const servicio = parseInt(values.r2) + parseInt(values.r9) + parseInt(values.r16) +parseInt(values.r23) + parseInt(values.r30)
        const ensino = parseInt(values.r3) + parseInt(values.r10) + parseInt(values.r17) + parseInt(values.r24) + parseInt(values.r31)
        const exortacao = parseInt(values.r4 )+ parseInt(values.r11 )+ parseInt(values.r18 )+ parseInt(values.r25 )+ parseInt(values.r32)       
         const liberalidade = parseInt(values.r5 )+ parseInt(values.r12 )+ parseInt(values.r19 )+ parseInt(values.r26 )+ parseInt(values.r33)
        const administracao =parseInt( values.r6) +parseInt( values.r13) +parseInt( values.r20) +parseInt( values.r27) +parseInt( values.r34)
        const missericordia =parseInt( values.r7) +parseInt( values.r14)+ parseInt(values.r21 )+ parseInt(values.r28 )+ parseInt(values.r35)   
          
        return (
            
            <div>
                <React.Fragment>
                        
                    <h1>Resultado:</h1>
                    <p>
                        O número mais alto (o max posivel 15) representa seu dom principal, o segundo mais alto o dom secundario, se tiver empate você tem Dois dons principais
                    </p>
                    <Card
                    sx={{ maxWidth: 345 
                    
                    }}
                    
                    >
                    <h2>
                       Profesia: {profesia}
                    </h2>
                    <h4> é a capacitação espiritual de proclamar toda a verdade de Deus para mostrar pecado, edificar, confortar e animar "Tem que Falar"</h4>
                </Card>
                <Card
                    sx={{ maxWidth: 345 }}
                    >
                    <h2>
                    Servicio:  {servicio}
                    </h2>
                    <h4>Servicio ou ministerio. É a capacitação espiritual de prestar serviço auxiliar em tudo que for necessário "Tem que Ajudar"</h4>
                    </Card>
                    <Card
                    sx={{ maxWidth: 345 }}
                    >
                    <h2>
                    Ensino: {ensino}
                    </h2>
                    <h4>É a capacitação espiritual de aprofundar-se na verdade da palavra de Deus por pesquisa própia, ajudando os demais a conhecer  a Palavra e como Pô-la em prática, "Tem que Ensinar"</h4>
                    </Card>
                    <Card
                    sx={{ maxWidth: 345 }}
                    >
                    <h2>
                    Exortação:  {exortacao}
                    </h2>
                    <h4>É a capacitação espiritual de demonstrar a circunstâncias do ponto de vista da verdade de Deus "Tem que Explicar"</h4>
                   </Card>
                    <Card
                    sx={{ maxWidth: 345 }}
                    >
                    <h2>
                    Liberalidade:   {liberalidade}
                    </h2>
                    <h4>
                        OU Contribução : É a capacidade espiritual de suprir com coisas materiais  as necessidades dos irmãos, suprindo ou cooperando com outros para o suprimento material. "Tem que Dar"
                    </h4>
                    </Card>
                    <Card
                    sx={{ maxWidth: 345 }}
                    >
                    <h2>
                    Administracao:  {administracao}
                    </h2>
                    <h4>Ou Presidencia: É a capacidade espiritual de coordenar e dirigir pensamentos e idéias no cumprimento da vontade de Deus. "Tem que Coordenar"</h4>
                   </Card>
                   <Card
                    sx={{ maxWidth: 345 }}
                    >
                    <h2>
                    Missericordia:  {missericordia}
                    </h2>
                    <h4>É a capacidade espiritual de se empatizar com os outros em situções delicadas e dificeis. "Tem que se Envolver</h4>
                   </Card>

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

export default Susses
