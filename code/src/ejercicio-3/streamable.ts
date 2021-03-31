/**
 * Define una interfaz que permita implementar colecciones de contenido audiovisual
 */
export interface Streamable <T>{
    /**
     * Obtiene el número de elementos de la colección
     */
    getNumberOfElements():number;
    /**
     * Busca un elemento en la colección
     * @param criterio Criterio de búsqueda
     * @param val Valor de búsqueda
     */
    searchElement(criterio: string, val: string|number): T[];
    /**
     * Añade un elemento a la colección
     * @param element Elemento a añadir
     */
    addElement(element: T):void;
    /**
     * Elimina un elemento de la colección
     * @param id ID del elemento a eliminar
     */
    removeElement(id: number):void;
}