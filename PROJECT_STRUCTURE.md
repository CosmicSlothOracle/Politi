# Politi Cat Project Structure

This document outlines the recommended folder structure for the Politi Cat project.

## Root Directory

```
politi-cat/
├── dist/                  # Build output (generated)
├── docs/                  # Documentation
├── node_modules/          # Dependencies (generated)
├── public/
│   ├── assets/
│   │   ├── music/         # Background music
│   │   └── ui/            # Icons, buttons, backgrounds
│   ├── cards/             # Card images (politicians)
│   └── favicon.ico        # Website icon
├── src/
│   ├── components/
│   │   ├── CardDisplay.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── GameBoard.tsx
│   │   ├── HUD.tsx
│   │   ├── InGamePage.tsx
│   │   ├── LandingPage.tsx
│   │   ├── Loader.tsx
│   │   └── VictoryScreen.tsx
│   ├── data/
│   │   └── cards.json
│   ├── game/
│   │   ├── gameEngine.ts
│   │   ├── types.ts
│   │   └── useGameState.ts
│   ├── hooks/
│   │   └── useSound.ts
│   ├── styles/
│   │   └── main.css
│   ├── App.tsx
│   └── main.tsx
├── .eslintrc.json
├── .gitignore
├── index.html             # (should move to public/index.html)
├── package-lock.json
├── package.json
├── PROJECT_STRUCTURE.md
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Recommended Cleanup Actions

1. Move `index.html` to `public/index.html`
2. Remove the unnecessary `src/public` folder
3. Remove empty `cardData.ts` file since we're using `cards.json`
4. Move any assets from the `dist` folder to appropriate locations in `public`

## Component Organization

The components are organized following functional responsibilities:

```
src/components/
├── CardDisplay.tsx        # Individual card rendering
├── ErrorBoundary.tsx      # Error handling wrapper
├── GameBoard.tsx          # Game board UI
├── HUD.tsx                # Heads-up display
├── InGamePage.tsx         # Game screen
├── LandingPage.tsx        # Entry/main menu screen
├── Loader.tsx             # Loading indicator
└── VictoryScreen.tsx      # Victory screen
```

## Game Logic Organization

Game logic is isolated in its own directory:

```
src/game/
├── gameEngine.ts          # Core game mechanics
├── types.ts               # TypeScript type definitions
└── useGameState.ts        # Game state management hook
```

## Data Organization

Static data is stored in JSON format:

```
src/data/
└── cards.json             # Card data definitions
```

## Custom Hooks

Reusable React hooks:

```
src/hooks/
└── useSound.ts            # Audio management hook
```

## Assets Organization

Assets should be organized by type:

```
public/assets/
├── music/
│   └── theme.mp3          # Game theme music
└── ui/
    └── (UI elements)      # Buttons, backgrounds, etc.

public/cards/
└── (Card images)          # Images for game cards
```

## Build and Development

- Use `npm run dev` for development
- Use `npm run build` for production builds
- Use `npm run preview` to preview production builds locally
