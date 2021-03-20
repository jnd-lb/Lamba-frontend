import React from 'react'
import PropTypes from "prop-types"
import { useTranslation } from 'react-i18next';
import classes from './NecessityBagde.module.scss';

function NecessityBagde(props) {
    const { t, i18n } = useTranslation();
    let imgSrc;
    let text;
    switch (props.type) {
        case "food":
            imgSrc= "/img/box.svg";
            text= t('necessities.food');
            break;            

        case "cash":
            imgSrc= "/img/hand.svg";
            text= t('necessities.cash');
            break;            
            
            case "cloth":
                imgSrc= "/img/tshirt.svg";
                text= t('necessities.cloth');
                break;            
             
            
        case "medicine":
            imgSrc= "/img/medicine.svg";
            text= t('necessities.medicine');
            break;            
                
        default:
            imgSrc= null;
            text="NOT EXPECTED";
    }

    return (
        <div className={classes.container}>
            <img src={imgSrc} />
            <span>{text}</span>
        </div>
    )
}

NecessityBagde.propTypes = {

}

export default NecessityBagde
