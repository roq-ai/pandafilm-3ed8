import { MovieInterface } from 'interfaces/movie';
import { SeriesInterface } from 'interfaces/series';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProviderInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  movie?: MovieInterface[];
  series?: SeriesInterface[];
  user?: UserInterface[];

  _count?: {
    movie?: number;
    series?: number;
    user?: number;
  };
}

export interface ProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
}
