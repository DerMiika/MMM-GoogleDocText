# MMM-GoogleDocText

Display Google Docs content directly on your MagicMirror².
This module allows you to show text, tables, and basic formatting from a shared Google Docs document.

**Note:** This module has been tested on multiple RaspiOS devices and on a Debian 13 VM, it runs reliably.

---

## Features

- Show Google Docs content on your MagicMirror.
- Updates automatically at a configurable interval.
- Smooth fade-in/out updates.
- Supports tables, basic formatting, and colors.

---

## Installation

1. Navigate to your MagicMirror `modules` folder:

```bash
cd ~/MagicMirror/modules
```

2. Clone this repository:

```bash
git clone https://github.com/DerMiika/MMM-GoogleDocText.git

```

3. Add the module to your `config/config.js` inside the `modules` array:

```javascript
{
  module: "MMM-GoogleDocText",
  position: "top_right",
  config: {
    url: "https://docs.google.com/document/d/YOUR_DOC_ID/export?format=html",
    updateInterval: 5 * 60 * 1000, // 5 minutes
    fadeSpeed: 2000                // 2 seconds
  }
},
```

**Important:**

- The Google Doc must be shared for anyone with the link to view.
- Replace `YOUR_DOC_ID` with the ID from your Google Doc URL.
  Example URL:
  `https://docs.google.com/document/d/1yKYaH4G_YIW_LeaveAStarIJgtisRDZND_lO8/edit` → ID is `1yKYaH4G_YIW_LeaveAStarIJgtisRDZND_lO8`

## Configuration Options

| Option          | Description                        | Default  |
|-----------------|------------------------------------|----------|
| url             | Google Docs export URL             | ""       |
| updateInterval  | Update interval in milliseconds   | 300000   |
| fadeSpeed       | DOM update fade speed in milliseconds | 2000  |

## How to Use

1. Make sure your MagicMirror is running:

```bash
cd ~/MagicMirror
npm run start
```

2. Your Google Docs content should appear at the position you set (e.g., `top_right`).

3. To edit the text, simply update the Google Doc. The MagicMirror will refresh automatically.


## License

MIT License
