# Open in Visual Studio Code

A browser extension that adds an "Open in Visual Studio Code" option to GitHub repos.

This extension is by no way endorsed by Microsoft or the Visual Studio Code team. I'm not even sure they'd be okay with me publishing this if they knew about it. Please don't bring any issues with this extension up in any Visual Studio Code support forums of any kind. Any issues you run into with this extension should be brought up in the issues section of this repository and nowhere else. Please don't get me in trouble ❤️.

## Installing

**Firefox**: https://addons.mozilla.org/en-US/firefox/addon/open-in-visual-studio-code/
**Chrome**: Download the latest release [here](https://github.com/TheNightmanCodeth/open-in-code/releases/latest)
**Safari**: Hang tight 🫡

## Building & Installing From Source

### Build
> npm run build

### Install
Once the build completes there will be a `web-ext-artifacts` folder containing the extension.

**Firefox**
- Open the Add-ons Manager (Alt + t > a)
- Click on the gear icon
- Select "Install Add-on From File..."
- Locate the addon and install 

**Chrome**
- Unzip the archive in `web-ext-artifacts`
- Navigate to `chrome://extensions`
- Ensure `Developer Mode` is activated
- Click `Load Unpacked` and open the unzipped plugin directory

**Safari**
Check out [this guide](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari) for more detailed instructions.
- Make sure you have the latest version of XCode and Command Line Tools installed
- Unzip the build in `web-ext-artifacts`
- Open a Terminal and run:
    - `xcrun safari-web-extension-converter /path/to/unzipped-artifact`
- [Run with XCode and install in Safari](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension)

## Contributing

Pull requests and issues are always welcome. If you run into a bug, open an issue **here**. If you know how to fix the bug, submit a pull request and reference the issue in the description.

## Changelog

### 1.0.0
- Initial release 🎉

## Supporting Me

If you find this extension useful and are feeling generous cosider buying me a coffee!

Venmo: @j_diggity
Cash App: $JADiggity
ETH (Ethereum network only!!!): 0x0d8B0B097B77F262D110003E9d2c030cd26Da95F