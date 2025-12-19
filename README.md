# CSV Runner Dashboard

## Project Overview
This project implements the **CSV Runner Dashboard** challenge as part of an
internship selection process.

Users can upload a CSV file containing running data (`date`, `person`, `miles`),
which is validated and visualized using summary metrics and interactive charts.

---

## Assumptions
- CSV headers must be exactly: `date`, `person`, `miles`
- Miles must be positive numeric values
- Dates are treated as strings for visualization
- Data is processed entirely client-side
- Duplicate rows are allowed

---

## Prerequisites
- Node.js >= 18
- npm

---

## Setup

```bash
npm install


```
No environment variables are required for this project.
---
## Run & Verify
```bash
npm run dev

```
Open: http://localhost:3000
Upload public/sample.csv

Verify overall metrics (average, min, max)
In the dashboard UI, click the "Upload CSV" button and select the sample file located at `public/sample.csv` to upload.
Verify per-person metrics update correctly

Use the person selector to filter views

Upload an invalid CSV (missing column or negative miles) and confirm error handling

---

## Features

CSV upload with header and data validation
CSV preview table for uploaded data

Overall and per-person metrics (average, min, max)

Interactive charts using Recharts

Clear error handling for invalid CSV inputs

## Limitations

No data persistence

Large CSV files are not optimized

Date values are not normalized or sorted

## Architecture Notes

Parsing, validation, and metrics logic are separated into utility modules

Reusable UI components built using shadcn/ui

State is managed at the page level using React hooks

Charts and preview components are isolated for clarity and reuse

## Accessibility & UI

Semantic HTML and labeled inputs

Keyboard-accessible components

High-contrast typography using Tailwind CSS

Responsive layout across screen sizes

## Notes

Development-only warnings related to Content Security Policy (CSP) may appear due
to Next.js tooling and do not affect production builds.