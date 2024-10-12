import { useState, useEffect, useCallback } from "react";
import { quizData } from "../../data/quizdata";

interface UseQuizProps {
  sport: "formula1" | "ucl" | "lemans" | "motogp";
}

export const useQuiz = ({ sport }: UseQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const questions = quizData[sport] || [];

  const shuffleOptions = useCallback(() => {
    if (questions[currentQuestionIndex]?.options) {
      const options = questions[currentQuestionIndex].options;
      const shuffled = [...options].sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);
    }
  }, [questions, currentQuestionIndex]);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      shuffleOptions();
    } else {
      setIsQuizCompleted(true);
    }
  }, [currentQuestionIndex, questions.length, shuffleOptions]);

  const handleAnswer = (selectedAnswer: string) => {
    const correctAnswer = questions[currentQuestionIndex]?.answer;
    setIsCorrect(correctAnswer === selectedAnswer);
    if (correctAnswer === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setIsCorrect(null);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizCompleted(false);
    setIsCorrect(null);
  };

  return {
    currentQuestionIndex,
    score,
    shuffledOptions,
    isCorrect,
    isQuizCompleted,
    questions,
    handleAnswer,
    goToNextQuestion,
    resetQuiz,
  };
};
