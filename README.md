# auto-close-plus4u-token-getter
Auto close the page for getting token by insomnia-plugin-plus4u-oidc.

## How to install Tampermonkey script
1. Install Tampermonkey from https://www.tampermonkey.net/ if you do not have it yet (tested in Firefox browser).
2. Install this user script from URL: [auto-close-plus4u-token-getter.user.js](https://github.com/uumnk/auto-close-plus4u-token-getter/raw/main/auto-close-plus4u-token-getter.user.js)

**Quick guide:**
1. Use Insomnia with active plugin *insomnia-plugin-plus4u-oidc* which opens uuIdentity page with token.
2. The tab with uuIdentity page should close itself in 5 seconds.

**Configuration:**
1. You can change the close timeout by changing value of integer constant TIME_TO_CLOSE in the script (the time is in miliseconds).
2. If the script does not work for you, you can change the URL on line beginning with *@match* to URL of the uuIdentity page (it should work generally for any URL). If the script does not work for your browser at all, try Firefox.
