import styles from './VerticalBar.module.css'
// context
import { useContext } from 'react'
import DataContext from '../../context/DataContext'

import { Bar } from '@reactchartjs/react-chart.js'

const VerticalBar = () => {
    const { countryData } = useContext(DataContext)
    const { confirmed, recovered, deaths } = countryData


    const barChart = confirmed ? (
        <Bar
            data={{
                labels: ['Total Cases', 'Active', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(255, 154, 0, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)'
                    ],
                    borderColor: [
                        'rgba(0, 0, 255, 1)',
                        'rgba(255, 154, 0, 1)',
                        'rgba(0, 255, 0, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderWidth: 1,
                    data: [confirmed.value, confirmed.value - recovered.value - deaths.value, recovered.value, deaths.value]
                }
                ]
            }}
            options={{
                legend: { display: false },
            }}
        />
    ) : null
    return (
        <div className={styles.container}>
            {barChart}
        </div>
    )
}

export default VerticalBar