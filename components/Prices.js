/**
 * KYIV MEDIA
 * 06.12.2019
 */
import React, { Component } from 'react'

export default class Prices extends Component {
    state = {
        currency: 'USD'
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item"> Bitcoin rate for  :</li>
                    <li className="list-group-item"><span className=" badge badge-primary">{this.props.bpi.USD.description}</span><span className=" badge badge-primary pl-4">{this.props.bpi.USD.code}</span></li>
                    <li className="list-group-item"><strong>{this.props.bpi.USD.rate}</strong> </li>
                </ul>
            </div>
        )
    }
}
