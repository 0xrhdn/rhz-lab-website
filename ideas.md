# RHZ LAB Website Design Direction

## Three initial directions

### Theme Name: Graphite Control Room
Very Brief Intro: A dark, tactile cybersecurity workstation with recessed panels, physical depth, and restrained amber instrumentation. It should feel like a serious laboratory rather than a flashy gaming dashboard.
Probability: 0.07

### Theme Name: Signal Archive
Very Brief Intro: An editorial research interface built around ink-black surfaces, cool blue signal traces, and documentary-style content blocks. The mood is analytical, calm, and quietly investigative.
Probability: 0.04

### Theme Name: Field Manual
Very Brief Intro: A utilitarian training console inspired by annotated technical manuals, stamped statuses, and modular field equipment. It balances practical clarity with a slightly rugged, mission-ready tone.
Probability: 0.06

## Selected approach: Graphite Control Room

### Design Movement
Modern skeuomorphism, translated into a restrained cybersecurity command-center interface. Physical depth, layered materials, recessed controls, and instrument-like status indicators provide tactility without imitating a legacy operating system.

### Core Principles
1. **Tactile hierarchy:** raised primary controls, recessed inputs, bevels, and layered shadows make actions legible and pressable.
2. **Operational clarity:** every section answers where the learner is, what is active, and what to do next.
3. **Restrained instrumentation:** amber is the signature signal; cyan, green, and red appear only as semantic indicators.
4. **Dense but breathable:** compact technical details are paired with deliberate whitespace and strong grouping.

### Color Philosophy
The base is graphite and near-black because RHZ LAB should feel like a focused workspace rather than a marketing page. Warm amber acts as the human-readable active signal, suggesting powered equipment and discovery. Cyan is reserved for network or information states, while green, red, and muted steel communicate system status without turning the interface into a rainbow.

### Layout Paradigm
A command-center shell: a persistent left console rail, a narrow utility header, and an offset main workspace that combines an operational hero, next-action queue, signal metrics, and capability modules. Sections align to a strong left edge but use asymmetric spans rather than a centered marketing grid.

### Signature Elements
- A compact RHZ symbol in a graphite bezel with amber status tick.
- Instrument strips with tiny labels, micro-bars, and monospace identifiers.
- Recessed dark panels with subtle grid/noise texture and crisp edge highlights.

### Interaction Philosophy
Interactions should feel like operating equipment: buttons depress slightly, panels lift on hover, focus states use a clear amber ring, and navigation changes preserve a sense of location. Keyboard access is first-class; the global search surface is opened with Ctrl+K.

### Animation
Use short, physical transitions: 160–220ms ease-out for buttons and panels, with transform and opacity only. Entrances should stagger gently across instrument cards. Avoid constant glow or decorative motion. Respect reduced-motion preferences and keep primary navigation instant.

### Typography System
Use **Space Grotesk** for UI and display headings, with **IBM Plex Mono** for identifiers, statuses, labels, telemetry, and technical values. Headlines are compact, assertive, and slightly tracked; body copy is readable at comfortable line height. Monospace is never used for long explanatory prose.

### Brand Essence
RHZ LAB is a premium cybersecurity learning and CTF infrastructure for self-directed practitioners and creators who want a serious place to build, practice, and measure technical skill.

Personality adjectives: **precise, composed, inquisitive**.

### Brand Voice
Headlines sound like operational prompts, not generic SaaS claims. CTAs are direct and action-oriented. Microcopy is calm, specific, and occasionally uses technical shorthand when it improves scanning.

Example lines:
- “Build the signal. Break the habit.”
- “Resume your next operation.”

### Wordmark & Logo
The mark is a compact geometric shield/aperture symbol: a cut graphite shield with an amber diagonal signal and a small cyan terminal notch. The wordmark uses a custom-spaced uppercase treatment with a tight technical rhythm, never a default logo lockup.

### Signature Brand Color
**Signal Amber — #F0A545.** It is the color of an active instrument: warm enough to feel human and legible, controlled enough to avoid arcade-like neon.

## Page structure for the first delivery
- Global shell with console sidebar, utility header, search trigger, system status, and profile control.
- Dashboard workspace with operational greeting, resume-learning hero, quick stats, progress telemetry, and capability modules.
- A short “platform infrastructure” section explaining that creators can define challenges, rooms, labs, paths, flags, hints, and walkthroughs without changing source code.
- A compact creator/admin callout and footer with system metadata.

## Asset references
- Hero: `/manus-storage/rhz-lab-hero_3fa98063.png`
- Lab visual: `/manus-storage/rhz-lab-lab-visual_52bfcc69.png`
- Network visual: `/manus-storage/rhz-lab-network-visual_320e761b.png`
- Logo: `/manus-storage/rhz-lab-logo_9afda854.png`
