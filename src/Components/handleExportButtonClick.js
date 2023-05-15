function handleExportButtonClick(csvData) {
    const link = document.createElement('a');
    link.href = `data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`;
    link.download = 'word_frequencies.csv';
    link.click();
  }
  
export default handleExportButtonClick;
  