/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V2 = require('./verify/V2');
import { ServiceListInstance } from './verify/v2/service';


declare class Verify extends Domain {
  /**
   * Initialize verify domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly services: ServiceListInstance;
  readonly v2: V2;
}

export = Verify;