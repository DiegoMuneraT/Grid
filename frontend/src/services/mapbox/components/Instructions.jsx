import React from 'react'

const Instructions = ({ duration, steps }) => {
    return (
        <div style={{ maxWidth: '400px', overflow: 'auto' }}>
            <p>
                <strong>Duracion del viaje: {duration} mins 🚙</strong>
            </p>
            <ol>
                {steps
                    ? steps.map((step, index) => <li key={index}>{step}</li>)
                    : <li>No hay instrucciones disponibles</li>
                }
            </ol>
        </div>
    )
}

export default Instructions