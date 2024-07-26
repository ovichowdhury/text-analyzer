export function separateSentences(text: string): string[] {
  const sentenceRegex = /[!.?]\s*(?=[A-Z])/g;
  return text.split(sentenceRegex);
}

export function separateParagraphs(text: string): string[] {
  return text.split('\n\n');
}
