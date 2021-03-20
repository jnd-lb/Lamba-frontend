import classes from './Footer.module.scss'
import React from 'react'

function Footer() {
    return (
        <footer>
            <div className={classes.topWrapper}>
                <div className={classes.container}>
                    
                </div>
            </div>



            <section className={classes.bottom}>
            <span>
             Made with tea 🍵 by Jihad Noureddine 
            </span>
            <span>•</span>
            <span>Contact The Dev</span>
            <span>•</span>
            <span>Donate</span>
            </section>
        </footer>
    )
}

export default Footer
