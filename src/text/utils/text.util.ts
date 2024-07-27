import LongestWordInParagraph from '../interface/longest-word-in-paragraph/longest-word-in-paragraph.interface';

export function separateSentences(text: string): string[] {
  const sentenceRegex = /[!.?]\s*(?=[A-Z])/g;
  return text.split(sentenceRegex);
}

export function separateParagraphs(text: string): string[] {
  return text.split('\n');
}

export function getLongestWordInParagraphs(
  text: string,
): LongestWordInParagraph[] {
  const result: LongestWordInParagraph[] = [];
  const paragraphs = separateParagraphs(text);
  paragraphs.forEach((p) => {
    const pSanitized = p.replace(/[^\w\s]/g, ''); // remove punctuations
    const words = pSanitized.split(' ');
    let maxWord = '';
    words.forEach((w) => {
      if (w.length > maxWord.length) maxWord = w;
    });
    result.push({
      word: maxWord,
      numOfCharacters: maxWord.length,
      paragraph: p,
    });
  });
  return result;
}
