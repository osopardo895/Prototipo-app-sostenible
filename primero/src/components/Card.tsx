import { type IniciativaSostenible } from '../data/Ods.tsx'

export const Card = ({ itemOds }: { itemOds: IniciativaSostenible }) => {
    return (
        <div className="card">
            <h3>{itemOds.id}. {itemOds.nombre}</h3>
            <p>{itemOds.odsPrincipal}</p>
            <p>{itemOds.presupuesto}</p>
            <p>{itemOds.estado}</p>
            <p>{itemOds.toneladasCO2Ahorradas}</p>
        </div>
    )
}