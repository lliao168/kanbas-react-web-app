import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API =  `${API_BASE}/api/courses`;
const QUIZZES_API = `${API_BASE}/api/quizzes`;
const QUESTIONS_API = `${API_BASE}/api/questions`;

export interface Choice {
    _id: string;
    text: string;
    isCorrect: boolean;
  }
  
export interface TrueFalse {
    _id: string;
    isTrue: boolean;
  }
  
export interface Blank {
    _id: string;
    correctAnswers: string[];
    caseInsensitive: boolean;
  }
export interface Question { 
    _id: string; 
    title: string; 
    quizId: string; 
    question: string;
    points: number, 
    questionType: string;
    multipleChoice?: Choice[];
    trueFalse?: TrueFalse[];
    fillBlank?: Blank[];

};

export const updateQuestion = async (question: any) => {
    const response = await axios.
      put(`${QUESTIONS_API}/${question._id}`, question);
    return response.data;
  };  
export const deleteQuestion = async (questionId: any) => {
  const response = await axios
    .delete(`${QUESTIONS_API}/${questionId}`);
  return response.data;
};
export const createQuestion = async (quizId : string, question: any) => {
    const response = await axios.post(
      `${QUIZZES_API}/${quizId}/questions`,
      question
    );
    return response.data;
  };  
export const findQuestionsForQuiz = async (quizId? : string) => {
  const response = await axios
    .get(`${QUIZZES_API}/${quizId}/questions`);
  return response.data;
};
export const findQuestionById = async (id: string) => {
    const response = await axios.get(`${QUESTIONS_API}/${id}`);
    return response.data;
};
export const findQuestionByType = async (type: string) => {
    const response = await axios.get(`${QUESTIONS_API}?type=${type}`);
    return response.data;
};


