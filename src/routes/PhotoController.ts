import { Get, Query, Route } from 'tsoa';
import { IPhoto } from '../model/IPhoto';
import { IIndexResponse } from '../types/IIndexQuery';
import { Crud } from '../utility/Crud';

const READ_COLUMNS = ['photoId', 'url', 'filename', 'mimeType'];

/**
 * La liste des photos
 */
@Route("/photo")
export class PhotoController {

  /**
   * Récupérer la liste de photos disponibled
   */
  @Get()
  public async getPhotos(
    /** La page (zéro-index) à récupérer */
    @Query() page?: string,    
    /** Le nombre d'éléments à récupérer (max 50) */
    @Query() limit?: string,    
  ): Promise<IIndexResponse<IPhoto>> {    
    return Crud.Index<IPhoto>({
      query: { page, limit }, 
      table: 'photo', 
      columns: READ_COLUMNS
    });
  }


}