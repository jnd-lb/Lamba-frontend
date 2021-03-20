import React from 'react'
import classes from "./StatisticsItem.module.scss"

function StatisticsItem(props) {
    return (
        <div className={classes.container}>
            <img src={props.imageUrl} className={classes.container__image} alt="" srcset=""/>
            <div className={classes.container__textcontainer}>
                <h1 className={classes.container__textcontainer__number}>{props.data}</h1>
                <h1 className={classes.container__textcontainer__title}>{props.title}</h1>
            </div>
        </div>
    )
}

export default StatisticsItem
