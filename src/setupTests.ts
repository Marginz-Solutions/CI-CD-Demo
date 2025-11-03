import '@testing-library/jest-dom';
import { vi } from 'vitest'

// Mock image imports
vi.mock('./assets/react.svg', () => ({ default: 'react.svg' }))
vi.mock('/vite.svg', () => ({ default: 'vite.svg' }))

// Mock CSS modules if needed
vi.mock('./App.css', () => ({}))