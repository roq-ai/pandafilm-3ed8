import { WatchlistInterface } from 'interfaces/watchlist';
import { ProviderInterface } from 'interfaces/provider';
import { GetQueryInterface } from 'interfaces';

export interface MovieInterface {
  id?: string;
  title: string;
  genre: string;
  release_date: any;
  rating?: number;
  duration?: number;
  provider_id: string;
  created_at?: any;
  updated_at?: any;
  watchlist?: WatchlistInterface[];
  provider?: ProviderInterface;
  _count?: {
    watchlist?: number;
  };
}

export interface MovieGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  genre?: string;
  provider_id?: string;
}
