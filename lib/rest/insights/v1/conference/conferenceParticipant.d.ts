/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

type ConferenceParticipantCallDirection = 'inbound'|'outbound';

type ConferenceParticipantCallState = 'answered'|'completed'|'busy'|'fail'|'noanswer'|'ringing'|'canceled';

type ConferenceParticipantCallType = 'carrier'|'client'|'sip';

type ConferenceParticipantJitterBufferSize = 'large'|'small'|'medium'|'off';

type ConferenceParticipantRegion = 'us1'|'us2'|'au1'|'br1'|'ie1'|'jp1'|'sg1'|'de1';

/**
 * Initialize the ConferenceParticipantList
 *
 * @param version - Version of the resource
 * @param conferenceSid - The conference_sid
 */
declare function ConferenceParticipantList(version: V1, conferenceSid: string): ConferenceParticipantListInstance;

/**
 * Options to pass to fetch
 *
 * @property events - The events
 * @property metrics - The metrics
 */
interface ConferenceParticipantInstanceFetchOptions {
  events?: string;
  metrics?: string;
}

interface ConferenceParticipantListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ConferenceParticipantContext;
  /**
   * Streams ConferenceParticipantInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: ConferenceParticipantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ConferenceParticipantInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ConferenceParticipantListInstanceEachOptions, callback?: (item: ConferenceParticipantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a conference_participant
   *
   * @param participantSid - The participant_sid
   */
  get(participantSid: string): ConferenceParticipantContext;
  /**
   * Retrieve a single target page of ConferenceParticipantInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ConferenceParticipantPage) => any): Promise<ConferenceParticipantPage>;
  /**
   * Retrieve a single target page of ConferenceParticipantInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ConferenceParticipantPage) => any): Promise<ConferenceParticipantPage>;
  /**
   * Lists ConferenceParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ConferenceParticipantInstance[]) => any): Promise<ConferenceParticipantInstance[]>;
  /**
   * Lists ConferenceParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ConferenceParticipantListInstanceOptions, callback?: (error: Error | null, items: ConferenceParticipantInstance[]) => any): Promise<ConferenceParticipantInstance[]>;
  /**
   * Retrieve a single page of ConferenceParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ConferenceParticipantPage) => any): Promise<ConferenceParticipantPage>;
  /**
   * Retrieve a single page of ConferenceParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ConferenceParticipantListInstancePageOptions, callback?: (error: Error | null, items: ConferenceParticipantPage) => any): Promise<ConferenceParticipantPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property events - The events
 * @property label - The label
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property participantSid - The participant_sid
 */
interface ConferenceParticipantListInstanceEachOptions {
  callback?: (item: ConferenceParticipantInstance, done: (err?: Error) => void) => void;
  done?: Function;
  events?: string;
  label?: string;
  limit?: number;
  pageSize?: number;
  participantSid?: string;
}

/**
 * Options to pass to list
 *
 * @property events - The events
 * @property label - The label
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property participantSid - The participant_sid
 */
interface ConferenceParticipantListInstanceOptions {
  events?: string;
  label?: string;
  limit?: number;
  pageSize?: number;
  participantSid?: string;
}

/**
 * Options to pass to page
 *
 * @property events - The events
 * @property label - The label
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property participantSid - The participant_sid
 */
interface ConferenceParticipantListInstancePageOptions {
  events?: string;
  label?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  participantSid?: string;
}

interface ConferenceParticipantPayload extends ConferenceParticipantResource, Page.TwilioResponsePayload {
}

interface ConferenceParticipantResource {
  account_sid: string;
  agent_audio: boolean;
  call_direction: ConferenceParticipantCallDirection;
  call_sid: string;
  call_state: ConferenceParticipantCallState;
  call_type: ConferenceParticipantCallType;
  coached_participants: string[];
  conference_region: ConferenceParticipantRegion;
  conference_sid: string;
  country_code: string;
  duration_seconds: number;
  events: object;
  from: string;
  is_coach: boolean;
  is_moderator: boolean;
  jitter_buffer_size: ConferenceParticipantJitterBufferSize;
  join_time: Date;
  label: string;
  leave_time: Date;
  metrics: object;
  outbound_queue_length: number;
  outbound_time_in_queue: number;
  participant_region: ConferenceParticipantRegion;
  participant_sid: string;
  properties: object;
  quality_issues: number;
  to: string;
  url: string;
  whisper: string;
}

interface ConferenceParticipantSolution {
  conferenceSid?: string;
}


declare class ConferenceParticipantContext {
  /**
   * Initialize the ConferenceParticipantContext
   *
   * @param version - Version of the resource
   * @param conferenceSid - The conference_sid
   * @param participantSid - The participant_sid
   */
  constructor(version: V1, conferenceSid: string, participantSid: string);

  /**
   * fetch a ConferenceParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConferenceParticipantInstance) => any): Promise<ConferenceParticipantInstance>;
  /**
   * fetch a ConferenceParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: ConferenceParticipantInstanceFetchOptions, callback?: (error: Error | null, items: ConferenceParticipantInstance) => any): Promise<ConferenceParticipantInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class ConferenceParticipantInstance extends SerializableClass {
  /**
   * Initialize the ConferenceParticipantContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param conferenceSid - The conference_sid
   * @param participantSid - The participant_sid
   */
  constructor(version: V1, payload: ConferenceParticipantPayload, conferenceSid: string, participantSid: string);

  private _proxy: ConferenceParticipantContext;
  accountSid: string;
  agentAudio: boolean;
  callDirection: ConferenceParticipantCallDirection;
  callSid: string;
  callState: ConferenceParticipantCallState;
  callType: ConferenceParticipantCallType;
  coachedParticipants: string[];
  conferenceRegion: ConferenceParticipantRegion;
  conferenceSid: string;
  countryCode: string;
  durationSeconds: number;
  events: any;
  /**
   * fetch a ConferenceParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConferenceParticipantInstance) => any): Promise<ConferenceParticipantInstance>;
  /**
   * fetch a ConferenceParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: ConferenceParticipantInstanceFetchOptions, callback?: (error: Error | null, items: ConferenceParticipantInstance) => any): Promise<ConferenceParticipantInstance>;
  from: string;
  isCoach: boolean;
  isModerator: boolean;
  jitterBufferSize: ConferenceParticipantJitterBufferSize;
  joinTime: Date;
  label: string;
  leaveTime: Date;
  metrics: any;
  outboundQueueLength: number;
  outboundTimeInQueue: number;
  participantRegion: ConferenceParticipantRegion;
  participantSid: string;
  properties: any;
  qualityIssues: number;
  to: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  whisper: string;
}


declare class ConferenceParticipantPage extends Page<V1, ConferenceParticipantPayload, ConferenceParticipantResource, ConferenceParticipantInstance> {
  /**
   * Initialize the ConferenceParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ConferenceParticipantSolution);

  /**
   * Build an instance of ConferenceParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConferenceParticipantPayload): ConferenceParticipantInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ConferenceParticipantCallDirection, ConferenceParticipantCallState, ConferenceParticipantCallType, ConferenceParticipantContext, ConferenceParticipantInstance, ConferenceParticipantInstanceFetchOptions, ConferenceParticipantJitterBufferSize, ConferenceParticipantList, ConferenceParticipantListInstance, ConferenceParticipantListInstanceEachOptions, ConferenceParticipantListInstanceOptions, ConferenceParticipantListInstancePageOptions, ConferenceParticipantPage, ConferenceParticipantPayload, ConferenceParticipantRegion, ConferenceParticipantResource, ConferenceParticipantSolution }
