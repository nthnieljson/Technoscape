export const QUESTION_DISPLAY_FORMATS = {
  VERTICAL: "vertical",
  WINDOW: "window",
  BINARY: "binary",
};

export const QUESTION_DATA = [
  {
    id: 0,
    question:
      "Based on your GPS, you are located in Jakarta. How far do you want to travel?",
    options: [
      {
        id: 0,
        option: "Nearby (<50km)",
        nextQuestionId: 1,
      },
      {
        id: 1,
        option: "Around Jabodetabek",
        nextQuestionId: 1,
      },
      {
        id: 2,
        option: "Within Java Island",
        nextQuestionId: 1,
      },
      {
        id: 3,
        option: "Others (outside Java)",
        nextQuestionId: 1,
      },
    ],
    display: QUESTION_DISPLAY_FORMATS.WINDOW,
  },
  {
    id: 1,
    question: "How many people are you traveling with (including you)?",
    options: [
      {
        id: 0,
        option: "I’m alone",
        nextQuestionId: 3,
      },
      {
        id: 1,
        option: "With a partner (2 people)",
        nextQuestionId: 3,
      },
      {
        id: 2,
        option: "3-5 people",
        nextQuestionId: 2,
      },
      {
        id: 3,
        option: "6-8 people",
        nextQuestionId: 2,
      },
    ],
    display: QUESTION_DISPLAY_FORMATS.VERTICAL,
  },
  {
    id: 2,
    question: "What is your budget per night? (in Rupiah)",
    options: [
      {
        id: 0,
        option: "<1M",
        nextQuestionId: 4,
      },
      {
        id: 1,
        option: "1 - 5M",
        nextQuestionId: 4,
      },
      {
        id: 2,
        option: "5 - 15M",
        nextQuestionId: 4,
      },
      {
        id: 3,
        option: "15M+",
        nextQuestionId: 4,
      },
    ],
    display: QUESTION_DISPLAY_FORMATS.VERTICAL,
  },
  {
    id: 3,
    question: "What is your budget per night? (in Rupiah)",
    options: [
      {
        id: 0,
        option: "<500k",
        nextQuestionId: 4,
      },
      {
        id: 1,
        option: "500K - 2.5M",
        nextQuestionId: 4,
      },
      {
        id: 2,
        option: "2.5 - 7.5M",
        nextQuestionId: 4,
      },
      {
        id: 3,
        option: "7.5M+",
        nextQuestionId: 4,
      },
    ],
    display: QUESTION_DISPLAY_FORMATS.VERTICAL,
  },
  {
    id: 4,
    question: "What do you want to do during the staycation?",
    options: [
      {
        id: 0,
        option: "reading books",
        nextQuestionId: -1,
      },
      {
        id: 1,
        option: "playing games",
        nextQuestionId: -1,
      },
      {
        id: 2,
        option: "trying local foods",
        nextQuestionId: -1,
      },
      {
        id: 3,
        option: "enjoying the nature",
        nextQuestionId: -1,
      },
    ],
    display: QUESTION_DISPLAY_FORMATS.WINDOW,
  },
];
