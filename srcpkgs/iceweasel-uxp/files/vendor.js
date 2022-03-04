// Use LANG environment variable to choose locale
pref("intl.locale.matchOS", true);

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Don't disable our bundled extensions in the application directory
pref("extensions.autoDisableScopes", 11);
pref("extensions.shownSelectionUI", true);

// Opt all of us into e10s, instead of just 50% (Disabled) https://bugzilla.mozilla.org/show_bug.cgi?id=1371886
// pref("browser.tabs.remote.autostart", true);

// Disable "alt" as a shortcut key to open full menu bar. Conflicts with "alt" as a modifier
pref("ui.key.menuAccessKeyFocuses", false);

// Disable the GeoLocation API for content
pref("geo.enabled", false);

// Make sure that the request URL of the GeoLocation backend is empty
pref("geo.wifi.uri", "");

// Disable Freedom Violating DRM Feature
pref("browser.eme.ui.enabled", false);
// EME
pref("media.eme.enabled", false);
pref("media.eme.apiVisible", false);

// Google Widevine DRM
// https://blog.mozilla.org/futurereleases/2016/04/08/mozilla-to-test-widevine-cdm-in-firefox-nightly/
// https://wiki.mozilla.org/QA/Widevine_CDM
// https://bugzilla.mozilla.org/show_bug.cgi?id=1288580
pref("media.gmp-widevinecdm.visible", false);
pref("media.gmp-widevinecdm.enabled", false);
pref("media.gmp-widevinecdm.autoupdate", false);

// Default to classic view for about:newtab
pref("browser.newtabpage.enhanced", false);

// Poodle attack
pref("security.tls.version.min", 1);

// Don't call home for blacklisting
pref("extensions.blocklist.enabled", false);

// Disable plugin installer
pref("plugins.hide_infobar_for_missing_plugin", true);
pref("plugins.hide_infobar_for_outdated_plugin", true);
pref("plugins.notifyMissingFlash", false);

//https://developer.mozilla.org/en-US/docs/Web/API/MediaSource
//pref("media.mediasource.enabled",true);

// Speeding it up
pref("network.http.pipelining", true);
pref("network.http.proxy.pipelining", true);
pref("network.http.pipelining.maxrequests", 10);
pref("nglayout.initialpaint.delay", 0);

// Disable third party cookies
pref("network.cookie.cookieBehavior", 1);

// Prevent EULA dialog to popup on first run
pref("browser.EULA.override", true);

// Spoof the useragent to a generic one
//pref("general.useragent.compatMode.firefox", false);
// Spoof the useragent to a generic one for user experience and privacy
pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:60.0) Gecko/20100101 Firefox/60.0");
pref("general.appname.override", "Netscape");
pref("general.appversion.override", "5.0 (Windows)");
pref("general.buildID.override", "Gecko/20100101");
pref("general.oscpu.override", "Windows NT 10.0");
pref("general.platform.override", "Win64");

// Privacy & Freedom Issues
// https://webdevelopmentaid.wordpress.com/2013/10/21/customize-privacy-settings-in-mozilla-firefox-part-1-aboutconfig/
// https://panopticlick.eff.org
// http://ip-check.info
// http://browserspy.dk
// https://wiki.mozilla.org/Fingerprinting
// http://www.browserleaks.com
// http://fingerprint.pet-portal.eu
pref("privacy.donottrackheader.enabled", true);
pref("privacy.donottrackheader.value", 1);
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
// Disable navigator.sendBeacon() tracking
// https://matomo.org/faq/how-to/faq_33087/
pref("beacon.enabled", false);

// CIS 2.1.1 Disable Auto Update / Balrog
pref("app.update.auto", false);
pref("app.update.checkInstallTime", false);
pref("app.update.enabled", false);
pref("app.update.staging.enabled", false);
pref("app.update.url", "about:blank");
pref("media.gmp-manager.certs.1.commonName", "");
pref("media.gmp-manager.certs.2.commonName", "");
// Disable Gecko media plugins: https://wiki.mozilla.org/GeckoMediaPlugins
pref("media.gmp-manager.url", "http://127.0.0.1/");
pref("media.gmp-manager.url.override", "data:text/plain,");
pref("media.gmp-provider.enabled", false);
// Don't install openh264 codec
pref("media.gmp-gmpopenh264.enabled", false);
pref("media.gmp-eme-adobe.enabled", false);
pref("media.peerconnection.video.h264_enabled", false);

