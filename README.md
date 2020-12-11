# WASDExtension

## Overview

WASDExtension is a Chrome Extension that provides vertical scrolling behavior with W/S/Up/Down Keys, and holding the Shift Key doubles the scroll speed.

## Features

WASDExtension provides the following features:

- Scrolling vertically with W/S/Up/Down Keys
- Doubling the Scroll Speed by holding the Shift Key
- No interference when typing in `input` HTML elements
- No interference with Keyboard Shortcuts (Meta, Ctrl, Alt)
- No pollution of the global scope except for event listeners

Note: Some websites that dynamically load content or have predefined scrolling behavior may be slow when scrolling.

## Usage

To load the extension into Chrome, follow these steps:

- Clone/Download the repository locally
- Open the Chrome Extensions Page by either:
  - Clicking the top right `⋮` and navigating to `More Tools > Extensions`
  - Typing [`chrome://extensions`](chrome://extensions) into the address bar
- Click the `Load Unpacked` button and select the local repository

Any tabs loaded after installation will have the extension applied.
