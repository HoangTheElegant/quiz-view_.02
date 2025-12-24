import { DashboardItem, ItemType } from './types';
import React from 'react';

// Design System Colors
export const COLORS = {
  background: '#0A092D',
  surface: '#202140', // Updated from #2E3856
  primary: '#4255FF',
  textMain: '#FFFFFF',
  textSecondary: '#A8B1C8',
  success: '#2D9CDB',
  warning: '#F2C94C',
};

// Translations
export const TRANSLATIONS = {
  vi: {
    appTitle: "QuizAI",
    uploadDrop: "Thả tài liệu vào đây",
    uploadPlaceholder: "Kéo thả tài liệu hoặc...",
    btnUpload: "Tải tệp lên",
    btnPaste: "Dán văn bản",
    btnLibrary: "Chọn từ Kiến thức",
    
    // Filters
    filterAll: "Tất cả",
    filterQuiz: "Quiz đã tạo",
    filterFlashcards: "Thẻ ghi nhớ",
    filterFolders: "Thư mục",
    filterKnowledge: "Kiến thức & Trợ lý",
    filterHistory: "Lịch sử", // UPDATED: Shortened name

    // Settings
    settingsTitle: "Cài đặt",
    settingsLanguage: "Ngôn ngữ",
    settingsDarkMode: "Giao diện tối",
    noItems: "Không tìm thấy mục nào.",
    version: "QuizAI v1.0.3 (Build 20231026)",

    // Interactions
    modalPasteTitle: "Nhập nội dung",
    modalPastePlaceholder: "Dán văn bản của bạn vào đây...",
    modalPasteConfirm: "Xác nhận",
    modalPasteCancel: "Hủy",
    modalLibTitle: "Chọn từ Thư viện Kiến thức",
    modalCreateTitle: "Tạo mới",
    
    // Actions
    actionCreateQuiz: "Tạo Quiz thủ công",
    actionCreateFolder: "Tạo Thư mục",
    actionCreateFlashcard: "Tạo Thẻ ghi nhớ",
    actionCreateKnowledge: "Tạo Tài liệu & Kiến thức", 
    
    // Context Menu & Selection
    ctxEdit: "Chỉnh sửa",
    ctxRename: "Đổi tên",
    ctxMove: "Di chuyển",
    ctxDelete: "Xóa",
    ctxSelect: "Chọn nhiều",
    
    selSelected: "Đã chọn",
    selSelectAll: "Tất cả",
    selDeselect: "Bỏ chọn",
    
    createdAt: "Tạo lúc",
    resultScore: "Kết quả",
    donePercent: "Đã làm"
  },
  en: {
    appTitle: "QuizAI",
    uploadDrop: "Drop files here",
    uploadPlaceholder: "Drag & drop files or...",
    btnUpload: "Upload File",
    btnPaste: "Paste Text",
    btnLibrary: "From Library",

    // Filters
    filterAll: "All",
    filterQuiz: "Created Quizzes",
    filterFlashcards: "Flashcards",
    filterFolders: "Folders",
    filterKnowledge: "Knowledge & Assistant",
    filterHistory: "History", // UPDATED: Shortened name

    // Settings
    settingsTitle: "Settings",
    settingsLanguage: "Language",
    settingsDarkMode: "Dark Mode",
    noItems: "No items found.",
    version: "QuizAI v1.0.3 (Build 20231026)",

    // Interactions
    modalPasteTitle: "Input Content",
    modalPastePlaceholder: "Paste your text here...",
    modalPasteConfirm: "Confirm",
    modalPasteCancel: "Cancel",
    modalLibTitle: "Select from Knowledge Library",
    modalCreateTitle: "Create New",
    
    // Actions
    actionCreateQuiz: "Manual Quiz",
    actionCreateFolder: "Create Folder",
    actionCreateFlashcard: "Create Flashcard",
    actionCreateKnowledge: "Create Doc & Knowledge", 

    // Context Menu & Selection
    ctxEdit: "Edit",
    ctxRename: "Rename",
    ctxMove: "Move",
    ctxDelete: "Delete",
    ctxSelect: "Select Multiple",

    selSelected: "Selected",
    selSelectAll: "All",
    selDeselect: "None",

    createdAt: "Created at",
    resultScore: "Result",
    donePercent: "Done"
  }
};

