import React from 'react'
import cn from "classnames"
import classes from "./Hero.module.scss"
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <div className={classes.container}> 
      <div className={classes.container__wrapper}>
        <h1 className={classes.container__headline}>
        <span className={classes.container__headline__important}>
        {t('hero.together')}
        </span>
        <span >
        {t('hero.weCanMakeDifference')}
        </span>
        </h1>
        <p className={classes.container__description}>
        {t('hero.description')}
        </p>
        <button className={classes.container__button}> {t('hero.button')}</button>
        </div>
      </div>
    )
}

export default Hero