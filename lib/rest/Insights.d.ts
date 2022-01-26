/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./insights/V1');
import { CallListInstance } from './insights/v1/call';
import { CallSummariesListInstance } from './insights/v1/callSummaries';
import { ConferenceListInstance } from './insights/v1/conference';
import { RoomListInstance } from './insights/v1/room';
import { SettingListInstance } from './insights/v1/setting';


declare class Insights extends Domain {
  /**
   * Initialize insights domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly callSummaries: CallSummariesListInstance;
  readonly calls: CallListInstance;
  readonly conferences: ConferenceListInstance;
  readonly rooms: RoomListInstance;
  readonly settings: SettingListInstance;
  readonly v1: V1;
}

export = Insights;
