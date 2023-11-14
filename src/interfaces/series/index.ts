import { WatchlistInterface } from 'interfaces/watchlist';
import { ProviderInterface } from 'interfaces/provider';
import { GetQueryInterface } from 'interfaces';

export interface SeriesInterface {
  id?: string;
  title: string;
  genre: string;
  release_date: any;
  rating?: number;
  seasons?: number;
  provider_id: string;
  created_at?: any;
  updated_at?: any;
  watchlist?: WatchlistInterface[];
  provider?: ProviderInterface;
  _count?: {
    watchlist?: number;
  };
}

export interface SeriesGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  genre?: string;
  provider_id?: string;
}
