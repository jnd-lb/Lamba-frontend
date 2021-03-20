import React, { useEffect, useState } from 'react'
import CaseCard from '../SharedComponents/CaseCard/CaseCard'
import FilterComponent from './FilterComponent/FilterComponent'
import classes from "./Cases.module.scss"

//API
const casesEndpoint = "http://localhost:8000/api/case";

function Cases() {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        fetch(casesEndpoint)
            .then(response => response.json())
            .then(obj => {
                setCases(obj.cases.data)
                console.log("cases", obj.cases.data)
            })
            .catch();
    }, []);

    useEffect(() => {
        console.log("cases changed");
    }, [cases]);

    const renderCases = () => {
        return <div className="row">
            {cases.map(c => {
                return <CaseCard
                    className="col-md-4"
                    id={c.id}
                    necessities={c.necessities.map(n => n.name_in_english)}
                    title={c.title}
                    description={c.description}
                    city={c.city}
                    imageUrl={c.images.filter(i => i.is_main === 1)[0].image_name} />
            })}
        </div>
    }

    return (
        <div className={classes.container}>
            <FilterComponent />
            {renderCases()}
        </div>
    )
}

export default Cases
