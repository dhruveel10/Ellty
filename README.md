# Page Selector Component

A pixel-perfect implementation of a page selector component based on Figma design specifications. Built with React and Vite.

## Overview

This project contains a reusable page selector component that allows users to select multiple pages with interactive checkboxes. The component was built following exact design specifications from Figma to ensure pixel-perfect accuracy.

## Component Features

### Functionality

- **Multi-select checkboxes**: Individual page selection with visual feedback
- **Select All functionality**: "All pages" checkbox at the top toggles all page selections
- **Hover interactions**: Visual feedback on hover for enhanced user experience
- **Done button interactivity**:
  - If no pages are selected: Shows an alert prompting the user to select at least one page
  - If pages are selected: Resets all selections (unchecks all checkboxes)
- **Vertical scrolling**: Checkbox list scrolls vertically when content exceeds container height

### Design Specifications

All measurements and styling follow the Figma design specifications exactly:

#### Main Container (`.page-selector-card`)

- **Dimensions**: 370px × 326px
- **Border radius**: 6px
- **Border**: 1px solid #e0e0e0
- **Padding**: 10px (top and bottom), 0 (left and right)
- **Background**: White (#ffffff)
- **Shadow**: 0px 2px 8px rgba(0, 0, 0, 0.1)

#### Checkbox Rows (`.checkbox-row`)

- **Dimensions**: 370px × 42px
- **Padding**: 8px (top/bottom), 22px (left), 15px (right)
- **Layout**: Flexbox with space-between alignment
- **Hover**: Light gray background (#fafafa)

#### Checkboxes (`.checkbox`)

- **Dimensions**: 25px × 25px
- **Border radius**: 16px (highly rounded corners)
- **States**:
  - **Unchecked**: White background, gray border (#d0d0d0)
  - **Unchecked + Hover**: Blue background (#5087F8), white border, white checkmark appears
  - **Checked**: Blue background (#2469F6), white checkmark
  - **Checked + Hover**: Same as checked (no color change)

#### Checkmark Icon

- **Dimensions**: 17px × 12px
- **Color**: White
- **Appears on**: Checked state or hover state

#### Horizontal Dividers (`.divider`)

- **Dimensions**: 370px × 20px
- **Padding**: 10px (top/bottom), 15px (left/right)
- **Visual**: 1px gray line (#e0e0e0)
- **Position**: Top (after "All pages") and bottom (before Done button)

#### Done Button Container (`.done-button-container`)

- **Dimensions**: 370px × 60px
- **Padding**: 10px (top/bottom), 15px (left/right)
- **Layout**: Centered flexbox

#### Done Button (`.done-button`)

- **Dimensions**: 340px × 40px
- **Background color**: #FFCE22 (yellow)
- **Border radius**: 4px
- **Text color**: #1F2128
- **Hover**: Lighter yellow (#ffd84d)

### Typography

- **Font family**: Montserrat (imported from Google Fonts)
- **Font weight**: 400 (Regular)
- **Font size**: 14px
- **Color**: #1F2128

### Colors Used

- **Primary Blue (Checked)**: #2469F6
- **Hover Blue**: #5087F8
- **Yellow (Button)**: #FFCE22
- **Text**: #1F2128
- **Border/Divider**: #e0e0e0
- **Checkbox Border**: #d0d0d0
- **Background**: #ffffff
- **Hover Background**: #fafafa

## Project Structure

```
src/
├── components/
│   ├── PageSelector.jsx    # Main component
│   └── PageSelector.css    # Component styles
├── App.jsx                 # App entry point
├── App.css                 # App styles
└── main.jsx               # React DOM entry
```

## Installation & Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Component Usage

```jsx
import PageSelector from "./components/PageSelector";

function App() {
  return <PageSelector />;
}
```

## State Management

The component uses React hooks for state management:

- `selectedPages`: Array of booleans tracking which pages are selected
- `allPagesChecked`: Boolean for "All pages" checkbox state
- `hoveredIndex`: Tracks which checkbox is currently being hovered
- `allPagesHovered`: Tracks hover state of "All pages" checkbox

## CSS Features

- **Flexbox layout**: For responsive alignment and spacing
- **CSS transitions**: Smooth color changes on hover (0.2s ease)
- **Overflow scrolling**: Vertical scroll for long page lists
- **Custom scrollbar**: Compatible with different browsers
- **Pseudo-elements**: Used for divider lines (::after)
- **Z-index management**: Ensures checkmark visibility on hover

## Design Fidelity

This component was built to be **pixel-perfect** according to Figma specifications:

- All dimensions match exactly (width, height, padding, margins)
- Border radius values are precise
- Colors use exact hex codes from the design
- Typography matches font family, weight, and size
- Hover states and interactions replicate the prototype
- Spacing and alignment follow the design system

## Technologies

- **React 18**: Component-based UI
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with flexbox
- **Google Fonts**: Montserrat font family
- **ESLint**: Code quality and consistency

Built with attention to detail and pixel-perfect precision following Figma design specifications.
