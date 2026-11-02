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
    "width": "20vw",
    "height": "150px",
    "description": "Note by designer",
    "details": "Objectives objectives... \n maybe loock (look + click) at the objective?"
  },
  2: {
    "width": "30vw",
    "height": "300px",
    "description": "List of my favourite songs",
    "details": "99 Luftballoons"
  },
  3: {
    "width": "30vw",
    "height": "150px",
    "description": "Hmmm i wonder what this means and does",
    "details": "CZGGJ"
  },
};

export type gameStage = 1 | 2;

export const gameStages: Record<gameStage, Record<string, string>> = {
  1: {
    "objective": "Find the encrypted message",
    "input_type": "text",
    "answer": "HELLO",
  },
  2: {
    "objective": "???",
    "input_type": "date",
    "answer": "1873-01-01",
  },
};