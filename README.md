## Better Skyward

This browser extension aims to relieve some of the pain experienced by
educators using the Skyward platform for grading.

## Usage

### Firefox

1. Modify `manifest.json` to insert the URL of the skyward instance. The extension only needs permission to modify pages matching that URL pattern, not any other page on the internet. Use `*` to match a set of pages. For example: `https://www.some-school-system.net/scripts/*`

1. [Zip the files in this repo](https://extensionworkshop.com/documentation/publish/package-your-extension/). Don't zip the repo folder; zip the files themselves (excluding `.git`).

1. Visit `about:debugging` and [load the extension](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/). 


