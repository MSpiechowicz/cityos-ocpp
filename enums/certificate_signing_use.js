// CertificateSigningUseEnumType is used by: signCertificate:SignCertificateRequest , certificateSigned:CertificateSignedRequest

// Client side certificate used by the Charging Station to connect the the CSMS
export const CHARGING_STATION_CERTIFICATE = 'ChargingStationCertificate';

// Use for certificate for 15118 connections. This means that the certificate should be derived from the V2G root
export const V2G_CERTIFICATE = 'V2GCertificate';