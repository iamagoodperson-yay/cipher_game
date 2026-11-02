export type toolChoice = 1 | 2 | 3;

export const tools: Record<toolChoice, Record<string, string>> = {
  1: {
    'title': "Caesar Cipher",
    'description': "A simple substitution cipher where each letter in the plaintext is shifted a certain number of places down the alphabet.",
    'locked': 'false'
  },
  2: {
    'title': "Vigenère Cipher",
    'description': "A method of encrypting alphabetic text by using a simple form of polyalphabetic substitution.",
    'locked': 'true'
  },
  3: {
    'title': "Rail Fence Cipher",
    'description': "A transposition cipher that uses a fence pattern to encrypt the message.",
    'locked': 'true'
  },
};

export type evidenceChoice = 1 | 2 | 3;

export const evidence: Record<evidenceChoice, Record<string, string>> = {
  1: {
    "width": "40vw",
    "height": "150px",
    "left": "30vw",
    "description": "Evidence 1",
    "details": "Details about Evidence 1"
  },
  2: {
    "width": "40vw",
    "height": "150px",
    "left": "30vw",
    "description": "Evidence 2",
    "details": "More details about Evidence 2"
  },
  3: {
    "width": "30vw",
    "height": "300px",
    "left": "35vw",
    "description": "Evidence 3",
    "details": "More details about Evidence 3"
  },
};