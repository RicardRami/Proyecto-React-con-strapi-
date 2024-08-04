'use strict';

/**
 * momento router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::momento.momento');
