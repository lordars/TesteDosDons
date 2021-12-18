import React, { Component } from 'react'
import UseDetais from '../components/UseDetais'
import Segundo from '../components/segundo'
import Terceiro from '../components/terceiro'
import Quarto from '../components/quarto'
import Quinto from '../components/quinto'
import Sexto from '../components/sexto'
import Septimo from '../components/septimo'
import Confirm from '../components/Confirm'
import Susses from '../components/Susses'
import BenVindo from '../components/benVindo'


export class UseForm extends Component {
    state = {
        step: 1,
        r1: "",
        r2: "",
        r3: "",
        r4: "",
        r5: "",
        r6: "",
        r7: "",
        r8: "",
        r9: "",
        r10: "",
        r11: "",
        r12: "",
        r13: "",
        r14: "",
        r15: "",
        r16: "",
        r17: "",
        r18: "",
        r19: "",
        r20: "",
        r21: "",
        r22: "",
        r23: "",
        r24: "",
        r25: "",
        r26: "",
        r27: "",
        r28: "",
        r29: "",
        r30: "",
        r31: "",
        r32: "",
        r33: "",
        r34: "",
        r35: "",
    }


    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    backStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }


    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        const { step } = this.state;
        const {
            r1,
            r2,
            r3,
            r4,
            r5,
            r6,
            r7,
            r8,
            r9,
            r10,
            r11,
            r12,
            r13,
            r14,
            r15,
            r16,
            r17,
            r18,
            r19,
            r20,
            r21,
            r22,
            r23,
            r24,
            r25,
            r26,
            r27,
            r28,
            r29,
            r30,
            r31,
            r32,
            r33,
            r34,
            r35
        } = this.state;
        
        const values = {
            r1,
            r2,
            r3,
            r4,
            r5,
            r6,
            r7,
            r8,
            r9,
            r10,
            r11,
            r12,
            r13,
            r14,
            r15,
            r16,
            r17,
            r18,
            r19,
            r20,
            r21,
            r22,
            r23,
            r24,
            r25,
            r26,
            r27,
            r28,
            r29,
            r30,
            r31,
            r32,
            r33,
            r34,
            r35
         }
        // eslint-disable-next-line default-case
       

        switch (step) {
            case 1:
                return (
                    <BenVindo
                        nextStep={this.nextStep}
                        backStep={this.backStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <UseDetais
                        nextStep={this.nextStep}
                        backStep={this.backStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (                    
                    <Segundo
                    nextStep = {this.nextStep}
                    backStep = {this.backStep}
                    handleChange = {this.handleChange}
                    values= {values}
                    />
                )
            case 4:
                return (
                    <Terceiro
                    nextStep = {this.nextStep}
                    backStep = {this.backStep}
                    handleChange = {this.handleChange}
                    values= {values}
                    />
                )
            case 5:
                return (
                    <Quarto
                    nextStep = {this.nextStep}
                    backStep = {this.backStep}
                    handleChange = {this.handleChange}
                    values= {values}
                    />
                )
            case 6:
                return (
                    <Quinto
                    nextStep = {this.nextStep}
                    backStep = {this.backStep}
                    handleChange = {this.handleChange}
                    values= {values}
                    />
                )
            case 7:
                return (
                    <Sexto
                    nextStep = {this.nextStep}
                    backStep = {this.backStep}
                    handleChange = {this.handleChange}
                    values= {values}
                    />
                )
            case 8:
                return (
                    <Septimo
                    nextStep = {this.nextStep}
                    backStep = {this.backStep}
                    handleChange = {this.handleChange}
                    values= {values}
                    />
                )
            case 9 :
                return (
                    <Confirm
                    nextStep = {this.nextStep}
                    backStep = {this.backStep}
                    handleChange = {this.handleChange}
                    values= {values}
                    />
                )
            case 10 :
                return (
                    <Susses
                    nextStep = {this.nextStep}
                    backStep = {this.backStep}
                    handleChange = {this.handleChange}
                    values= {values}
                    />
                )

            default: <h1> Erorr Sistema Não funca</h1>
        }



    }
}

export default UseForm
