export type toolChoice = 1 | 2 | 3;

export const tools: Record<toolChoice, Record<string, string>> = {
  1: {
    'title': "Caesar Cipher",
    'subtitle': "The OG cipher",
    'description': "A simple substitution cipher where each letter in the plaintext is shifted a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on. You can try this out and see how it works in the table above!",
  },
  2: {
    'title': "Vigenère Cipher",
    'description': "More advanced: A method of encrypting alphabetic text by using a simple form of polyalphabetic substitution.",
  },
  3: {
    'title': "Rail Fence Cipher",
    'description': "A transposition cipher that uses a fence pattern to encrypt the message.",
  },
};

const stage1evidence: Record<number, Record<string, string>> = {
  1: {
    "width": "20vw",
    "height": "150px",
    "description": "Note by designer",
    "details": "<p>Objectives objectives...</p><p>maybe loock (look + click) at the objective?</p>"
  },
  2: {
    "width": "30vw",
    "height": "300px",
    "description": "List of my favourite songs",
    "details": "<p>99 Luftballoons</p>"
  },
  3: {
    "width": "30vw",
    "height": "150px",
    "description": "Hmmm i wonder what this means and does",
    "details": "<p>CZGGJ</p>"
  },
};

const stage2evidence: Record<number, Record<string, string>> = {
  1: {
    "width": "25vw",
    "description": "1973-01-01",  
    "details": "<p>Dear HQ,</p><p>I hope this letter finds you well. I wanted to let you know that I have started work on The Project as we discussed. I have been researching and gathering information, and I am confident that we can make significant progress in the coming weeks. I will keep you updated on my progress and any new developments. Besides, 36 is a really cool number. Please let me know if you have any questions or concerns.</p><p>Best regards, Sparky</p>"
  },
  2: {
    "width": "15vw",
    "description": "1973-01-05",  
    "details": "<p>Dear Sparky,</p><p>Letter recieved. Godspeed.</p><p>Best regards, HQ</p>"
  },
  3: {
    "width": "20vw",
    "description": "1973-02-03",  
    "details": "<p>Dear HQ,</p><p>I have goten wind that our communications has been intercepted. As such, future communications will be more secure. I will keep you informed of any developments.</p><p>Best regards, Sparky</p>"
  },
  4: {
    "width": "20vw",
    "description": "1973-04-05",  
    "details": "<p>Dear HQ,</p><p>Dro Zbytomd rkc loox zbymoonsxq govv, kxn go rkfo bomosfon dro zkbdc boaesbon. Gybu gsvv crybdvi mywwoxmo. Ohzomdon dy lo mywzvodon sx <strong>drboo</strong> wyxdrc.</p><p>Best regards, Sparky</p>"
  }, // The Project has been proceeding well, and we have received the parts required. Work will shortly commence. Expected to be completed in three months.
  5: {
    "width": "20vw",
    "description": "1973-07-01",  
    "details": "<p>Dear HQ,</p><p>Wkh Surmhfw lv frpsohwh. L kdyh whvwhg lw dqg lw zrunv dv hashfwhg. L zloo eh vhqglqj lw wr brx vkruwob.</p><p>Best regards, Sparky</p>"
  }, // The Project is complete. I have tested it and it works as expected. I will be sending it to you shortly.
  6: {
    "width": "20vw",
    "description": "1973-09-03",  
    "details": "<p>Dear Sparky,</p><p>Surmhfw grqh brx vdb? Lw kdv ehhq <strong>wzr</strong> prqwkv dqg zh vwloo kdyh qrw uhfhlyhg lw. Zkhq zdv lw vklsshg rxw? Godspeed.</p><p>Best regards, HQ</p>"
  }, // The Project done you say? It has been *two* months and we still have not received it. When was it shipped out? Godspeed.
  7: {
    "width": "20vw",
    "description": "1973-09-05",  
    "details": "<p>Dear HQ,</p><p>Vjg Rtqlgev jcu dggp eqorngvgf cpf ycu <strong>ujkrrgf qwv</strong> vjg fca chvgt kv ycu hkpkujgf. Kv ujqwnf pqv jcxg vcmgp oqtg vjcp c hgy fcau. Uqogqpg owuv jcxg kpvgtegrvgf kv. K yknn kpxguvkicvg vjku hwtvjgt cpf mggr aqw wrfcvgf</p><p>Best regards, Sparky</p>"
  }, // The Project has been completed and was *shipped out* the day after it was finished. It should not have taken more than a few days. Someone must have intercepted it. I will investigate this further and keep you updated.
  8: {
    "width": "20vw",
    "description": "Message from Cipher Master",  
    "details": "I found these letter in the archives. They seem to be related to The Project and contain interesting information. I have included them here for your review. Read them carefully, the dates and contents may be important. Good luck, and let me know if you find anything interesting.",
    "bgcolor": "var(--main-evidence)",
  },
};

const stage3evidence: Record<number, Record<string, string>> = {
  1: {
    "width": "20vw",
    "description": "1973-07-04",  
    "details": "Placeholder"
  },
};

export type gameStage = 1 | 2 | 3;

export const evidence: Record<gameStage, Record<number, Record<string, string>>> = {
  1: stage1evidence,
  2: stage2evidence,
  3: stage3evidence,
};

export const gameStages: Record<gameStage, Record<string, string>> = {
  1: {
    "objective": "Find the encrypted message",
    "input_type": "text",
    "answer": "HELLO",
    "1-locked": "false",
    "2-locked": "true",
    "3-locked": "true",
  },
  2: {
    "objective": "???",
    "input_type": "date",
    "answer": "1973-07-04",
    "1-locked": "false",
    "2-locked": "true",
    "3-locked": "true",
  },
  3: {
    "objective": "???",
    "input_type": "text",
    "answer": "PLACEHOLDER",
    "1-locked": "false",
    "2-locked": "false",
    "3-locked": "true",
  },
};