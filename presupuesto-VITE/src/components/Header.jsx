import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuestos from "./NuevoPresupuestos";

const Header = ( { 
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto 
} ) => {
    
    
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {
                isValidPresupuesto
                ? 
                    <ControlPresupuesto 
                        presupuesto = { presupuesto }
                    />
                :
                    <NuevoPresupuestos 
                        presupuesto = { presupuesto }
                        setPresupuesto = { setPresupuesto }
                        isValidPresupuesto = { isValidPresupuesto }
                        setIsValidPresupuesto = { setIsValidPresupuesto }
                    />
            }
        </header>
    );
}
 
export default Header;