/**
 * @Todo
 * Solucão temporaria
 */
const keys = {
  development: '6LffJrQZAAAAAHedh_ZdfpPAOQJWnaTHKwC2G3ms',
  production: '6LeZJLQZAAAAAGcDccQFHB3W0eVYG1H8pYMhmaLk',
};

export const RECAPTCHA_SITE_KEY = keys[process.env.API];
