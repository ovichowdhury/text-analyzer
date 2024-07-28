import LongestWordInParagraph from '../interface/longest-word-in-paragraph/longest-word-in-paragraph.interface';
import {
  getLongestWordInParagraphs,
  separateParagraphs,
  separateSentences,
} from './text.util';

describe('TextUtils', () => {
  it('[TextUtils] separateSentences function should return positive', () => {
    const text =
      'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.';
    expect(separateSentences(text).length).toBe(2);

    const text2 = 'Hello world. I am from mars!';
    expect(separateSentences(text2)).toEqual([
      'Hello world',
      'I am from mars!',
    ]);
  });

  it('[TextUtils] separateParagraphs function should return positive', () => {
    const text =
      'The quick brown fox jumps over the lazy dog. \n The lazy dog slept in the sun.';
    expect(separateParagraphs(text).length).toBe(2);

    const text2 = 'Hello world.\nI am from mars!';
    expect(separateParagraphs(text2)).toEqual([
      'Hello world.',
      'I am from mars!',
    ]);
  });

  it('[TextUtils] getLongestWordInParagraphs function should return positive', () => {
    const text =
      'The quick brown fox jumps over the lazy dog. \n The lazy dog slept in the sun.';
    const result: LongestWordInParagraph[] = getLongestWordInParagraphs(text);
    expect(result.length).toBe(2);
    expect(result[0].word).toEqual('quick');
    expect(result[1].word).toEqual('slept');
  });
});
