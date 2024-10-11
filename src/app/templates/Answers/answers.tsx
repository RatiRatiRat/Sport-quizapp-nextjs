import Image from "next/image";
import Correct from "../../../public/Vector (2).svg";
import Incorrect from "../../../public/Vector (3).svg";

interface AnswersProps {
  shuffledOptions: string[];
  selectedAnswer: string | null;
  setSelectedAnswer: (answer: string) => void;
  submitted: boolean;
  currentQuestionIndex: number;
  questions: { answer: string }[];
  submitAnswer: () => void;
  nextQuestion: () => void;
}

const Answers: React.FC<AnswersProps> = ({
  shuffledOptions,
  selectedAnswer,
  setSelectedAnswer,
  submitted,
  currentQuestionIndex,
  questions,
  submitAnswer,
  nextQuestion,
}) => {
  return (
    <div className="flex flex-col gap-4 mt-8 lg:mt-0 lg:ml-0 lg:w-1/2">
      <div className="flex flex-col gap-4 w-[327px] h-[310px] ml-5 sm:w-[640px] sm:ml-[60px] sm:h-[310px] lg:h-auto lg:ml-0 lg:mt-8 lg:w-[540px]">
        {shuffledOptions.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrectAnswer =
            questions[currentQuestionIndex]?.answer === option;

          const borderColor = submitted
            ? isCorrectAnswer
              ? "border-green-500"
              : isSelected
              ? "border-red-500"
              : "border-transparent"
            : isSelected
            ? "border-purple-500"
            : "border-purple";

          return (
            <button
              key={index}
              onClick={() => setSelectedAnswer(option)}
              className={`p-4 rounded-md flex items-center font-medium border-2 ${borderColor} transition-colors`}
              disabled={submitted}
            >
              <span className="mr-4">{String.fromCharCode(65 + index)}.</span>
              {option}
              {submitted && isSelected && (
                <Image
                  src={isCorrectAnswer ? Correct : Incorrect}
                  alt={isCorrectAnswer ? "Correct" : "Incorrect"}
                  width={24}
                  height={24}
                  className="ml-auto"
                />
              )}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col items-center mt-4 gap-2">
        <button
          onClick={submitAnswer}
          className="w-[327px] py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors sm:w-[640px] lg:w-[540px] lg:ml-[30px]"
          disabled={!selectedAnswer}
        >
          Submit Answer
        </button>
        {selectedAnswer && submitted && (
          <button
            onClick={nextQuestion}
            className="w-[327px] py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors sm:w-[640px] lg:w-[540px] lg:ml-[30px]"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Answers;
