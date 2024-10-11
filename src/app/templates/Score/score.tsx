interface ScoreProps {
  score: number;
  totalQuestions: number;
  resetQuiz: () => void;
}

const Score: React.FC<ScoreProps> = ({ score, totalQuestions, resetQuiz }) => {
  return (
    <div className="flex flex-col items-center mt-5">
      <h2 className="text-3xl font-medium">Quiz Completed! You Scored...</h2>
      <div className="flex justify-center items-center mt-4">
        <h1 className="text-5xl font-bold mr-2">{score}</h1>
        <h5 className="text-lg">out of {totalQuestions}!</h5>
      </div>
      <button
        onClick={resetQuiz}
        className="mt-5 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-purple-600 transition-colors"
      >
        Play Again
      </button>
    </div>
  );
};

export default Score;