// CIS 2.3.4 Block Reported Web Forgeries
// http://kb.mozillazine.org/Browser.safebrowsing.enabled
// http://kb.mozillazine.org/Safe_browsing
// https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work
// http://forums.mozillazine.org/viewtopic.php?f=39&t=2711237&p=12896849#p12896849
pref("browser.safebrowsing.enabled", false);

// CIS 2.3.5 Block Reported Attack Sites
// http://kb.mozillazine.org/Browser.safebrowsing.malware.enabled
pref("browser.safebrowsing.malware.enabled", false);

// Disable safe browsing remote lookups for downloaded files.
// This leaks information to google.
// https://www.mozilla.org/en-US/firefox/39.0/releasenotes/
// https://wiki.mozilla.org/Security/Application_Reputation
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.appRepURL", "about:blank");
pref("browser.safebrowsing.provider.mozilla.gethashURL", "about:blank");
pref("browser.safebrowsing.provider.mozilla.updateURL", "about:blank");
pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.url", "about:blank");
pref("browser.safebrowsing.provider.google.pver", "about:blank");
pref("browser.safebrowsing.provider.google.reportURL", "about:blank");
pref("browser.safebrowsing.provider.google.gethashURL", "about:blank");
pref("browser.safebrowsing.provider.google.updateURL", "about:blank");
pref("browser.safebrowsing.provider.google.lists", "about:blank");

// https://bugzilla.mozilla.org/show_bug.cgi?id=1025965
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.safebrowsing.provider.google4.lists", "about:blank");
pref("browser.safebrowsing.provider.google4.updateURL", "about:blank");
pref("browser.safebrowsing.provider.google4.gethashURL", "about:blank");
pref("browser.safebrowsing.provider.google4.pver", "about:blank");
pref("browser.safebrowsing.provider.google4.reportURL", "about:blank");
pref("browser.safebrowsing.provider.mozilla.lists", "about:blank");

// Disable Microsoft Family Safety MiTM support
// https://bugzilla.mozilla.org/show_bug.cgi?id=1239166
// https://wiki.mozilla.org/SecurityEngineering/Untrusted_Certificates_in_Windows_Child_Mode
// https://hg.mozilla.org/releases/mozilla-release/file/ddb37c386bb2ffa180117b4d30ca3b41a8af233c/security/manager/ssl/nsNSSComponent.cpp#l782
pref("security.family_safety.mode", 0);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1265113
// https://hg.mozilla.org/releases/mozilla-release/rev/d9659c22b3c5
// https://bugzilla.mozilla.org/show_bug.cgi?id=1298883
pref("security.enterprise_roots.enabled", false);

