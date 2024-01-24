/**
 * Paramètres de la requête de type **indexe**, notamment pour la pagination.
 */
export interface IIndexQuery {
  /**
   * Le numéro de la page a récupérer
   */
  page?: string;
  /**
   * Le nombre de lignes sur chaque page
   */
  limit?: string;  
}

export type IReadWhere = Record<string, string|number>;

/* Ici, on utilise un générique, précisé par <T>
Ca veut dire qu'on va passer un autre type comme paramètre, qui sera utilisé à sa place
ex. const res : IIndexResponse<IUser> = {
  rows: [] // <-- Ici on ne peut juste affecter les structures de type IUser  
}
*/
export interface IIndexResponse<T> {
  /**
   * Le numéro de la page récupérée
   */
  page: number;
  /**
   * Le nombre de lignes dans cette page
   */
  limit: number;
  /**
   * La quantité de lignes en total
   */
  total: number;
  /**
   * Les données retournées
   */
  rows: T[];
}

/**
 * Structure retourné par MySQL quand on fait une requête de type `count(*)` 
 */
export interface ITableCount {
  total: number;
}