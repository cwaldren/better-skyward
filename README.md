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


**What:** adds a new column of checkboxes for marking absence.

**Why:** having to type out 'AB' to mark absent is painful. This is why checkboxes exist. Use them!


## Compatibility

I have no idea how Skyward is versioned or even how to determine if this is compatible with the software you use. Use entirely at your own risk.

## Usage

This extension only needs to run on Skyward pages - not every page on the Internet. The Skyward URL must be specified in the extension's manifest file. To determine your correct Skyward URL, visit your school's Skyward login page and check the URL bar on your browser. 

It will look something vaguely like this:
`https://www.some-domain.your-district.net/scripts`

The proper URL to put in `manifest.json` would be:
`https://www.some-domain.your-district.net/scripts/*` (note the `*`, which matches all pages starting with the rest of the URL.)

Open up `manifest.json.template` and type in your URL manually and then save as `manifest.json`.

If you're comfortable with a console, run `./manifest.sh https://www.some-domain.your-district.net/scripts*` to generate a valid `manifest.json` file.


### Firefox

1. [Zip the files in this repo](https://extensionworkshop.com/documentation/publish/package-your-extension/). Don't zip the repo folder; zip the files themselves (excluding `.git`).

1. Visit `about:debugging` and [load the extension](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/). 

## Chrome

Have not tested. Probably similar to Firefox.
