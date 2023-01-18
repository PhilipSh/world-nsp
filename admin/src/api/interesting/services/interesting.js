'use strict';

/**
 * interesting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::interesting.interesting');
