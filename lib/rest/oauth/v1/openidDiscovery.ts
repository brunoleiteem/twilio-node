/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Oauth
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export interface OpenidDiscoveryContext {
  /**
   * Fetch a OpenidDiscoveryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OpenidDiscoveryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any
  ): Promise<OpenidDiscoveryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OpenidDiscoveryContextSolution {}

export class OpenidDiscoveryContextImpl implements OpenidDiscoveryContext {
  protected _solution: OpenidDiscoveryContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/.well-known/openid-configuration`;
  }

  fetch(
    callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any
  ): Promise<OpenidDiscoveryInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) => new OpenidDiscoveryInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface OpenidDiscoveryPayload extends OpenidDiscoveryResource {}

interface OpenidDiscoveryResource {
  issuer: string;
  authorization_endpoint: string;
  device_authorization_endpoint: string;
  token_endpoint: string;
  userinfo_endpoint: string;
  revocation_endpoint: string;
  jwk_uri: string;
  response_type_supported: Array<string>;
  subject_type_supported: Array<string>;
  id_token_signing_alg_values_supported: Array<string>;
  scopes_supported: Array<string>;
  claims_supported: Array<string>;
  url: string;
}

export class OpenidDiscoveryInstance {
  protected _solution: OpenidDiscoveryContextSolution;
  protected _context?: OpenidDiscoveryContext;

  constructor(protected _version: V1, payload: OpenidDiscoveryResource) {
    this.issuer = payload.issuer;
    this.authorizationEndpoint = payload.authorization_endpoint;
    this.deviceAuthorizationEndpoint = payload.device_authorization_endpoint;
    this.tokenEndpoint = payload.token_endpoint;
    this.userinfoEndpoint = payload.userinfo_endpoint;
    this.revocationEndpoint = payload.revocation_endpoint;
    this.jwkUri = payload.jwk_uri;
    this.responseTypeSupported = payload.response_type_supported;
    this.subjectTypeSupported = payload.subject_type_supported;
    this.idTokenSigningAlgValuesSupported =
      payload.id_token_signing_alg_values_supported;
    this.scopesSupported = payload.scopes_supported;
    this.claimsSupported = payload.claims_supported;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * The URL of the party that will create the token and sign it with its private key.
   */
  issuer: string;
  /**
   * The endpoint that validates all authorization requests.
   */
  authorizationEndpoint: string;
  /**
   * The endpoint that validates all device code related authorization requests.
   */
  deviceAuthorizationEndpoint: string;
  /**
   * The URL of the token endpoint. After a client has received an authorization code, that code is presented to the token endpoint and exchanged for an identity token, an access token, and a refresh token.
   */
  tokenEndpoint: string;
  /**
   * The URL of the user info endpoint, which returns user profile information to a client. Keep in mind that the user info endpoint returns only the information that has been requested.
   */
  userinfoEndpoint: string;
  /**
   * The endpoint used to revoke access or refresh tokens issued by the authorization server.
   */
  revocationEndpoint: string;
  /**
   * The URL of your JSON Web Key Set. This set is a collection of JSON Web Keys, a standard method for representing cryptographic keys in a JSON structure.
   */
  jwkUri: string;
  /**
   * A collection of response type supported by authorization server.
   */
  responseTypeSupported: Array<string>;
  /**
   * A collection of subject by authorization server.
   */
  subjectTypeSupported: Array<string>;
  /**
   * A collection of JWS signing algorithms supported by authorization server to sign identity token.
   */
  idTokenSigningAlgValuesSupported: Array<string>;
  /**
   * A collection of scopes supported by authorization server for identity token
   */
  scopesSupported: Array<string>;
  /**
   * A collection of claims supported by authorization server for identity token
   */
  claimsSupported: Array<string>;
  url: string;

  private get _proxy(): OpenidDiscoveryContext {
    this._context =
      this._context || new OpenidDiscoveryContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a OpenidDiscoveryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OpenidDiscoveryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any
  ): Promise<OpenidDiscoveryInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      issuer: this.issuer,
      authorizationEndpoint: this.authorizationEndpoint,
      deviceAuthorizationEndpoint: this.deviceAuthorizationEndpoint,
      tokenEndpoint: this.tokenEndpoint,
      userinfoEndpoint: this.userinfoEndpoint,
      revocationEndpoint: this.revocationEndpoint,
      jwkUri: this.jwkUri,
      responseTypeSupported: this.responseTypeSupported,
      subjectTypeSupported: this.subjectTypeSupported,
      idTokenSigningAlgValuesSupported: this.idTokenSigningAlgValuesSupported,
      scopesSupported: this.scopesSupported,
      claimsSupported: this.claimsSupported,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface OpenidDiscoverySolution {}

export interface OpenidDiscoveryListInstance {
  _version: V1;
  _solution: OpenidDiscoverySolution;
  _uri: string;

  (): OpenidDiscoveryContext;
  get(): OpenidDiscoveryContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function OpenidDiscoveryListInstance(
  version: V1
): OpenidDiscoveryListInstance {
  const instance = (() => instance.get()) as OpenidDiscoveryListInstance;

  instance.get = function get(): OpenidDiscoveryContext {
    return new OpenidDiscoveryContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}