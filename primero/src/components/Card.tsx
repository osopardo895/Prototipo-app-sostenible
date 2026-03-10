import { type IniciativaSostenible } from '../data/Ods.tsx'

export const Card = ({ itemOds }: { itemOds: IniciativaSostenible }) => {
    return (
        <div className="card">
            <h3>{itemOds.id}. {itemOds.nombre}</h3>
            <p style={{ fontWeight: 'bold', color: 'blue' }}>{itemOds.odsPrincipal}</p>
            <p>Presupuesto: {itemOds.presupuesto} €</p>
            <p>Estado: <span style={{ color: 'red' }}>{itemOds.estado}</span></p>
            {itemOds.toneladasCO2Ahorradas && (
                <p>CO₂ ahorrado: {itemOds.toneladasCO2Ahorradas} toneladas</p>
            )}
        </div>
    )
}