//pref("services.sync.privacyURL", "https://www.gnu.org/software/gnuzilla/");
pref("social.enabled", false);
pref("social.remote-install.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.healthreport.about.reportUrl", "127.0.0.1");
pref("datareporting.healthreport.documentServerURI", "127.0.0.1");
pref("healthreport.uploadEnabled", false);
pref("social.toast-notifications.enabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.healthreport.service.enabled", false);
pref("browser.slowStartup.notificationDisabled", true);
pref("network.http.sendRefererHeader", 2);
//pref("network.http.referer.spoofSource", true);
//http://grack.com/blog/2010/01/06/3rd-party-cookies-dom-storage-and-privacy/
//pref("dom.storage.enabled", false);
pref("dom.event.clipboardevents.enabled",false);
pref("network.prefetch-next", false);
pref("network.dns.disablePrefetch", true);
pref("network.http.sendSecureXSiteReferrer", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.unified", false);
// Do not tell what plugins do we have enabled: https://mail.mozilla.org/pipermail/firefox-dev/2013-November/001186.html
pref("plugins.enumerable_names", "");
pref("plugin.state.flash", 0);
// Do not autoupdate search engines
pref("browser.search.update", false);
// Warn when the page tries to redirect or refresh
//pref("accessibility.blockautorefresh", true);
pref("dom.battery.enabled", false);
pref("device.sensors.enabled", false);
pref("camera.control.face_detection.enabled", false);
pref("camera.control.autofocus_moving_callback.enabled", false);
pref("network.http.speculative-parallel-limit", 0);
// No search suggestions
pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
pref("browser.search.suggest.enabled", false);


// WebRTC
pref("media.peerconnection.enabled", false);
pref("media.peerconnection.ice.default_address_only", true);

pref("font.default.x-western", "sans-serif");

// Preferences for the Get Add-ons panel and search engines
pref("extensions.webservice.discoverURL", "https://iw.addons.hyperbola.info");
pref("extensions.getAddons.search.url", "https://iw.addons.hyperbola.info");
pref("browser.search.searchEnginesURL", "https://iw.addons.hyperbola.info");

// Mobile
pref("privacy.announcements.enabled", false);
pref("browser.snippets.enabled", false);
pref("browser.snippets.syncPromo.enabled", false);
pref("identity.mobilepromo.android", "https://f-droid.org/repository/browse/?fdid=org.gnu.icecat&");
pref("browser.snippets.geoUrl", "http://127.0.0.1/");
pref("browser.snippets.updateUrl", "http://127.0.0.1/");
pref("browser.snippets.statsUrl", "http://127.0.0.1/");
pref("datareporting.policy.firstRunTime", 0);
pref("datareporting.policy.dataSubmissionPolicyVersion", 2);
pref("browser.webapps.checkForUpdates", 0);
pref("browser.webapps.updateCheckUrl", "http://127.0.0.1/");
pref("app.faqURL", "http://libreplanet.org/wiki/Group:IceCat/FAQ");

// Geolocation depends on third party services
pref("geo.enabled", false);
pref("geo.wifi.uri", "");

// Disable heartbeat
pref("browser.selfsupport.url", "");

// Disable Link to FireFox Marketplace, currently loaded with non-free "apps"
pref("browser.apps.URL", "");

// Use old style preferences, that allow javascript to be disabled
pref("browser.preferences.inContent",false);

// Don't download ads for the newtab page
pref("browser.newtabpage.directory.source", "");
pref("browser.newtabpage.directory.ping", "");
pref("browser.newtabpage.introShown", true);

// Disable home snippets
pref("browser.aboutHomeSnippets.updateUrl", "data:text/html");

// Disable hardware acceleration and WebGL
//pref("layers.acceleration.disabled", false);
pref("webgl.disabled", false);

// Disable SSDP
pref("browser.casting.enabled", false);

// Do not require xpi extensions to be signed by Mozilla
pref("xpinstall.signatures.required", false);

// Disable File and Directory Entries API (Imported from Edge/Chromium)
// https://developer.mozilla.org/en-US/Firefox/Releases/50#Files_and_directories
// https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API
// https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction
// https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API/Firefox_support
// https://bugzilla.mozilla.org/show_bug.cgi?id=1265767
pref("dom.webkitBlink.filesystem.enabled", false);
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
// https://bugzilla.mozilla.org/show_bug.cgi?id=1258489
// https://hg.mozilla.org/releases/mozilla-release/rev/133af19777be
pref("dom.webkitBlink.dirPicker.enabled", false);

// Directory Upload API, webkitdirectory
// https://bugzilla.mozilla.org/show_bug.cgi?id=1188880
// https://bugzilla.mozilla.org/show_bug.cgi?id=907707
// https://wicg.github.io/directory-upload/proposal.html
pref("dom.input.dirpicker", false);

// Disable Captive Portal
pref("network.captive-portal-service.enabled", false);

// Disable Media Capture and Streams API (Media Streams)
pref("media.navigator.enabled", false);

// Enable sndio audio backend
pref("media.cubeb.backend", "sndio");
