---
name: Precision Metric Panel
colors:
  surface: '#f8f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424753'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005bc0'
  primary: '#0051ae'
  on-primary: '#ffffff'
  primary-container: '#0969da'
  on-primary-container: '#ecefff'
  inverse-primary: '#adc6ff'
  secondary: '#555f6d'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f1'
  on-secondary-container: '#596372'
  tertiary: '#913900'
  on-tertiary: '#ffffff'
  tertiary-container: '#b84b00'
  on-tertiary-container: '#ffece5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#d9e3f4'
  secondary-fixed-dim: '#bdc7d8'
  on-secondary-fixed: '#121c28'
  on-secondary-fixed-variant: '#3e4755'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb693'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a2f00'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-lg:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
  headline-md:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  metric-display:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
  metric-display-mobile:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  metric-delta:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 20px
  body-md:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-sm:
    fontFamily: Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 12px
  margin: 16px
  space-xs: 4px
  space-sm: 8px
  space-md: 12px
  space-lg: 16px
  space-xl: 24px
---

## Brand & Style

This design system delivers an evidence-first, calm, and rigorous visual language inspired by precision industrial instrumentation, metrology datasheets, and factory automation monitoring consoles. Created specifically for an industrial AI engineer's portfolio within GitHub README environments, it prioritizes legibility, measured authority, and technical discipline.

### Style Archetype
The system adheres to an **Industrial Metrology / Flat Instrument** aesthetic:
- **Zero Decorative Fluff:** No box-shadows, no backdrop blurs, no gradients, no skeuomorphic gloss, and no emoji accents.
- **Architectural Subordination:** UI frames exist strictly to bind data; they never compete with metrics.
- **Deterministic Data Presentation:** Before/after comparisons rely on strict tonal hierarchy rather than saturated multi-colored badges.
- **Tone:** Objective, quiet, exacting, and institutional.

## Colors

The palette is engineered around GitHub-native canvas tones with calibrated industrial steel neutrals and exactly one operational accent: engineering cobalt. 

### Color Allocations
- **Single Accent (Engineering Cobalt):** `#0969da` (Light mode) and `#388bfd` (Dark mode). Used exclusively for verified telemetry, final state "After" numbers, key operational status indicators, and primary visual anchors.
- **Canvas & Surface:**
  - Light mode: Pure base `#ffffff`, subtle instrument shelf `#f6f8fa`.
  - Dark mode: Base `#0d1117`, instrument shelf `#161b22`.
- **Structural Borders:** Hairline `#d0d7de` in light mode; `#30363d` in dark mode.
- **Text & Telemetry Hierarchy:**
  - Primary Readouts / Headings: `#1f2328` (Light) / `#f0f6fc` (Dark).
  - Secondary Readouts / Metadata: `#656d76` (Light) / `#8b949e` (Dark).
  - Baseline "Before" Values: Muted neutral `#8c959f` (Light) / `#6e7681` (Dark) with optional strikethrough.

### Contrast & Comparative Rules
1. **Single-Accent Strictness:** Never introduce greens, ambers, purples, or teals for secondary states. Success or optimal states are signaled by the cobalt accent against neutral baselines.
2. **Before vs. After Delta Contract:** Baseline or legacy figures ("Before") must render in muted neutral text. Optimized figures ("After") must render in the primary accent.

## Typography

Typography prioritizes Korean and alphanumeric clarity with uniform character spacing and vertical alignment. 

### Font Family & Numerals
- Primary Stack: `Geist, -apple-system, BlinkMacSystemFont, 'Pretendard', 'Segoe UI', Helvetica, Arial, sans-serif`.
- All metric outputs, sensor data, and numerical charts must enforce `font-variant-numeric: tabular-nums` to ensure fixed column widths across consecutive measurement reports.

### Typographic Rules
- **No Monospace Mimicry:** Avoid decorative monospaced labels or simulated terminal tags.
- **No Kicker/Eyebrow Badges:** Eliminate pseudo-metadata banners above section headings. Let clear size and weight contrast direct reading order.
- **Strict Text Transformations:** Keep labels in sentence or normal title case; avoid forced wide-tracking uppercase.

## Layout & Spacing

Layouts are designed specifically to target GitHub's 830px maximum content column for desktop README files while maintaining natural responsiveness down to 320px mobile viewports.

