import React from "react";

const MultiTab = (...tabs: any[]) => {
  return (
    <div className="border-b border-gray-200 dark:border-neutral-700">
      <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
        tabs.map((tab, index) => (
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 active inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm text-gray-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:text-blue-500"
          id="tabs-with-underline-item-1"
          role="tab">
          Tab 1
        </button>
        ))
      </nav>
    </div>
  );
};

export default MultiTab;
