// BootReasonEnumType is used by: bootNotification:BootNotificationRequest

// The Charging Station rebooted due to an application error
export const APPLICATION_RESET = 'ApplicationReset';

// The Charging Station rebooted due to a firmware update
export const FIRMWARE_UPDATE = 'FirmwareUpdate';

// The Charging Station rebooted due to a local reset command
export const LOCAL_RESET = 'LocalReset';

// The Charging Station powered up and registers itself with the CSMS
export const POWER_UP = 'PowerUp';

// The Charging Station rebooted due to a remote reset command
export const REMOTE_RESET = 'RemoteReset';

// The Charging Station rebooted due to a scheduled reset command
export const SCHEDULED_RESET = 'ScheduledReset';

// Requested by the CSMS via a TriggerMessage
export const TRIGGERED = 'Triggered';

// The boot reason is unknown
export const UNKNOWN = 'Unknown';

// The Charging Station rebooted due to an elapsed watchdog timer
export const WATCHDOG = 'Watchdog';