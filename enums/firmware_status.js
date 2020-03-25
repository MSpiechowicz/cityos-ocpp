// Status of a firmware download.
// A value with "Intermediate state" in the description, is an intermediate state, update process is not finished.
// A value with "Failure end state" in the description, is an end state, update process has stopped, update failed.
// A value with "Successful end state" in the description, is an end state, update process has stopped, update successful.
// FirmwareStatusEnumType is used by: firmwareStatusNotification:FirmwareStatusNotificationRequest

// Description
export const VALUE = 'Value';

// Intermediate state - New firmware has been downloaded by Charging Station
export const DOWNLOADED = 'Downloaded';

// Failure end state - Charging Station failed to download firmware
export const DOWNLOAD_FAILED = 'DownloadFailed';

// Intermediate state - Firmware is being downloaded
export const DOWNLOADING = 'Downloading';

// Intermediate state - Downloading of new firmware has been scheduled
export const DOWNLOAD_SCHEDULED = 'DownloadScheduled';

// Intermediate state - Downloading has been paused
export const DOWNLOAD_PAUSED = 'DownloadPaused';

// Charging Station is not performing firmware update related tasks. Status Idle SHALL only be used as in a
// FirmwareStatusNotificationRequest that was triggered by TriggerMessageRequest
export const IDLE = 'Idle';

// Failure end state - Installation of new firmware has failed
export const INSTALLATION_FAILED = 'InstallationFailed';

// Intermediate state - Firmware is being installed
export const INSTALLING = 'Installing';

// Successful end state = New firmware has successfully been installed in Charging Station
export const INSTALLED = 'Installed';

// Intermediate state - Charging Station is about to reboot to activate new firmware. This status MAY be omitted
// if a reboot is an integral part of the installation and cannot be reported separately
export const INSTALL_REBOOTING = 'InstallRebooting';

// Intermediate state - Installation of the downloaded firmware is scheduled to take place on installDateTime
// given in UpdateFirmware request
export const INSTALL_SCHEDULED = 'InstallScheduled';

// Failure end state - Verification of the new firmware (e.g. using a checksum or some other means) has failed
// and installation will not proceed. (Final failure state)
export const INSTALL_VERIFICATION_FAILED = 'InstallVerificationFailed';

// Failure end state - The firmware signature is not valid
export const INVALID_SIGNATURE = 'InvalidSignature';

// Intermediate state - Provide signature successfully verified
export const SIGNATURE_VERIFIED = 'SignatureVerified';