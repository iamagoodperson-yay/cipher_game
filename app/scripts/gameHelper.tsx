export type toolChoice = 1 | 2 | 3;

export const tools: Record<toolChoice, Record<string, string>> = {
  1: {
    'title': "Caesar Cipher",
    'subtitle': "The OG cipher",
    'description': "A simple substitution cipher where each letter in the plaintext is shifted a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on. You can try this out and see how it works in the table above!",
  },
  2: {
    'title': "Vigenère Cipher",
    'subtitle': "Caesar with a key phrase",
    'description': "A method of encrypting alphabetic text by using a simple form of 'Caesar cipher-esque' shifting. A keyword is used to determine the shift for each letter in the plaintext. For example, if the keyword is 'KEY', the first letter of the plaintext would be shifted by the position of 'K' in the alphabet, the second letter by 'E', and so on. This makes it more secure than a simple Caesar cipher. You can try this out and see how it works in the table above!",
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
    "description": "1973-07-03",  
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
    "details": "<p>I found these letter in the archives. They seem to be related to The Project and contain interesting information. I have included them here for your review. Read them carefully, the dates and contents may be important. Good luck, and let me know if you find anything interesting.</p>",
    "bgcolor": "var(--main-evidence)",
  },
};

const stage3evidence: Record<number, Record<string, string>> = {
  1: {
    "width": "15vw",
    "description": "Mail to HQ",  
    "details": "<p>To: <strong>REDACTED</strong></p><br/><p>From: Sparky</p><p>4 Wood Lane</p><p>Stadtberg City</p>"
  },
  2: {
    "width": "20vw",
    "description": "Attached to mail",  
    "details": "<p>To: Whomever it may concern</p><p><strong>DO NOT OPEN OR TAMPER WITH CONTENTS</strong></p>"
  },
  3: {
    "width": "20vw",
    "description": "Tirol Industries Stadtberg City Records",  
    "details": "<p>Weather for the hour: 7/10 <strong>SUNNY</strong></p><p>1973-07-04 14:27 Hupxyyy seme: Mgnblvree Ucgl Ngmg Bdxcpr pwwvrtwx</p><p>1973-07-04 14:31 Hupxyyy sbp Lcebj Ahqhqllvrq Eupugyujn Aanl fcfn gb: Qluqgzwlt Pgls Cbql Issguy</p>"
    // 1973-07-04 14:27 Package from: Stadtberg City Post Office recieved
    // 1973-07-04 14:31 Package for Tirol Industries Machigawa City sent to: Stadtberg City Post Office
  },
  4: {
    "width": "30vw",
    "description": "Records from Stadtberg City Post Office",  
    "details": "<p>1973-07-04 15:32</p><p>Package from: 4 Wood Lane recieved</p><p>Given tracking ID: SB-8914</p><p>1973-07-04 15:35</p><p>Package from: Tirol Industries recieved</p><p>Given tracking ID: SB-8614</p><p>1973-07-04 15:39</p><p>Package MG-2718 recieved</p><p>...</p><p>1973-07-04 16:20</p><p>Package SB-8914 sent to: Rutthan City Post Office</p><p>1973-07-04 16:27</p><p></p>Package MG-2718 sent to: 24 Green St<p>1973-07-04 16:27</p><p>Package SB-8614 sent to: Machigawa City Post Office</p>"
  },
  5: {
    "width": "30vw",
    "description": "Records from Rutthan City Post Office",  
    "details": "<p>1973-07-05 19:32</p>Package SB-8914 recieved</p><p>1973-07-05 19:35</p>Package MG-8914 sent to: 89 Commerce Rd</p><p>...</p><p>1973-07-05 19:40</p><p>Package SB-8914 sent to: Machigawa City Post Office</p><p>1973-07-05 19:41</p><p>Package from: 12 Pack Blvd received</p><p>Given tracking ID: RT-2049</p>"
  },
  6: {
    "width": "30vw",
    "description": "Machigawa City Post Office Records",  
    "details": "<p>1973-07-06 08:40</p><p>Package SB-8614 from: Stadtberg City Post Office recieved</p><p><p>1973-07-06 08:46</p><p>Package from: 4-9-3-chome received</p><p></p>Given Tracking ID: MG-0781<p>...</p><p>1973-07-06 11:33</p><p>Package MG-0781 sent to: Rutthan City Post Office</p><p>1973-07-06 11:40</p><p>Package SB-8914 recieved from: Rutthan City Post Office</p><p>1973-07-06 11:42</p><p>Package SB-8914 sent to: Tirol Industries Machigawa City</p><p>1973-07-06 11:43</p><p>Package SB-8614 sent to: Tirol Industries Machigawa City</p>"
  },
  7: {
    "width": "25vw",
    "description": "Tirol Industries Machigawa City Records",  
    "details": "<p>Weather for the hour: <strong>4</strong>/10 RAINY</p><p>1973-07-06 12:53 Tegoeki xs: Xmvsp Mrhywxvmiw Vyxxler Gmxc wirx</p><p>1973-07-06 12:58 Tegoekiw jvsq: Qeglmkeae Gmxc Tswx Sjjmgi vigmizih</p><br/><p>Weather for the hour: <strong>CLOUDY</strong></p><p>1973-07-06 13:05 Rlqedeg Dwyupc Mfuym - Gtubw Qki Chh Dqff zumo: Xowkgilku Fgvj Divr Qqtcfc qashhb</p><p>1973-07-06 13:10 Rlqedeg Dwyupc Mfuym - Gtubw Lkys Iqc Hzil ipqx: Auffkroqd Akem Jrqv Ztzlag ain ll uecldeg</p>"
    // 1973-07-06 12:53 Package to: Tirol Industries Rutthan City sent
    // 1973-07-06 12:58 Packages from: Machigawa City Post Office recieved
    // 1973-07-06 13:05 Package Sierra Bravo - Eight Six One Four from: Machigawa City Post Office opened
    // 1973-07-06 13:10 Package Sierra Bravo - Eight Nine One Four from: Machigawa City Post Office put in storage
  },
  8: {
    "width": "20vw",
    "description": "89 Commerce Rd Records",
    "details": "<p>1973-07-05 20:35</p><p>Package MG-8914 recieved</p>"
  }
};

const stage4evidence: Record<number, Record<string, string>> = {
  1: {
    "width": "20vw",
    "description": "Placeholder",  
    "details": "<p>Placeholder</p>"
  },
};

export type gameStage = 1 | 2 | 3 | 4;

export const evidence: Record<gameStage, Record<number, Record<string, string>>> = {
  1: stage1evidence,
  2: stage2evidence,
  3: stage3evidence,
  4: stage4evidence,
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
    "objective": "Where did The Project go?",
    "input_type": "text",
    "answer": "Tirol Industries Machigawa City",
    "1-locked": "false",
    "2-locked": "false",
    "3-locked": "true",
  },
  4 :{
    "objective": "???",
    "input_type": "text",
    "answer": "???",
    "1-locked": "false",
    "2-locked": "false",
    "3-locked": "true",
  }
};