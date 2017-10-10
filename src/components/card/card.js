import React, {Component} from 'react';
import FormatDate from '../../filters/formatDate'

import './card.css';

export default class Card extends Component {

    showAlert(id) {
        alert(id);
    }

    render() {
        return (
            <div className="card">
                <div className="card__header">
                    <img className="card__header-avatar" src={this.props.photo.user.profile_picture} alt=""/>
                    <div className="card__header-desc">
                        <a href={'https://www.instagram.com/' + this.props.photo.user.username + '/'}
                           className="card__header-desc-name">
                            {this.props.photo.user.username}
                        </a><br/>
                        {this.props.photo.location ? (
                            <span className="card__header-desc-place">{this.props.photo.location.name}</span>) : ''}
                    </div>
                    <div className="card__header-time">{FormatDate(this.props.photo.created_time)}</div>
                </div>
                <a href={this.props.photo.link} className="card__content">
                    <img className="card__content-image" src={this.props.photo.images.standard_resolution.url} alt=""/>
                </a>
                <div className="card__footer">
                    <img className="card__footer-heart" onClick={this.showAlert.bind(this, this.props.photo.id)}
                         src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc0LDMxYy01OC4yMTQsMC05Ny40ODIsMjkuNS0xMTgsNTAuNDA0QzIzNS40ODIsNjAuNSwxOTYuMjE0LDMxLDEzOCwzMUM1Ny4wNDQsMzEsMCwxMDIuODU3LDAsMTg3LjY2NyAgICBDMCwzMTguODIsMTMwLjQ5Nyw0MTkuMDEyLDI0Ni44NjEsNDc4Ljc5YzUuNzM2LDIuOTQ3LDEyLjU0MiwyLjk0NywxOC4yNzgsMEMzODEuNTYzLDQxOC45ODIsNTEyLDMxOC44ODgsNTEyLDE4Ny42NjcgICAgQzUxMiwxMDMuMDA3LDQ1NS4wODUsMzEsMzc0LDMxeiBNMjU2LDQzOC40NDlDMTU3Ljg2NSwzODYuNTk2LDQwLDI5Ny45ODIsNDAsMTg3LjY2N0M0MCwxMjYuOTIyLDc4LjAzNSw3MSwxMzgsNzEgICAgYzQ3LjMwNywwLDg0Ljc2OCwyNy44ODIsMTAxLjIyLDUyLjM4MmMzLjY1LDUuNzUsOS45MjMsOS4xNjcsMTYuNzM2LDkuMmM2Ljg1MSwwLjAyNCwxMy4xNTMtMy41MDQsMTYuODU0LTkuMjQ1ICAgIEMyNzMuMTQ3LDEyMi44MTMsMzA3LjMyMiw3MSwzNzQsNzFjNTkuOTc4LDAsOTgsNTUuOTQ1LDk4LDExNi42NjdDNDcyLDI5Ny45MTMsMzUzLjkyOCwzODYuNzA1LDI1Niw0MzguNDQ5eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
                         alt=""/>
                    <span className="card__footer-count">{this.props.photo.likes.count}</span>
                    {this.props.photo.caption ? (
                    <div className="card__footer-description">{this.props.photo.caption.text}</div>) : ''}
                </div>
            </div>
        )
    }
}