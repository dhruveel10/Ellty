import { useState } from 'react';
import './PageSelector.css';

const PageSelector = () => {
  const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5', 'Page 6', 'Page 7', 'Page 8'];
  const [selectedPages, setSelectedPages] = useState([false, true, true, true, false, false, true, false]);
  const [allPagesChecked, setAllPagesChecked] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [allPagesHovered, setAllPagesHovered] = useState(false);

  const handleCheckboxChange = (index) => {
    const newSelectedPages = [...selectedPages];
    newSelectedPages[index] = !newSelectedPages[index];
    setSelectedPages(newSelectedPages);

    const allSelected = newSelectedPages.every(page => page);
    setAllPagesChecked(allSelected);
  };

  const handleAllPagesToggle = () => {
    const newValue = !allPagesChecked;
    setAllPagesChecked(newValue);
    setSelectedPages(selectedPages.map(() => newValue));
  };

  const handleDone = () => {
    const hasSelection = selectedPages.some(page => page);

    if (!hasSelection) {
      alert('Please select at least one page!');
    } else {
      setSelectedPages(selectedPages.map(() => false));
      setAllPagesChecked(false);
      console.log('Selections cleared!');
    }
  };

  return (
    <div className="page-selector-container">
      <div className="page-selector-card">
        <div className="checkbox-row all-pages-row">
          <span className="checkbox-label">All pages</span>
          <div
            className={`checkbox ${allPagesChecked ? 'checked' : ''}`}
            onClick={handleAllPagesToggle}
            onMouseEnter={() => setAllPagesHovered(true)}
            onMouseLeave={() => setAllPagesHovered(false)}
          >
            {(allPagesChecked || allPagesHovered) && (
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 6L6 10.5L15.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>

        <div className="divider"></div>

        <div className="checkbox-list">
          {selectedPages.map((isChecked, index) => (
            <div key={index} className="checkbox-row">
              <span className="checkbox-label">{pages[index]}</span>
              <div
                className={`checkbox ${isChecked ? 'checked' : ''}`}
                onClick={() => handleCheckboxChange(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {(isChecked || hoveredIndex === index) && (
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 6L6 10.5L15.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="divider"></div>

        <div className="done-button-container">
          <button className="done-button" onClick={handleDone}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageSelector;
