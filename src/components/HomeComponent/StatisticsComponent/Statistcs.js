import React from 'react'
import classes from "./Statistics.module.scss";
import StatisticsItem from './StatisticsItem/StatisticsItem';
import { useTranslation } from 'react-i18next';


function Statistcs() {
    const { t, i18n } = useTranslation();
    return (
        <section className={classes.container}>
            <StatisticsItem data="35K" imageUrl="/img/box.svg"  title={t('statistics.caseSolved')} name="cases"/>
            <StatisticsItem data="10K" imageUrl="/img/family.svg" title={t('statistics.familiesHelped')} name="families"/>
            <StatisticsItem data="10M" imageUrl="/img/donation.svg" title={t('statistics.fundRaised')} name="donations"/>
        </section>
    )
}

export default Statistcs
