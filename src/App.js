import React, { useState } from 'react';
import GenerateChart from './Components/GenerateChart';
import TableData from './Components/TableData';
import handleExportButtonClick from './Components/handleExportButtonClick';
import handleGenerateButtonClick from './Components/handleGenerateButtonClick';
import "./Custom.css";

function App() {
  const [wordFrequencies, setWordFrequencies] = useState([]);
  const [csvData, setCsvData] = useState('');
  const [parsed, setParsed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [exporting, setExporting] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await handleGenerateButtonClick(event, setWordFrequencies, setCsvData);
    setParsed(true);
    setSubmitting(false);
  };

  const handleExportClick = async () => {
    if (csvData) {
      setExporting(true);
      await handleExportButtonClick(csvData);
      setExporting(false);
    }
  };

  return (
    <div className='Main-Component'>
      <div className='Button-Group'>
        <form onSubmit={handleFormSubmit}>
          <button
            type="submit"
            title='Parse the content'
            className={`Submit-Button ${parsed ? 'Parsed' : ''}`}
            disabled={parsed || submitting}
          >
            {submitting ? 'Please wait...' : 'Submit'}
          </button>
        </form>
        <button
          onClick={handleExportClick}
          title='Export the CSV file'
          className={`Export-Button ${csvData ? '' : 'Disabled'}`}
          disabled={!csvData || exporting}
        >
          {exporting ? 'Exporting...' : 'Export'}
        </button>
      </div>
      {wordFrequencies.length > 0 && (
        <div>
          <div className='Table-Outer'>
            <TableData wordFrequencies={wordFrequencies} />
          </div>
          <GenerateChart wordFrequencies={wordFrequencies} />
        </div>
      )}
    </div>
  );
}

export default App;
