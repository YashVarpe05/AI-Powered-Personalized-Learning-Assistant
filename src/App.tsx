import React, { useState } from 'react';
import { BookOpen, Brain, BarChart3, ChevronRight } from 'lucide-react';
import QuizSection from './components/QuizSection';
import LearningStyleForm from './components/LearningStyleForm';
import ProgressDashboard from './components/ProgressDashboard';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [learningStyle, setLearningStyle] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">LearnSmart AI</span>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-gray-900">About</button>
              <button className="text-gray-600 hover:text-gray-900">Help</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Your Learning Journey</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="font-medium">Step {currentStep}</span>
            <ChevronRight className="h-4 w-4" />
            <span>of 3</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`p-6 rounded-xl shadow-sm transition-all duration-300 ${currentStep === 1 ? 'bg-white ring-2 ring-indigo-500' : 'bg-gray-50'}`}>
            <BookOpen className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Learning Style</h2>
            <p className="text-gray-600">Discover your optimal learning approach</p>
          </div>
          <div className={`p-6 rounded-xl shadow-sm transition-all duration-300 ${currentStep === 2 ? 'bg-white ring-2 ring-indigo-500' : 'bg-gray-50'}`}>
            <Brain className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Knowledge Check</h2>
            <p className="text-gray-600">Test your current understanding</p>
          </div>
          <div className={`p-6 rounded-xl shadow-sm transition-all duration-300 ${currentStep === 3 ? 'bg-white ring-2 ring-indigo-500' : 'bg-gray-50'}`}>
            <BarChart3 className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Progress Tracking</h2>
            <p className="text-gray-600">Monitor your learning journey</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {currentStep === 1 && (
            <LearningStyleForm 
              onComplete={(style) => {
                setLearningStyle(style);
                setCurrentStep(2);
              }}
            />
          )}
          {currentStep === 2 && (
            <QuizSection 
              learningStyle={learningStyle}
              onComplete={() => setCurrentStep(3)}
            />
          )}
          {currentStep === 3 && (
            <ProgressDashboard 
              learningStyle={learningStyle}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;