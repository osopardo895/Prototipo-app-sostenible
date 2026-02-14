// PASO 1: Modelado de Datos (Enums, Interfaces y Tipos Básicos

enum listaODS {
    FinDeLaPobreza = 'ODS 1',
    HambreCero = 'ODS 2',
    SaludYBienestar = 'ODS 3',
    EducacionDeCalidad = 'ODS 4',
    IgualdadDeGenero = 'ODS 5',
    AguaLimpiaYSaneamiento = 'ODS 6',
    EnergiaAsequibleYNoContaminante = 'ODS 7',
    TrabajoDecenteYCrecimientoEconomico = 'ODS 8',
    IndustriaInnovacionEInfraestructura = 'ODS 9',
    ReduccionDesigualdades = 'ODS 10',
    CiudadesYComunidadesSostenibles = 'ODS 11',
    ProduccionYConsumoResponsables = 'ODS 12',
    AccionPorElCLima = 'ODS 13',
    VidaSubmarina = 'ODS 14',
    VidaDeEcosistemasTerrestres = 'ODS 15',
    PazJusticiaEInstitucionesSolidas = 'ODS 16',
    AlianzasParaLograrLosObjetivos = 'ODS 17'
}

type EstadosOds = 'Planificado' | 'En Progreso' | 'Completado' | 'Auditado';

interface IniciativaSostenible {
    id:number;
    nombre:string;
    odsPrincipal:listaODS; // Obliga a usar un valor de la lista
    presupuesto:number;
    estado: EstadosOds;
    toneladasCO2Ahorradas?: number; //Opcional, (símbolo ?)
}


// PASO 2: Lógica y Manipulación de Arrays

// 1. Crear un array de iniciativas.
const iniciativas: IniciativaSostenible[] = [
    {
    id: 1,
    nombre: 'Paneles Solares en Sede Central',
    odsPrincipal: listaODS.EnergiaAsequibleYNoContaminante,
    presupuesto: 50000,
    estado: 'En Progreso',
    toneladasCO2Ahorradas: 120
    },
    {
    id: 2,
    nombre: 'Programa de Mentoring para Mujeres Tech',
    odsPrincipal: listaODS.IgualdadDeGenero,
    presupuesto: 15000, 
    estado: 'Completado'
    },
    {
    id: 3,
    nombre: 'Flota de vehículos eléctricos',
    odsPrincipal: listaODS.AccionPorElCLima,
    presupuesto: 80000,
    estado: 'Planificado',
    toneladasCO2Ahorradas: 300
    }
];

// 2. Filtrar solo las que tengan impacto climático (ODS 13)
function filtrarProyectosClimaticos(proyectos: IniciativaSostenible[]):IniciativaSostenible[]{
    return proyectos.filter(p => p.odsPrincipal === listaODS.AccionPorElCLima);
}

// 3. Calcular el presupuesto total invertido en sostenibilidad.
const presupuestoTotal = iniciativas.reduce((total, proyecto) => total + proyecto.presupuesto, 0);
console.log(`Presupuesto total invertido en sostenibilidad: $${presupuestoTotal}`);

// Reto: Calcular el total de CO2 ahorrado (debe manejar el campo opcional)
const totalCO2 = iniciativas.reduce((acc, curr) => acc + (curr.toneladasCO2Ahorradas || 0), 0);
console.log(`Total de CO2 ahorrado: ${totalCO2} toneladas`);


 // PASO 3: Nivel Avanzado (Genéricos y Utility Types)

// Definimos tipos de impacto específicos
interface ImpactoAmbiental {
    co2Reducido: number;
    aguaAhorrada: number;
}

interface ImpactoSocial {
    personasBeneficiadas: number;
    horasFormacion: number;
}

// Interfaz Genérica: T define qué tipo de impacto tiene
interface Proyecto<T> {
    nombre: string;
    ods: listaODS;
    presupuesto: number;
    impacto: T;
}

// Creamos proyectos específicos
const proyectoSolar: Proyecto<ImpactoAmbiental> = {
    nombre: "Techo Solar",
    ods: listaODS.EnergiaAsequibleYNoContaminante,
    presupuesto: 20000,
    impacto: { co2Reducido: 500, aguaAhorrada: 0}
}

const proyectoEdu: Proyecto<ImpactoSocial> = {
    nombre: "Escuela de Código Inclusiva",
    ods: listaODS.FinDeLaPobreza,
    presupuesto: 10000,
    impacto: { personasBeneficiadas: 50, horasFormacion: 200}
}

// Utility Type: Omit
// Queremos publicar el proyecto en la web, pero SIN mostrar el dinero
type ProyectoPublico<T> = Omit<Proyecto<any>, 'presupuesto'>;

function publicarProyecto(p:ProyectoPublico<any>) {
    console.log(`Publicando: ${p.nombre} - ODS: ${p.ods}`);
    // p.presupuesto daría error aquí, ¡seguridad conseguida!
    return (
        <>
            <h1>{`Proyecto:${p.nombre} - ODS: ${p.ods}`}</h1>
        </>
    )
}


export default function VistaODS() {
    return publicarProyecto(proyectoSolar);
};