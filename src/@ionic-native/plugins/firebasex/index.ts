import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Firebasex
 * @description
 * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google firebasex to your Cordova project! Android and iOS supported (including iOS 10).
 *
 * @usage
 * ```typescript
 * import { Firebasex } from '@ionic-native/firebasex/ngx';
 *
 * constructor(private firebasex: Firebasex) { }
 *
 * ...
 *
 * this.firebasex.getToken()
 *   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
 *   .catch(error => console.error('Error getting token', error));
 *
 * this.firebasex.onMessageReceived()
 *    .subscribe(data => console.log(`User opened a notification ${data}`));
 *
 * this.firebasex.onTokenRefresh()
 *   .subscribe((token: string) => console.log(`Got a new token ${token}`));
 *
 * ```
 */
@Plugin({
  pluginName: 'Firebasex',
  plugin: 'cordova-plugin-firebasex',
  pluginRef: 'firebasexPlugin',
  repo: 'https://github.com/dpa99c/cordova-plugin-firebasex',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Firebasex extends IonicNativePlugin {


  // TODO: Mettre un commentaire correct
  /**
   * Set icon badge number. Set to 0 to clear the badge.
   * @param {number} number
   * @return {Promise<any>}
   */
  @Cordova()
  getVerificationID(number: number): Promise<any> {
    return;
  }

  /**
   * Get the device token
   * @return {Promise<null | string>} Note that token will be null if it has not been established yet
   */
  @Cordova()
  getToken(): Promise<null | string> {
    return;
  }


  /**
   * Get notified when the user opens a notification
   * @return {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  onMessageReceived(): Observable<any> {
    return;
  }


  /**
   * Get notified when a token is refreshed
   * @return {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  onTokenRefresh(): Observable<any> {
    return;
  }

  /**
   * Set a number on the icon badge. Set to 0 to clear the badge.
   * @param {number} number
   * @return {Promise<any>}
   */
  @Cordova()
  setBadgeNumber(number: number): Promise<any> {
    return;
  }


  /**
   * Get icon badge number
   * @return {Promise<any>}
   */
  @Cordova()
  getBadgeNumber(): Promise<any> {
    return;
  }

  /**
   * Subscribe to a topic
   * @param {string} topic
   * @return {Promise<any>}
   */
  @Cordova()
  subscribe(topic: string): Promise<any> {
    return;
  }

  /**
   * Unsubscribe from a topic
   * @param {string} topic
   * @return {Promise<any>}
   */
  @Cordova()
  unsubscribe(topic: string): Promise<any> {
    return;
  }


  /**
   * Unregister from firebase, used to stop receiving push notifications.
   * Call this when you logout user from your app.
   */
  @Cordova()
  unregister(): Promise<any> {
    return;
  }

  /**
 * Log an event using Analytics
 * @param {string} name event's name
 * @param {Object} params params to send to analytics
 * @return {Promise<any>}
 */
  @Cordova()
  logEvent(name: string, params: any): Promise<any> {
    return;
  }


  /**
   * Set the name of the current screen in Analytics
   * @param {string} name Screen name
   * @return {Promise<any>}
   */
  @Cordova()
  setScreenName(name: string): Promise<any> {
    return;
  }

  /**
   * Set a user id for use in Analytics
   * @param {string} id
   * @return {Promise<any>}
   */
  @Cordova()
  setUserId(id: string): Promise<any> {
    return;
  }

  /**
   * Set a user property for use in Analytics
   * @param {string} name
   * @param {string} value
   * @return {Promise<any>}
   */
  @Cordova()
  setUserProperty(name: string, value: string): Promise<any> {
    return;
  }

  /**
   * Activate the Remote Config fetched config
   * @return {Promise<any>}
   */
  @Cordova()
  activateFetched(): Promise<any> {
    return;
  }


  /**
   * Fetch Remote Config parameter values for your app
   * @param {number} [cacheExpirationSeconds]
   * @return {Promise<any>}
   */
  @Cordova()
  fetch(cacheExpirationSeconds?: number): Promise<any> {
    return;
  }

  /**
   * Retrieve a Remote Config byte array
   * @param {string} key
   * @param {string} [namespace]
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  getByteArray(key: string, namespace?: string): Promise<any> {
    return;
  }


  /**
   * Retrieve a Remote Config value
   * @param {string} key
   * @param {string} [namespace]
   * @return {Promise<any>}
   */
  @Cordova()
  getValue(key: string): Promise<any> {
    return;
  }

  /**
   * Get the current state of the firebaseRemoteConfig singleton object
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  getInfo(): Promise<any> {
    return;
  }


  /**
   * Change the settings for the firebaseRemoteConfig object's operations
   * @param {Object} settings
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  setConfigSettings(settings: any): Promise<any> {
    return;
  }

  /**
   * Set defaults in the Remote Config
   * @param {Object} defaults
   * @param {string} [namespace]
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['Android']
  })
  setDefaults(defaults: any): Promise<any> {
    return;
  }

  /**
   * Start a trace.
   * @param {string} name Trace name
   */
  @Cordova()
  startTrace(name: string): Promise<any> {
    return;
  }


  /**
   * To count the performance-related events that occur in your app (such as cache hits or retries), add a line of code
   * similar to the following whenever the event occurs, using a string other than retry to name that event if you are
   * counting a different type of event:
   * @param {string} name Trace name
   * @param {string} counterNamed Counter name
   */
  @Cordova()
  incrementCounter(name: string, counterNamed: string): Promise<any> {
    return;
  }


  /**
   * Stop the trace
   * @param {string} name Trace name
   */
  @Cordova()
  stopTrace(name: string): void { }


  /**
   * Allows the user to enable/disable analytics collection
   * @param {boolean} enabled value to set collection
   * @returns {Promise<any>}
   */
  @Cordova()
  setAnalyticsCollectionEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Allows the user to enable/disable performance collection
   * @param {boolean} enabled value to set collection
   * @returns {Promise<any>}
   */
  @Cordova()
  setPerformanceCollectionEnabled(enabled: boolean): Promise<any> {
    return;
  }


  /**
   * Sends an SMS to the user with the SMS verification code and returns the Verification ID required to sign in using phone authentication
   * @param {string} number The phone number, including '+' and country code
   * @param {number} timeoutDuration (Android only) The timeout in sec - no more SMS will be sent to this number until this timeout expires
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android', 'iOS']
  })
  verifyPhoneNumber(
    number: string,
    timeoutDuration: number = 0
  ): Promise<any> {
    return;
  }

  /**
   * Clear all pending notifications from the drawer
   * @return {Promise<any>}
   */
  @Cordova()
  clearAllNotifications(): Promise<any> {
    return;
  }


  /**
   * Sends a crash-related log message that will appear in the Logs section of the next native crash event.
   * Note: if you don't then crash, the message won't be sent! Also logs the message to the native device console.
   * @param {string} message
   * @return {Promise<any>}
   */
  @Cordova()
  logMessage(message: string): Promise<any> {
    return;
  }


  /**
   * Simulates (causes) a fatal native crash which causes a crash event to be sent to Crashlytics (useful for testing).
   * See the Firebase documentation regarding crash testing.
   * Crashes will appear under Event type = "Crashes" in the Crashlytics console.
   * @return {Promise<any>}
   */
  @Cordova()
  sendCrash(): Promise<any> {
    return;
  }


  /**
   * Sends a non-fatal error event to Crashlytics.
   * In a Cordova app, you may use this to log unhandled Javascript exceptions, for example.
   *
   * The event will appear under Event type = "Non-fatals" in the Crashlytics console.
   * The error message will appear in the Logs section of the non-fatal error event.
   * Also logs the error message to the native device console.
   * @param {string} message
   * @return {Promise<any>}
   */
  @Cordova()
  logError(message: string): Promise<any> {
    return;
  }


  /**
   * Allows the user to set User Identifier for crashlytics reporting
   * https://firebase.google.com/docs/crashlytics/customize-crash-reports?authuser=0#set_user_ids
   * @param {string} userId value to set the userId
   * @returns {Promise<any>}
   */
  @Cordova()
  setCrashlyticsUserId(userId: string): Promise<any> {
    return;
  }


  // iOS-only

  /**
   * Grant permission to receive push notifications (will trigger prompt) and return hasPermission: true.
   * iOS only (Android will always return true)
   * @return {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS']
  })
  grantPermission(): Promise<any> {
    return;
  }

  /**
   * Check permission to receive push notifications
   * @return {Promise<{isEnabled: boolean}>}
   */
  @Cordova()
  hasPermission(): Promise<{ isEnabled: boolean }> {
    return;
  }


  // Android-only


  /**
   * Android 8+ only. Overrides the properties for the default channel.
   * The default channel is used if no other channel exists or is specified in the notification.
   * Any options not specified will not be overridden.
   * Should be called as soon as possible (on app start) so default notifications will work as expected.
   * Calling on Android 7 or below or another platform will have no effect.
   * @param options channel's options
   */
  @Cordova({
    platforms: ['Android']
  })
  setDefaultChannel(options: any): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Creates a custom channel to be used by notification messages which have the channel property set in the message payload to the id of the created channel:
   * - For background (system) notifications: android.notification.channel_id
   * - For foreground/data notifications: data.notification_android_channel_id
   * @param options channel's options
   */
  @Cordova({
    platforms: ['Android']
  })
  createChannel(options: any): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Removes a previously defined channel. Calling on Android 7 or below or another platform will have no effect.
   * @param channelID channel id
   */
  @Cordova({
    platforms: ['Android']
  })
  deleteChannel(channelID: string): Promise<any> {
    return;
  }

  /**
   * Android 8+ only. Gets a list of all channels. Calling on Android 7 or below or another platform will have no effect.
   */
  @Cordova({
    platforms: ['Android']
  })
  listChannels(): Promise<any> {
    return;
  }

}