// Mock Data
export const MOCK_DATA: DashboardItem[] = [
  {
    id: '1',
    title: 'Tư tưởng Hồ Chí Minh - Chương 1',
    type: ItemType.HISTORY,
    description: 'Bài kiểm tra giữa kỳ',
    progress: 85,
    timestamp: '14:30 25/10/2023',
  },
  {
    id: '2',
    title: 'Từ vựng IELTS Topic: Environment',
    type: ItemType.FLASHCARD,
    description: '50 thẻ',
    timestamp: '09:15 24/10/2023',
  },
  {
    id: '3',
    title: 'Tổng hợp đề thi Marketing',
    type: ItemType.FOLDER,
    description: '10 tài liệu',
    timestamp: '16:00 23/10/2023',
  },
  {
    id: '4',
    title: 'Giáo trình Sinh học 12.pdf',
    type: ItemType.KNOWLEDGE,
    description: 'PDF • 5MB',
    timestamp: '10:00 23/10/2023',
  },
  {
    id: '5',
    title: 'Lịch sử Đảng CSVN',
    type: ItemType.QUIZ,
    description: '50 câu hỏi',
    timestamp: '08:30 22/10/2023',
  },
  {
    id: '6',
    title: 'Thi thử Toán Cao Cấp',
    type: ItemType.HISTORY,
    description: 'Đề số 05',
    progress: 40,
    timestamp: '20:15 21/10/2023',
  }
];

// Icons
export const Icons = {
  Upload: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
  ),
  Paste: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
  ),
  Library: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
  ),
  MoreVertical: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
  ),
  
  // Base Icons
  Quiz: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
  ),
  Folder: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
  ),
  FolderFilled: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
  ),
  FileText: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
  ),
  Flashcard: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"></path><path d="M4 22h14a2 2 0 0 0 2-2"></path><path d="M2 20h2"></path></svg>
  ),
  History: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
  ),
  
  // Custom Detail Icons
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  ),
  // Document Content (White lines + Fold Triangle)
  DocumentContent: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 42" fill="none">
      <rect x="6" y="14" width="20" height="3" rx="1.5" fill="white" fillOpacity="0.9"/>
      <rect x="6" y="20" width="20" height="3" rx="1.5" fill="white" fillOpacity="0.9"/>
      <rect x="6" y="26" width="14" height="3" rx="1.5" fill="white" fillOpacity="0.9"/>
      <path d="M22 0V10H32L22 0Z" fill="white" fillOpacity="0.8"/>
    </svg>
  ),
  // Document Shape for Background (Filled)
  DocumentShapeFilled: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 42" fill="currentColor">
       <path d="M22 0H4C1.8 0 0 1.8 0 4V38C0 40.2 1.8 42 4 42H28C30.2 42 32 40.2 32 38V10L22 0Z" />
    </svg>
  ),
  
  // Clock Hands Only
  ClockHands: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),

  // History Outer Ring (Circular Arrow)
  HistoryRing: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 5.5v2.5h2.5" />
    </svg>
  ),
  
  AccessTime: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
  ),

  // UI Icons
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
  Bell: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Settings: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 1-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  ),
  Globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
  Languages: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
       <path d="m5 8 6 6"/>
       <path d="m4 14 6-6 2-3"/>
       <path d="M2 5h12"/>
       <path d="M7 2h1"/>
       <path d="m22 22-5-10-5 10"/>
       <path d="M14 18h6"/>
    </svg>
  ),
  Moon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
  ),
  Sun: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  ),
  Plus: () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
  ),
  
  // -- ACTION ICONS --
  Edit: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
  ),
  // UPDATED: I-Beam / Text Cursor Icon for Rename (distinct from Edit pencil)
  Rename: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7V4h16v3" />
        <path d="M9 20h6" />
        <path d="M12 4v16" />
    </svg>
  ),
  Move: () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 9-3 3 3 3"/><path d="M9 5 5 9l4 4"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
  ),
  Trash: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m22 4-12 12-4-4"/></svg>
  ),
  CheckSquare: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" opacity="0.2"/><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Square: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
  )
};