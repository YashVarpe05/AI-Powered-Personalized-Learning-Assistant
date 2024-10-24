import React from 'react';
import { BarChart, BookOpen, Brain, Trophy } from 'lucide-react';

interface ProgressDashboardProps {
  learningStyle: string;
}

const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ learningStyle }) => {
  const learningPath = [
    {
      title: "Introduction to Programming",
      progress: 80,
      modules: 12,
      completed: 10
    },
    {
      title: "Data Structures",
      progress: 45,
      modules: 8,
      completed: 4
    },
    {
      title: "Algorithms",
      progress: 20,
      modules: 10,
      completed: 2
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
          <Brain className="h-8 w-8 mb-4" />
          <h3 className="text-lg font-semibold mb-1">Learning Style</h3>
          <p className="text-indigo-100">
            {learningStyle.charAt(0).toUpperCase() + learningStyle.slice(1)} Learner
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <Trophy className="h-8 w-8 mb-4" />
          <h3 className="text-lg font-semibold mb-1">Achievement Score</h3>
          <p className="text-purple-100">750 points</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <BookOpen className="h-8 w-8 mb-4" />
          <h3 className="text-lg font-semibold mb-1">Completed Modules</h3>
          <p className="text-blue-100">16 of 30</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Learning Progress</h2>
          <button className="text-indigo-600 hover:text-indigo-700 font-medium">
            View All
          </button>
        </div>
        <div className="space-y-6">
          {learningPath.map((course, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{course.title}</h3>
                <span className="text-sm text-gray-600">
                  {course.completed}/{course.modules} modules
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Recommended Next Steps</h2>
          <BarChart className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          <button className="w-full bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-left">Complete Data Structures Module 5</h3>
                <p className="text-sm text-gray-600">Estimated time: 45 minutes</p>
              </div>
              <span className="text-indigo-600">→</span>
            </div>
          </button>
          <button className="w-full bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-left">Practice Algorithm Challenges</h3>
                <p className="text-sm text-gray-600">5 new exercises available</p>
              </div>
              <span className="text-indigo-600">→</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;