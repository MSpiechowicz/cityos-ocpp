// Enumeration for indicating from which source a charging limit originates.

// ChargingLimitSourceEnumType is used by: 
// notifyChargingLimit:NotifyChargingLimitRequest.ChargingLimitType
// clearedChargingLimit:ClearedChargingLimitRequest
// getChargingProfiles:GetChargingProfilesRequest.ChargingProfileCriterionType
// reportChargingProfiles:ReportChargingProfilesRequest

// Indicates that an Energy Management System has sent a charging limit
export const EMS = 'EMS';

// Indicates that an external source, not being an EMS or system operator, has sent a charging limit
export const OTHER = 'Other';

// Indicates that a System Operator (DSO or TSO) has sent a charging limit
export const SO = 'SO';

// Indicates that the CSO has set this charging profile
export const CSO = 'CSO';