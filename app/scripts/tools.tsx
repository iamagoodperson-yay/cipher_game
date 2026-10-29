export type toolChoice = 1 | 2 | 3;

export const tools: Record<toolChoice, string> = {
  1: "Caesar Cipher",
  2: "Vigenère Cipher",
  3: "Rail Fence Cipher",
};