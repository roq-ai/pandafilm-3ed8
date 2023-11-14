import { UserInterface } from 'interfaces/user';
import { MovieInterface } from 'interfaces/movie';
import { SeriesInterface } from 'interfaces/series';
import { GetQueryInterface } from 'interfaces';

export interface WatchlistInterface {
  id?: string;
  user_id: string;
  movie_id: string;
  series_id: string;
  added_at: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  movie?: MovieInterface;
  series?: SeriesInterface;
  _count?: {};
}

export interface WatchlistGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  movie_id?: string;
  series_id?: string;
}
