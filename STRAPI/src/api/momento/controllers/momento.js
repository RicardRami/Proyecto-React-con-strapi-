'use strict';

/**
 * momento controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::momento.momento');
