# Politi Cat Project Structure

This document outlines the recommended folder structure for the Politi Cat project.

## Root Directory

```
politi-cat/
├── dist/                  # Build output (generated)
├── docs/                  # Documentation
├── node_modules/          # Dependencies (generated)
├── public/                # Static assets
│   ├── assets/
│   │   ├── music/         # Audio files
│   │   └── ui/            # UI assets
│   ├── cards/             # Card images
│   └── favicon.ico        # Site favicon
├── src/                   # Source code
│   ├── components/        # React components
│   ├── data/              # JSON data files
│   ├── game/              # Game logic
│   ├── hooks/             # Custom React hooks
│   ├── styles/            # CSS styles
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Entry point
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore file
├── index.html             # HTML entry point
├── package-lock.json      # NPM lock file
├── package.json           # Project dependencies
├── PROJECT_STRUCTURE.md   # This file
├── README.md              # Project documentation
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript Node configuration
└── vite.config.ts         # Vite configuration
```

## Recommended Cleanup Actions

1. Remove the unnecessary `src/public` folder
2. Remove empty `cardData.ts` file since we're using `cards.json`
3. Remove the `-p` folder if it's not needed
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
