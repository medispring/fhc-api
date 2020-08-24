/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { XHR } from "./XHR"
import * as models from "../model/models"

export class fhcHubcontrollerApi {
  host: string
  headers: Array<XHR.Header>
  constructor(host: string, headers: any) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.Data) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }

  convertKmehrXMLtoJSONUsingPOST(message: string): Promise<models.Kmehrmessage | any> {
    let _body = null
    _body = message

    const _url = this.host + "/hub/convertKmehrXMLtoJSON" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/xml"))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.Kmehrmessage(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getAccessRightUsingGET(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    sv: string,
    sl: string,
    value: string,
    hubPackageId?: string
  ): Promise<models.GetAccessRightResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/access" +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (sv ? "&sv=" + sv : "") +
      (sl ? "&sl=" + sl : "") +
      (value ? "&value=" + value : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.GetAccessRightResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getHcpConsentUsingGET(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpSsin: string,
    hcpZip: string,
    hubPackageId?: string
  ): Promise<models.HcPartyConsentDto | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/hcpconsent/{hcpNihii}".replace("{hcpNihii}", hcpNihii + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.HcPartyConsentDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getPatientAuditTrailUsingGET(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    hubPackageId?: string,
    from?: number,
    to?: number,
    authorNihii?: string,
    authorSsin?: string,
    isGlobal?: boolean,
    breakTheGlassReason?: string,
    ssin?: string,
    sv?: string,
    sl?: string,
    id?: string
  ): Promise<models.GetPatientAuditTrailResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/trail" +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (from ? "&from=" + from : "") +
      (to ? "&to=" + to : "") +
      (authorNihii ? "&authorNihii=" + authorNihii : "") +
      (authorSsin ? "&authorSsin=" + authorSsin : "") +
      (isGlobal ? "&isGlobal=" + isGlobal : "") +
      (breakTheGlassReason ? "&breakTheGlassReason=" + breakTheGlassReason : "") +
      (ssin ? "&ssin=" + ssin : "") +
      (sv ? "&sv=" + sv : "") +
      (sl ? "&sl=" + sl : "") +
      (id ? "&id=" + id : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.GetPatientAuditTrailResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getPatientConsentUsingGET1(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    patientSsin: string,
    hubPackageId?: string
  ): Promise<models.Consent | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/consent/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.Consent(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getPatientUsingGET(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    patientSsin: string,
    hubPackageId?: string
  ): Promise<models.Patient | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/patient/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.Patient(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getTherapeuticLinksUsingGET(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    patientSsin: string,
    hubPackageId?: string,
    therLinkType?: string,
    from?: Date,
    to?: Date
  ): Promise<models.TherapeuticLinkMessageDto | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/therlink/{hcpNihii}/{patientSsin}"
        .replace("{hcpNihii}", hcpNihii + "")
        .replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (therLinkType ? "&therLinkType=" + therLinkType : "") +
      (from ? "&from=" + from : "") +
      (to ? "&to=" + to : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.TherapeuticLinkMessageDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getTransactionMessageUsingGET(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    ssin: string,
    sv: string,
    sl: string,
    id: string,
    hubPackageId?: string,
    breakTheGlassReason?: string,
    externalHubId?: string,
    externalHubName?: string
  ): Promise<models.Kmehrmessage | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/t/{ssin}/{sv}/{sl}/kmehr"
        .replace("{ssin}", ssin + "")
        .replace("{sv}", sv + "")
        .replace("{sl}", sl + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (id ? "&id=" + id : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (breakTheGlassReason ? "&breakTheGlassReason=" + breakTheGlassReason : "") +
      (externalHubId ? "&externalHubId=" + externalHubId : "") +
      (externalHubName ? "&externalHubName=" + externalHubName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.Kmehrmessage(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getTransactionSetMessageUsingGET(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    ssin: string,
    sv: string,
    sl: string,
    id: string,
    hubPackageId?: string,
    breakTheGlassReason?: string
  ): Promise<models.Kmehrmessage | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/ts/{ssin}/{sv}/{sl}/kmehr"
        .replace("{ssin}", ssin + "")
        .replace("{sv}", sv + "")
        .replace("{sl}", sl + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (id ? "&id=" + id : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (breakTheGlassReason ? "&breakTheGlassReason=" + breakTheGlassReason : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.Kmehrmessage(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getTransactionSetUsingGET(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    ssin: string,
    sv: string,
    sl: string,
    id: string,
    hubPackageId?: string,
    breakTheGlassReason?: string
  ): Promise<models.Kmehrmessage | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/ts/{ssin}/{sv}/{sl}"
        .replace("{ssin}", ssin + "")
        .replace("{sv}", sv + "")
        .replace("{sl}", sl + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (id ? "&id=" + id : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (breakTheGlassReason ? "&breakTheGlassReason=" + breakTheGlassReason : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.Kmehrmessage(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getTransactionUsingGET(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    ssin: string,
    sv: string,
    sl: string,
    id: string,
    hubPackageId?: string,
    breakTheGlassReason?: string,
    externalHubId?: string,
    externalHubName?: string
  ): Promise<models.Kmehrmessage | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/t/{ssin}/{sv}/{sl}"
        .replace("{ssin}", ssin + "")
        .replace("{sv}", sv + "")
        .replace("{sl}", sl + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (id ? "&id=" + id : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (breakTheGlassReason ? "&breakTheGlassReason=" + breakTheGlassReason : "") +
      (externalHubId ? "&externalHubId=" + externalHubId : "") +
      (externalHubName ? "&externalHubName=" + externalHubName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.Kmehrmessage(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getTransactionsListUsingGET(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    patientSsin: string,
    hubPackageId?: string,
    from?: number,
    to?: number,
    authorNihii?: string,
    authorSsin?: string,
    isGlobal?: boolean,
    breakTheGlassReason?: string
  ): Promise<Array<models.TransactionSummaryDto> | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/list/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (from ? "&from=" + from : "") +
      (to ? "&to=" + to : "") +
      (authorNihii ? "&authorNihii=" + authorNihii : "") +
      (authorSsin ? "&authorSsin=" + authorSsin : "") +
      (isGlobal ? "&isGlobal=" + isGlobal : "") +
      (breakTheGlassReason ? "&breakTheGlassReason=" + breakTheGlassReason : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.TransactionSummaryDto(it)))
      .catch(err => this.handleError(err))
  }
  putAccessRightUsingPOST(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    sv: string,
    sl: string,
    value: string,
    accessRight: string,
    accessNihii?: string,
    accessSsin?: string,
    hubPackageId?: string
  ): Promise<models.PutAccessRightResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/access" +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (sv ? "&sv=" + sv : "") +
      (sl ? "&sl=" + sl : "") +
      (value ? "&value=" + value : "") +
      (accessRight ? "&accessRight=" + accessRight : "") +
      (accessNihii ? "&accessNihii=" + accessNihii : "") +
      (accessSsin ? "&accessSsin=" + accessSsin : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/xml"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.PutAccessRightResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  putPatientUsingPOST(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    patientSsin: string,
    firstName: string,
    lastName: string,
    gender: string,
    dateOfBirth: number,
    hubPackageId?: string
  ): Promise<models.Patient | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/patient/{lastName}/{patientSsin}"
        .replace("{patientSsin}", patientSsin + "")
        .replace("{lastName}", lastName + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (firstName ? "&firstName=" + firstName : "") +
      (gender ? "&gender=" + gender : "") +
      (dateOfBirth ? "&dateOfBirth=" + dateOfBirth : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.Patient(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  putTransactionSetUsingPOST(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    hubId: number,
    patientSsin: string,
    message: string,
    hubPackageId?: string,
    hubApplication?: string
  ): Promise<models.PutTransactionSetResponse | any> {
    let _body = null
    _body = message

    const _url =
      this.host +
      "/hub/ts/{hubId}/{patientSsin}"
        .replace("{hubId}", hubId + "")
        .replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (hubApplication ? "&hubApplication=" + hubApplication : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/xml"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.PutTransactionSetResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  putTransactionUsingPOST(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    hubId: number,
    patientSsin: string,
    message: string,
    hubPackageId?: string,
    hubApplication?: string
  ): Promise<models.PutTransactionResponseDto | any> {
    let _body = null
    _body = message

    const _url =
      this.host +
      "/hub/t/{hubId}/{patientSsin}"
        .replace("{hubId}", hubId + "")
        .replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (hubApplication ? "&hubApplication=" + hubApplication : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/xml"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.PutTransactionResponseDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  registerPatientConsentUsingPOST1(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    patientSsin: string,
    hubPackageId?: string,
    patientEidCardNumber?: string,
    patientIsiCardNumber?: string
  ): Promise<models.PutPatientConsentResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/consent/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (patientEidCardNumber ? "&patientEidCardNumber=" + patientEidCardNumber : "") +
      (patientIsiCardNumber ? "&patientIsiCardNumber=" + patientIsiCardNumber : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.PutPatientConsentResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  registerTherapeuticLinkUsingPOST(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    patientSsin: string,
    hubPackageId?: string,
    patientEidCardNumber?: string,
    patientIsiCardNumber?: string
  ): Promise<models.PutTherapeuticLinkResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/therlink/{hcpNihii}/{patientSsin}"
        .replace("{hcpNihii}", hcpNihii + "")
        .replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (patientEidCardNumber ? "&patientEidCardNumber=" + patientEidCardNumber : "") +
      (patientIsiCardNumber ? "&patientIsiCardNumber=" + patientIsiCardNumber : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.PutTherapeuticLinkResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  revokeAccessRightUsingDELETE(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    sv: string,
    sl: string,
    value: string,
    accessNihii?: string,
    accessSsin?: string,
    hubPackageId?: string
  ): Promise<models.RevokeAccessRightResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/access" +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (sv ? "&sv=" + sv : "") +
      (sl ? "&sl=" + sl : "") +
      (value ? "&value=" + value : "") +
      (accessNihii ? "&accessNihii=" + accessNihii : "") +
      (accessSsin ? "&accessSsin=" + accessSsin : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("DELETE", _url, headers, _body)
      .then(doc => new models.RevokeAccessRightResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  revokePatientConsentUsingDELETE(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    patientSsin: string,
    hubPackageId?: string,
    patientEidCardNumber?: string,
    patientIsiCardNumber?: string
  ): Promise<models.RevokePatientConsentResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/consent/{patientSsin}".replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (patientEidCardNumber ? "&patientEidCardNumber=" + patientEidCardNumber : "") +
      (patientIsiCardNumber ? "&patientIsiCardNumber=" + patientIsiCardNumber : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("DELETE", _url, headers, _body)
      .then(doc => new models.RevokePatientConsentResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  revokeTherapeuticLinkUsingDELETE(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    patientSsin: string,
    hubPackageId?: string,
    patientEidCardNumber?: string,
    patientIsiCardNumber?: string
  ): Promise<models.RevokeTherapeuticLinkResponse | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/therlink/{hcpNihii}/{patientSsin}"
        .replace("{hcpNihii}", hcpNihii + "")
        .replace("{patientSsin}", patientSsin + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (patientEidCardNumber ? "&patientEidCardNumber=" + patientEidCardNumber : "") +
      (patientIsiCardNumber ? "&patientIsiCardNumber=" + patientIsiCardNumber : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("DELETE", _url, headers, _body)
      .then(doc => new models.RevokeTherapeuticLinkResponse(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  revokeTransactionUsingDELETE(
    endpoint: string,
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpLastName: string,
    hcpFirstName: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpZip: string,
    ssin: string,
    sv: string,
    sl: string,
    id: string,
    hubPackageId?: string,
    breakTheGlassReason?: string
  ): Promise<string | any> {
    let _body = null

    const _url =
      this.host +
      "/hub/t/{ssin}/{sv}/{sl}"
        .replace("{ssin}", ssin + "")
        .replace("{sv}", sv + "")
        .replace("{sl}", sl + "") +
      "?ts=" +
      new Date().getTime() +
      (endpoint ? "&endpoint=" + endpoint : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpZip ? "&hcpZip=" + hcpZip : "") +
      (id ? "&id=" + id : "") +
      (hubPackageId ? "&hubPackageId=" + hubPackageId : "") +
      (breakTheGlassReason ? "&breakTheGlassReason=" + breakTheGlassReason : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("DELETE", _url, headers, _body)
      .then(doc => JSON.parse(JSON.stringify(doc.body)))
      .catch(err => this.handleError(err))
  }
}
