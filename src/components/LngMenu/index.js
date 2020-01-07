import React, { Component } from 'react';
import './index.css';

export default class LngMenu extends Component {

    render() {
        const { AppState, AppSetState } = this.props;

        return(
            <div className="LngMenu">
                    {AppState.LngMenuShow &&
                    <div className="LngMenu-lang-menu">
                        <span className="LngMenu-lang-span">{AppState.Lng.Language}</span>
                        <select className="LngMenu-lang-selector" defaultValue={AppState.LngCurrent} onChange={(event) => {AppSetState({LngCurrent: event.target.value,})}} size="1">
                            {AppState.LngMenuOptions}
                        </select>
                    </div>}
            </div>
        );
    };
};