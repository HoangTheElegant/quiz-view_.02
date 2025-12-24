export enum ItemType {
  QUIZ = 'QUIZ',
  FOLDER = 'FOLDER',
  KNOWLEDGE = 'KNOWLEDGE',
  FLASHCARD = 'FLASHCARD',
  HISTORY = 'HISTORY',
  // UI Types for Settings/System
  SETTING_LANGUAGE = 'SETTING_LANGUAGE',
  SETTING_THEME = 'SETTING_THEME',
}

export interface DashboardItem {
  id: string;
  title: string;
  type: ItemType;
  description: string; // Used for generic info
  progress?: number; // 0 to 100
  timestamp: string; // Formatted string like "14:30 24/12/2025"
}

export enum FilterType {
  ALL = 'ALL',
  CREATED_QUIZ = 'CREATED_QUIZ',
  FLASHCARDS = 'FLASHCARDS',
  FOLDERS = 'FOLDERS',
  KNOWLEDGE = 'KNOWLEDGE',
  HISTORY = 'HISTORY',
}