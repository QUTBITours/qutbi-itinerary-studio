# Qutbi Itinerary Studio

A private, browser-based proposal builder for **Qutbi Tours & Holidays**. Paste a WhatsApp itinerary, choose a destination theme, review the generated A4 proposal, and save it as a PDF.

## Features

- Tolerant itinerary parser for numbered, date-first, multiline, and flattened WhatsApp formats
- Kashmir, Himachal, Leh–Ladakh, Kerala, Goa, Rajasthan, Uttarakhand, Sikkim, Northeast India, Andaman, and general domestic themes
- Dubai, Singapore, Kazakhstan, Vietnam, Mauritius, Turkey, Thailand, Bali, Malaysia, Maldives, Sri Lanka, Azerbaijan, Georgia, Japan, Europe, and general international themes
- Theme-specific colours, headings, and licensed Unsplash cover images
- Shuffleable domestic and international image pools with automatic fallback when a remote image fails
- Editable package price, inclusions, notes, and itinerary presentation
- Optional, editable Terms & Conditions
- Optional pricing and contact details
- Custom logo upload
- Browser-local draft and preference saving
- Print-optimised A4 PDF output
- No database, build process, API key, or external JavaScript dependency

## Use locally

Open `index.html` in a modern browser. Paste an itinerary, select its package theme, click **Analyse itinerary**, and then choose **Download PDF**. In the print window, select **Save as PDF** and disable browser headers and footers for the cleanest result.

For a local web server, run:

```bash
npx serve .
```

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages** in GitHub.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

The application is entirely client-side. It does not transmit itinerary or customer information to a server. Drafts are stored only in the current browser using `localStorage`.

## Image and privacy notes

Cover images load remotely from Unsplash and include attribution in the PDF. Confirm each selected image remains suitable for commercial use before sending a final customer proposal. Do not publish sensitive customer details in a public repository; the repository should contain application code only, not saved itineraries.

## Company details

**Qutbi Tours & Holidays**  
Nashik, Maharashtra, India  
+91 90289 39352  
*Your Journey, Our Legacy*

