
// Définition d'un structure IUser
// A noter, le ? veut dire que le champ est optionnel

export interface IContactMessage {
  /**
   * Identifiant unique du message
   */
  messageId: number;

  /**
   * L'adresse e-mail
   */
  email: string;

  /**
   * Le nom de famille
   */
  familyName?: string;

  /**
   * Le prénom
   */
  givenName?: string;

  /**
   * Le genre de l'utilisateur
   */
  gender?: 'male'|'female'|'other'|'unknown';

  /**
   * Boolean qui indique si l'utilisateur a accepté des conditions générales d'utilisation
   */
  conditions?: boolean;

  /**
   * Boolean qui indique si l'utilisateur a accepté de recevoir des communications
   */
  newsletter?: boolean;

  /**
   * Le text du message
   */
  message: string;
}

// Outils de manipulation des types :
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// Ici, on rend tous les champs "lecture seul". Typescript ne va pas autoriser l'affectation des champs
export type IContactMessageRO = Readonly<IContactMessage>;

export type IContactMessageCreate = Omit<IContactMessage, 'messageId'>;

export type IContactMessageUpdate = Partial<IContactMessageCreate>;