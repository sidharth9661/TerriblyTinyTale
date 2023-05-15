async function handleGenerateButtonClick(event, setWordFrequencies, setCsvData) {
    event.preventDefault();
    try {
      const response = await fetch('https://www.terriblytinytales.com/test.txt');
      const text = await response.text();
      const wordCount = {};
      const words = text.split(/\W+/);
  
      words.forEach((word) => {
        if (word.trim() !== '') {
          wordCount[word] = (wordCount[word] || 0) + 1;
        }
      });
  
      const sortedFrequencies = Object.entries(wordCount).sort(
        (a, b) => b[1] - a[1]
      );
  
      const topTwentyWords = sortedFrequencies.slice(0, 20);
  
      const csvContent = `Word,Frequency\n${topTwentyWords
        .map(([word, frequency]) => `"${word}",${frequency}`)
        .join('\n')}`;
  
      setWordFrequencies(topTwentyWords);
      setCsvData(csvContent);
    } catch (error) {
      console.error('Error fetching or processing data:', error);
    }
  }
  
  export default handleGenerateButtonClick;
  