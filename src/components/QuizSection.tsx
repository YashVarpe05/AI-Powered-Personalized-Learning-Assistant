import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizSectionProps {
  learningStyle: string;
  onComplete: () => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ learningStyle, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      question: "What's your preferred way to learn new concepts?",
      options: [
        "Watching video tutorials",
        "Reading detailed explanations",
        "Listening to audio lectures",
        "Hands-on practice"
      ]
    },
    {
      question: "How do you best remember information?",
      options: [
        "Through visual aids and diagrams",
        "By writing notes and summaries",
        "By discussing with others",
        "Through practical examples"
      ]
    },
    {
      question: "What type of study material helps you the most?",
      options: [
        "Infographics and charts",
        "Textbooks and articles",
        "Podcasts and discussions",
        "Interactive exercises"
      ]
    }
  ];

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers, true];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (newAnswers.length === questions.length) {
      setTimeout(onComplete, 1000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Knowledge Check</h2>
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-6">
          {questions[currentQuestion].question}
        </h3>
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>{answers.length} answers submitted</span>
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <span>{answers.filter(Boolean).length} correct</span>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;