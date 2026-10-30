export type toolChoice = 1 | 2 | 3;

export const tools: Record<toolChoice, string> = {
  1: "Caesar Cipher",
  2: "Vigenère Cipher",
  3: "Rail Fence Cipher",
};

export type evidenceChoice = 1 | 2 | 3;

export const evidence: Record<evidenceChoice, Record<string, string>> = {
  1: {
    "description": "Evidence 1",
    "details": "Details about Evidence 1"
  },
  2: {
    "description": "Evidence 2",
    "details": "More details about Evidence 2"
  },
  3: {
    "description": "Evidence 3",
    "details": "More details about Evidence 3"
  },
};