import React from 'react'
import classes from "./CaseCard.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NecessityBagde from '../NecessityBagde/NecessityBagde';

function CaseCard(props) {
    const imageUrl = {
        backgroundImage: `url(${props.imageUrl})`
    }
    return (
        <Link to="/cases/" className={classes.link + ` ${props.className}`} to="/">
            <div className={classes.container}>
                <div style={imageUrl} className={classes.container__imgContainer}></div>
                <div className={classes.container__main}>
                    <div className={classes.container__address}>
                        <img src="/img/pin.svg" />
                        <span>{props.city}</span>
                    </div>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <div className={classes.container__necessities}>
                        {props.necessities.map((e,i) => <NecessityBagde key={i} type={e} />)}
                    </div>
                </div>
            </div>
        </Link>
    )
}

CaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    necessities: PropTypes.array.isRequired
};

export default CaseCard
