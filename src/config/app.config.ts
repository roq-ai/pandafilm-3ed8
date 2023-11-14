interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Account Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Account Owner', 'Profile User', 'Administrator'],
  tenantName: 'Provider',
  applicationName: 'PandaFilm',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View movies and series', 'Add movies and series to watchlist', 'View providers', 'View profile'],
  ownerAbilities: [
    'Manage subscription',
    'Manage provider',
    'Manage user',
    'Manage profile',
    'Manage movie',
    'Manage series',
    'Manage watchlist',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8df5c709-f460-4498-8b53-da06c96b1896',
};
