 // Utility to get environment variables
 // PUBLIC_INTERFACE
export function getEnv(varName) {
  /** Returns the env var value or empty string if not set. Reads from process.env. */
  return process.env[varName] || '';
}
