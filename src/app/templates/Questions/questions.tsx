import React from "react";

interface QuestionsProps {
  currentQuestion: string;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const Questions: React.FC<QuestionsProps> = ({
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
}) => {
  return (
    <div className="lg:w-1/2">
      <div className="p-4 rounded-md mt-5 lg:pl-0 w-[327px] h-[100px] sm:w-[640px] sm:h-[100px] lg:ml-0 lg:w-full lg:h-auto">
        <h2 className="text-lg font-medium sm:ml-10 lg:ml-0">
          {currentQuestion || "Loading question..."}
        </h2>
      </div>
      <div className="mt-4 rounded-full bg-gray-300 dark:bg-gray-600 w-[327px] ml-5 h-[10px] sm:w-[640px] sm:ml-[60px] lg:ml-0 lg:w-[400px]">
        <div
          className="h-full bg-blue-500 dark:bg-purple-500 rounded-full transition-all duration-300"
          style={{
            width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Questions;
