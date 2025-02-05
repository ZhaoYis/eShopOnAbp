import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'EShopOnAbp',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44394',
    redirectUri: baseUrl,
    clientId: 'Web',
    responseType: 'code',
    scope: 'offline_access openid profile email phone IdentityService AdministrationService SaasService',
  },
  apis: {
    default: {
      url: 'https://localhost:44394',
      rootNamespace: 'EShopOnAbp',
    },
  },
  remoteEnv:{
    url: "/getEnvConfig",
    mergeStrategy:'deepmerge'
  }
} as Environment;
