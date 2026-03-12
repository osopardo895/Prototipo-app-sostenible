import { useState } from 'react'
import { type IniciativaSostenible } from '../data/Ods.tsx'

export const Card = ({ itemOds }: { itemOds: IniciativaSostenible }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="card"
            style={{ boxShadow: isHovered ? `0 0 10px 6px ${itemOds.color}` : '0 10px 18px rgba(0,0,0,0.12)' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3>{itemOds.id}. {itemOds.nombre}</h3>
            <p style={{ fontWeight: 'bold', color: 'purple' }}>{itemOds.odsPrincipal}</p>
            <p>Presupuesto: {itemOds.presupuesto} €</p>
            <p>Estado: <span style={{ color: itemOds.estado === 'Planificado' ? 'orange' : itemOds.estado === 'En Progreso' ? 'blue' : itemOds.estado === 'Completado' ? 'green' : 'red' }}>{itemOds.estado}</span></p>
            {itemOds.toneladasCO2Ahorradas && (
                <p className='co2'>CO₂ ahorrado: {itemOds.toneladasCO2Ahorradas} toneladas</p>
            )}
        </div>
    )
}