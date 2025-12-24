import React, { useState, useEffect } from 'react';
import QuickUploadArea from './components/QuickUploadArea';
import FilterTabs from './components/FilterTabs';
import DashboardListItem from './components/DashboardListItem';
import SettingsSheet from './components/SettingsSheet';
import { PasteDialog, LibraryDialog, CreateSheet, ContextMenuSheet } from './components/InteractionModals';
import { MOCK_DATA, Icons, TRANSLATIONS } from './constants';
import { FilterType, ItemType, DashboardItem } from './types';

const App: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(FilterType.ALL);
  
  // Settings State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [language, setLanguage] = useState<'vi' | 'en'>('vi');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Interaction State
  const [isPasteOpen, setIsPasteOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isCreateSheetOpen, setIsCreateSheetOpen] = useState(false);

  // --- NEW STATE: Context Menu & Selection ---
  const [contextItem, setContextItem] = useState<DashboardItem | null>(null);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Localization helper
  const t = TRANSLATIONS[language];

  // Filtering Logic
  const filteredItems = MOCK_DATA.filter((item) => {
    if (selectedFilter === FilterType.ALL) return true;
    if (selectedFilter === FilterType.CREATED_QUIZ) return item.type === ItemType.QUIZ;
    if (selectedFilter === FilterType.FLASHCARDS) return item.type === ItemType.FLASHCARD;
    if (selectedFilter === FilterType.FOLDERS) return item.type === ItemType.FOLDER;
    if (selectedFilter === FilterType.KNOWLEDGE) return item.type === ItemType.KNOWLEDGE;
    if (selectedFilter === FilterType.HISTORY) return item.type === ItemType.HISTORY;
    return true;
  });

  // --- HANDLERS ---

  // 1. Context Menu & Long Press
  const handleItemMenu = (item: DashboardItem) => {
      setContextItem(item);
  };

  // 2. Selection Logic
  const toggleSelectionMode = (initialId?: string) => {
      setIsSelectionMode(true);
      if (initialId) {
          setSelectedIds(new Set([initialId]));
      } else {
          setSelectedIds(new Set());
      }
      setContextItem(null); // Close context menu if open
  };

  const handleToggleItem = (id: string) => {
      const newSet = new Set(selectedIds);
      if (newSet.has(id)) {
          newSet.delete(id);
      } else {
          newSet.add(id);
      }
      setSelectedIds(newSet);
      
      // OPTIONAL: Auto exit selection mode if empty. 
      // For now, let's keep it manual per typical UX patterns where user has to click "X" or "Done"
      if (newSet.size === 0 && !isSelectionMode) {
          setIsSelectionMode(false);
      }
  };

  const handleSelectAll = () => {
      if (selectedIds.size === filteredItems.length) {
          setSelectedIds(new Set()); // Deselect all
      } else {
          const allIds = filteredItems.map(i => i.id);
          setSelectedIds(new Set(allIds));
      }
  };

  const exitSelectionMode = () => {
      setIsSelectionMode(false);
      setSelectedIds(new Set());
  };

  // 3. Move Constraint Check
  // Logic: Disable Move button if ANY selected item is HISTORY
  const hasHistoryItem = Array.from(selectedIds).some(id => {
      const item = MOCK_DATA.find(i => i.id === id);
      return item?.type === ItemType.HISTORY;
  });

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-[#4255FF] selection:text-white transition-colors duration-300 ${isDarkMode ? 'bg-[#0A092D] text-white' : 'bg-[#F5F7FA] text-[#0A092D]'}`}>
      
      {/* Header / Top Bar */}
      <header className={`sticky top-0 z-40 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b transition-colors duration-300 ${isDarkMode ? 'bg-[#0A092D]/90 border-white/5' : 'bg-white/90 border-gray-200'}`}>
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-[#4255FF] flex items-center justify-center text-white font-bold text-xl">Q</div>
           <span className="font-bold text-xl tracking-tight">{t.appTitle}</span>
        </div>
        
        {/* Only show settings when NOT in selection mode to avoid distraction? 
            Or keep it accessible? Let's keep it accessible but maybe dim it. */}
        <button 
          onClick={() => setIsSettingsOpen(true)}
          className={`p-2.5 rounded-full transition-all duration-200 active:scale-95 ${
            isDarkMode 
            ? 'hover:bg-[#2E3856] text-[#A8B1C8] hover:text-white' 
            : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
          }`}
          aria-label={t.settingsTitle}
        >
          <Icons.Settings />
        </button>
      </header>

      {/* Main Content Body */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex flex-col flex-1 w-full pb-32">
        
        {/* Section A: Quick Upload - IN-PLACE BEHAVIOR: Hide when selecting */}
        {!isSelectionMode && (
          <div className="animate-fade-in-down origin-top">
            <QuickUploadArea 
              language={language} 
              isDarkMode={isDarkMode} 
              onPasteClick={() => setIsPasteOpen(true)}
              onLibraryClick={() => setIsLibraryOpen(true)}
            />
          </div>
        )}

        {/* Section B: Filter Tabs - IN-PLACE BEHAVIOR: Hide when selecting */}
        {!isSelectionMode && (
          <div className={`sticky top-[73px] z-30 animate-fade-in transition-colors duration-300 ${isDarkMode ? 'bg-[#0A092D]' : 'bg-[#F5F7FA]'}`}>
            <FilterTabs 
              selectedFilter={selectedFilter} 
              onSelect={setSelectedFilter} 
              language={language}
              isDarkMode={isDarkMode}
            />
          </div>
        )}

        {/* Section C: List Content */}
        {/* Added extra top margin when selection mode is active to account for missing header elements space if needed, 
            though usually removing them pulls content up which is desired for focus. */}
        <div className={`flex-1 animate-fade-in-up transition-all ${isSelectionMode ? 'mt-0' : 'mt-2'}`}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <DashboardListItem 
                key={item.id} 
                item={item} 
                isDarkMode={isDarkMode} 
                language={language}
                // Selection Props
                isSelectionMode={isSelectionMode}
                isSelected={selectedIds.has(item.id)}
                onToggleSelect={handleToggleItem}
                // Interactions
                onMenuClick={handleItemMenu}
                onLongPress={(it) => {
                    // Logic: Long press triggers Selection Mode directly "In-Place"
                    toggleSelectionMode(it.id);
                }}
              />
            ))
          ) : (
            <div className={`text-center py-20 ${isDarkMode ? 'text-[#A8B1C8]' : 'text-gray-500'}`}>
              <p>{t.noItems}</p>
            </div>
          )}
        </div>

      </main>

      {/* FAB - IN-PLACE BEHAVIOR: Hide when selecting */}
      {!isSelectionMode && (
        <button 
            onClick={() => setIsCreateSheetOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-[#4255FF] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#4255FF]/30 hover:bg-[#3b4ce0] hover:scale-110 transition-all duration-300 z-30 animate-fade-in"
            aria-label="Add New"
        >
            <Icons.Plus />
        </button>
      )}

      {/* --- SELECTION BOTTOM BAR --- */}
      <div className={`
         fixed bottom-0 left-0 right-0 z-50 p-4 border-t backdrop-blur-xl transition-transform duration-300 ease-in-out
         ${isDarkMode ? 'bg-[#0A092D]/95 border-white/10' : 'bg-white/95 border-gray-200'}
         ${isSelectionMode ? 'translate-y-0' : 'translate-y-full'}
      `}>
          <div className="max-w-3xl mx-auto flex items-center justify-between">
             <div className="flex items-center gap-4">
                 <button onClick={exitSelectionMode} className="p-2 rounded-full hover:bg-gray-500/10">
                    <Icons.X />
                 </button>
                 <span className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                     {selectedIds.size} {t.selSelected}
                 </span>
             </div>
             
             <div className="flex items-center gap-2">
                 {/* Select All */}
                 <button 
                    onClick={handleSelectAll}
                    className={`px-3 py-1.5 text-sm font-semibold rounded-lg ${isDarkMode ? 'text-[#A8B1C8] hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                 >
                    {selectedIds.size === filteredItems.length ? t.selDeselect : t.selSelectAll}
                 </button>

                 {/* Move Action - Disabled if History present */}
                 <button 
                    disabled={hasHistoryItem || selectedIds.size === 0}
                    className={`p-3 rounded-xl transition-all ${
                        (hasHistoryItem || selectedIds.size === 0)
                            ? 'opacity-30 cursor-not-allowed text-gray-400 bg-gray-500/10' 
                            : 'bg-[#4255FF] text-white shadow-lg shadow-[#4255FF]/20 active:scale-95'
                    }`}
                 >
                     <Icons.Move />
                 </button>

                 {/* Delete Action */}
                 <button 
                    disabled={selectedIds.size === 0}
                    className={`p-3 rounded-xl transition-all ${
                        selectedIds.size === 0
                         ? 'opacity-30 cursor-not-allowed text-gray-400 bg-gray-500/10'
                         : 'bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white active:scale-95'
                    }`}
                 >
                     <Icons.Trash />
                 </button>
             </div>
          </div>
      </div>

      {/* --- Modals & Sheets --- */}
      
      <SettingsSheet 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      <PasteDialog 
        isOpen={isPasteOpen}
        onClose={() => setIsPasteOpen(false)}
        language={language}
        isDarkMode={isDarkMode}
      />

      <LibraryDialog
        isOpen={isLibraryOpen}
        onClose={() => setIsLibraryOpen(false)}
        language={language}
        isDarkMode={isDarkMode}
      />

      <CreateSheet
        isOpen={isCreateSheetOpen}
        onClose={() => setIsCreateSheetOpen(false)}
        language={language}
        isDarkMode={isDarkMode}
      />

      <ContextMenuSheet 
        isOpen={!!contextItem}
        onClose={() => setContextItem(null)}
        item={contextItem}
        language={language}
        isDarkMode={isDarkMode}
        onSelect={() => contextItem && toggleSelectionMode(contextItem.id)}
        onDelete={() => console.log('Deleted', contextItem?.id)}
      />

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-down { animation: fadeInDown 0.4s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; animation-delay: 0.1s; opacity: 0; }
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;