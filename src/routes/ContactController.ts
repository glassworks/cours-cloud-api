import { Body, Get, Patch, Path, Put, Query, Route } from 'tsoa';
import { IContactMessage, IContactMessageCreate, IContactMessageUpdate } from '../model/IContactMessage';
import { ICreateResponse } from '../types/ICreateResponse';
import { IIndexResponse } from '../types/IIndexQuery';
import { IUpdateResponse } from '../types/IUpdateResponse';
import { Crud } from '../utility/Crud';

const READ_COLUMNS = ['messageId', 'familyName', 'givenName', 'email', 'gender', 'conditions', 'newsletter', 'message'];

/**
 * Les messages de contact
 */
@Route("/contact")
export class ContactController {

  /**
   * Récupérer des messages de contact
   */
  @Get()
  public async getMessages(
    /** La page (zéro-index) à récupérer */
    @Query() page?: string,    
    /** Le nombre d'éléments à récupérer (max 50) */
    @Query() limit?: string,    
  ): Promise<IIndexResponse<IContactMessage>> {    
    return Crud.Index<IContactMessage>({
      query: { page, limit }, 
      table: 'contact', 
      columns: READ_COLUMNS
    });
  }

  /**
   * Créer un nouveau message
   */
  @Put()
  public async createMessage(
    @Body() body: IContactMessageCreate
  ): Promise<ICreateResponse> {
    return Crud.Create<IContactMessageCreate>({
      body: body, 
      table: 'contact'
    });
  }

  /**
   * Récupérer un message à partir de son `messageId`
   */
  @Get('{messageId}')
  public async readMessage(
    @Path() messageId: number
  ): Promise<IContactMessage> {
    return Crud.Read<IContactMessage>({
      table: 'contact', 
      idKey: 'messageId', 
      idValue: messageId, 
      columns: READ_COLUMNS
    });
  }

  /**
   * Mettre à jour un message de contact étant donnée son `messageId`
   */
  @Patch('{messageId}')
  public async updateMessage(
    @Path() messageId: number,
    @Body() body: IContactMessageUpdate
  ): Promise<IUpdateResponse> {
    return Crud.Update<IContactMessageUpdate>({
      body: body, 
      table: 'contact', 
      idKey: 'messageId', 
      idValue: messageId
    });
  }
  
  /**
   * Supprimer un message
   */
  /*
  @Delete('{messageId}')
  public async deleteMessage(
    @Path() messageId: number,
  ): Promise<IUpdateResponse> {
    return Crud.Delete({
      table: 'contact', 
      idKey: 'messageId', 
      idValue: messageId
    });
  }
  */

}