# Project Overview

This project is a simple React application built with TypeScript. It uses `react-router-dom` for navigation and includes
some basic components and assets.

## Technologies Used

- TypeScript
- React
- npm
- react-router-dom

## Project Structure

- `src/components/Agree.tsx`: Contains the `Agree` component which displays a message and an image.
- `src/components/Home.tsx`: Contains the `Home` component which asks the user a question and provides navigation
  buttons.
- `src/main.tsx`: The entry point of the application, setting up the React application with `MemoryRouter`.

## How to Run

1. Install dependencies:
    ```bash
    npm install
    ```

2. Start the development server:
    ```bash
    npm start
    ```

## Components

### Agree Component

Located in `src/components/Agree.tsx`, this component displays a message and an image.

### Home Component

Located in `src/components/Home.tsx`, this component asks the user a question and provides navigation buttons to either
agree or disagree.

## Routing

The application uses `MemoryRouter` from `react-router-dom` for navigation between the `Home` and `Agree` components.

## Assets

- `src/assets/agree.gif`: Image used in the `Agree` component.
- `src/assets/image.gif`: Image used in the `Home` component.
- `src/assets/heart.png`: Image used for the "Yes" button in the `Home` component.
- `src/assets/heart-arrow.png`: Image used for the "No" button in the `Home` component.# Project Overview
