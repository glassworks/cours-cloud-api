export interface IPhoto {
  photoId: number,
  url: string,
  filename?: string,
  mimeType?: string
}

export type IPhotoCreate = Omit<IPhoto, 'photoId'>;
export type IPhotoUpdate = Partial<IPhotoCreate>;
export type IPhotoRO = Readonly<IPhoto>;