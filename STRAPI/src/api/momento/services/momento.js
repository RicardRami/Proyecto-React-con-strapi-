'use strict';

/**
 * momento service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::momento.momento');
