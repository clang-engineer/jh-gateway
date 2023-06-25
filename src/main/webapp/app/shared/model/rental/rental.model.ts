export interface IRental {
  id?: number;
  title?: string;
  description?: string | null;
}

export const defaultValue: Readonly<IRental> = {};
