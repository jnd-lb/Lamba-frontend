import React from 'react'
import CaseCard from '../../SharedComponents/CaseCard/CaseCard'
import { useTranslation } from 'react-i18next';
import {Link }from "react-router-dom";
import classes from './HomeCasesList.module.scss';

function HomeCasesList() {
    const { t, i18n } = useTranslation();

    return (
        <section className={classes.container}>
            <h1 className={classes.container__headline}>
        <span>
        {t('homeCaseList.weNeed')}
        </span>
        <span  className={classes.container__headline__important} >
        {t('homeCaseList.yourHelp')}
        </span>
        </h1>
           
            <div className="row">
                <CaseCard className="col-md-4" id={1} necessities={["food","cloth"]} title="hi" description="this is the longedt text i can write" city="Bourj Hammoud" imageUrl="https://elements-video-cover-images-0.imgix.net/files/235261030/preview.jpg?auto=compress&crop=edges&fit=crop&fm=jpeg&h=800&w=1200&s=7f1d8f68f77edcf5c9d033ceab7d069f"/>
                <CaseCard className="col-md-4" id={1} necessities={["food","cloth"]} title="hi" description="this is the longedt text i can write" city="Bourj Hammoud" imageUrl="https://elements-video-cover-images-0.imgix.net/files/235261030/preview.jpg?auto=compress&crop=edges&fit=crop&fm=jpeg&h=800&w=1200&s=7f1d8f68f77edcf5c9d033ceab7d069f"/>
                <CaseCard className="col-md-4" id={1} necessities={["food","cloth"]} title="hi" description="this is the longedt text i can write" city="Bourj Hammoud" imageUrl="https://elements-video-cover-images-0.imgix.net/files/235261030/preview.jpg?auto=compress&crop=edges&fit=crop&fm=jpeg&h=800&w=1200&s=7f1d8f68f77edcf5c9d033ceab7d069f"/>
            </div>
            <Link className={classes.link} to="/cases/">
                <div className={classes.more}>
                    <span>{t("more")}</span>
                    <img src="/img/down.svg"/>
                </div>
            </Link>
        </section>
    )
}

export default HomeCasesList
