import { useQuiz } from "@/app/hook/quiz-logic/quizlogic";
import Questions from "../Questions/questions";
import Answers from "../Answers/answers";
import Score from "../Score/score";
import { useState } from "react";

interface QuizProps {
  sport: "formula1" | "ucl" | "lemans" | "motogp";
}

const Quiz: React.FC<QuizProps> = ({ sport }) => {
  const {
    currentQuestionIndex,
    score,
    shuffledOptions,
    isQuizCompleted,
    questions,
    handleAnswer,
    goToNextQuestion,
    resetQuiz,
  } = useQuiz({ sport });

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const submitAnswer = () => {
    if (selectedAnswer) {
      handleAnswer(selectedAnswer);
      setSubmitted(true);
    }
  };

  const nextQuestion = () => {
    goToNextQuestion();
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  return (
    <div className="font-rubik w-full lg:w-[1024px] mx-auto mt-8">
      {!isQuizCompleted ? (
        <div className="lg:flex lg:gap-8">
          <Questions
            currentQuestion={questions[currentQuestionIndex]?.question}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
          />
          <Answers
            shuffledOptions={shuffledOptions}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            submitted={submitted}
            currentQuestionIndex={currentQuestionIndex}
            questions={questions}
            submitAnswer={submitAnswer}
            nextQuestion={nextQuestion}
          />
        </div>
      ) : (
        <Score score={score} totalQuestions={questions.length} resetQuiz={resetQuiz} />
      )}
    </div>
  );
};

export default Quiz;
