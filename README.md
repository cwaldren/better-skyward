# Better Skyward

This browser extension aims to relieve some of the pain experienced by
educators using the Skyward platform for grading.

## Features

### Grading
**What:** on the grading page, highlight the row/column that the mouse is currently
over. 

**Why:** it's a huge pain trying to track which student's grades you're currently entering. This makes it much easier to see. 

### Assignments
**What:** displays labels next to the 'no count' and 'missing' checkboxes. Adds a new checkbox column for marking 'absent'.

**Why:**  when scrolling down a list of hundreds of students, you simply need to memorize which checkbox is which since there are no labels. This is solved by labeling the checkboxes. 


**What:** adds a new column of checkboxes for marking absense.

**Why:** having to type out 'AB' to mark absent is painful. This is why checkboxes exist. Use them!


## Compatibility

I have no idea how Skyward is versioned or even how to determine if this is compatible with the software you use. Use entirely at your own risk.

## Usage

### Firefox

1. Modify `manifest.json` to insert the URL of the skyward instance. The extension only needs permission to modify pages matching that URL pattern, not any other page on the internet. Use `*` to match a set of pages. For example: `https://www.some-school-system.net/scripts/*`

1. [Zip the files in this repo](https://extensionworkshop.com/documentation/publish/package-your-extension/). Don't zip the repo folder; zip the files themselves (excluding `.git`).

1. Visit `about:debugging` and [load the extension](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/). 

## Chrome

Have not tested. Probably similar to Firefox.
