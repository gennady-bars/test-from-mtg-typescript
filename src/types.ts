export type AddressType = {
  loading: boolean;
  error: any;
  file: FileType | null | undefined;
};

export type FileType = {
  id: number;
  name: string;
  contents?: string;
};