### Grid & Density Architecture
- **Max Width:** Constrained rigidly to `830px` centered.
- **Layout Model:** Fixed multi-column metric cells (e.g., 2, 3, or 4 equal data partitions) separated by 1px solid dividers or concise 12px gutters.
- **Rhythm:** Compact 4px base increment (`4px`, `8px`, `12px`, `16px`, `24px`). Negative space is deliberate and structured, evoking instrument consoles rather than airy consumer landing pages.

### Form Factor Reflow
- **Desktop (830px down to 680px):** 3-column and 4-column metric blocks render horizontally side-by-side.
- **Tablet / Narrow (679px to 480px):** 4-column blocks collapse into a 2x2 grid; 3-column layouts collapse to single-column vertical stacks.
- **Mobile (< 480px):** All data tiles span 100% width with 8px vertical gaps and internal padding scaled down to `space-md` (12px).

## Elevation & Depth

This system avoids synthetic depth. Real-world measurement panels establish structure through planar enclosure and physical division rather than optical floating.

### Elevation Strategy
- **Z-Index & Shadows:** `box-shadow: none` is globally mandated. No drop shadows, inset shadows, or glow shaders may be applied under any condition.
- **Borders & Dividers:** All hierarchy is defined by a 1px solid hairline border (`#d0d7de` light / `#30363d` dark).
- **Surface Nesting:** Depth is conveyed solely through two surface tiers:
  - Base Panel: Background surface (`#ffffff` light / `#0d1117` dark).
  - Inset Instrument Wells / Cells: Surface container (`#f6f8fa` light / `#161b22` dark) enclosed inside hairline borders.
- **Dividers:** Internal subdivisions within components use 1px hairlines without colored margins or left-stripe highlights.

## Shapes

The shape system adopts a minimal, crisp radius reflecting machined steel parts, calibration displays, and industrial terminals.

### Radius Constraints
- **Standard Corners:** `4px` (`roundedness: 1`) applied uniformly to metric tiles, table enclosures, status chips, and control blocks.
- **Micro Elements:** `2px` applied to miniature badges and progress notches.
- **Prohibitions:** Circular pills, rounded-full tabs, and sharp zero-radius brutalism are strictly prohibited. Corners must feel engineered and subtly softened without becoming soft or playful.

## Components

### Metric Tiles (Before vs. After Panels)
- **Container:** Hairline border (`#d0d7de` / `#30363d`), surface background (`#ffffff` / `#0d1117`), 4px corner radius, padding `12px 16px`.
- **Header:** Metric descriptor label in `label-sm` color `#656d76` (`#8b949e` dark).
- **Measurement Matrix:**
  - Before value: `metric-delta`, `#8c959f` (light) / `#6e7681` (dark), strike-through or baseline notation.
  - Directional indicator: Plain horizontal directional arrow (`→`) in `#656d76`.
  - After value: `metric-display`, `#0969da` (light) / `#388bfd` (dark), bold tabular numerals.
- **Verification Note:** Footer caption in `body-sm` `#656d76` providing test parameters (e.g., "Inference latency on TensorRT FP16 / 1,000 samples").

### Precision Data Tables
- **Grid:** Outer hairline border with fully enclosed rows and columns.
- **Header Row:** Background `#f6f8fa` (`#161b22` dark), text `label-sm` `#1f2328` (`#f0f6fc` dark), bottom hairline border.
- **Data Rows:** Alternating lines are separated by 1px hairline horizontal rules; no zebra striping.
- **Cell Content:** Numerical readouts right-aligned with `tabular-nums`. Categorical attributes left-aligned.

### Status Indicators & Chips
- **Container:** 4px radius, 1px solid hairline border, background `#f6f8fa` (`#161b22` dark).
- **Geometry:** Height fixed at 22px, padding `0 8px`.
- **Text:** `label-sm`, single color mapping. Verified/Active states use `#0969da` text on matching faint tinted borders; dormant/archival states use `#656d76`. No dot icons or pulse animations.

### Input & Parameter Displays (Read-Only Instrument Fields)
- **Frame:** Inset appearance using `#f6f8fa` (`#161b22` dark) background with 1px hairline border.
- **Label:** Embedded at the top-left boundary in `label-sm` `#656d76`.
- **Value:** Monospaced or tabular numeral text in `body-md` `#1f2328` (`#f0f6fc` dark).

### Verification Cards
- **Geometry:** Structured container, max-width 830px, 4px border radius, 1px border.
- **Header:** 12px vertical padding, separated from content with a hairline rule. Title in `headline-md`.
- **Body Area:** Modular internal layout grouping metric tiles and comparative lists with zero synthetic shadow separation.