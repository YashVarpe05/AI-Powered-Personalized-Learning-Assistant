import React, { useState } from 'react';
import { BookOpen, Music, Eye, Activity } from 'lucide-react';

interface LearningStyleFormProps {
  onComplete: (style: string) => void;
}

const LearningStyleForm: React.FC<LearningStyleFormProps> = ({ onComplete }) => {
  const [selectedStyle, setSelectedStyle] = useState('');

  const learningStyles = [
    {
      id: 'visual',
      icon: Eye,
      title: 'Visual Learner',
      description: 'You learn best through images, diagrams, and spatial understanding',
    },
    {
      id: 'auditory',
      icon: Music,
      title: 'Auditory Learner',
      description: 'You prefer learning through listening and verbal communication',
    },
    {
      id: 'reading',
      icon: BookOpen,
      title: 'Reading/Writing Learner',
      description: 'You excel with written words and text-based input',
    },
    {
      id: 'kinesthetic',
      icon: Activity,
      title: 'Kinesthetic Learner',
      description: 'You learn best through hands-on experience and practice',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">What's your learning style?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {learningStyles.map(({ id, icon: Icon, title, description }) => (
          <button
            key={id}
            onClick={() => setSelectedStyle(id)}
            className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
              selectedStyle === id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200'
            }`}
          >
            <Icon className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </button>
        ))}
      </div>
      <button
        onClick={() => selectedStyle && onComplete(selectedStyle)}
        disabled={!selectedStyle}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
          selectedStyle
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        Continue to Knowledge Check
      </button>
    </div>
  );
};

export default LearningStyleForm;