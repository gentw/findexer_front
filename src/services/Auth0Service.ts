import { Auth0Plugin, createAuth0 } from '@auth0/auth0-vue';

const domain = process.env?.VUE_APP_AUTH0_DOMAIN || '';
const client_id = process.env?.VUE_APP_AUTH0_CLIENT_ID || '';
const audience = process.env?.VUE_APP_AUTH0_AUDIENCE || '';

export const Auth0Service: Auth0Plugin = createAuth0({
    domain: domain as string,
    client_id: client_id as string,
    audience: audience as string,
    redirect_uri: window.location.origin as string
})
