/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'gray-dark': '#1F2932',
      'gray-light': '#E4E4E7',
      gray: '#253340',
      'gray-mirage': '#2E3440',
      'gray-mirage-light': '#3B4252',
      'gray-mirage-lighter': '#434C5E',
      yellow: '#FFAA33',
      'yellow-mirage': '#FFAD66',
      white: '#ffffff',
      green: '#6CBF43',
      red: '#E65050',
      'red-mirage': '#FF6666',
      cyan: '#00FFFF',
      'cyan-mirage': '#66FFFF',
      blue: '#66CCFF',
      'blue-dark': '#1A1A2E',
      'blue-dark-mirage': '#1A1A2E',

      // Leanguaje
      'js-color': '#F7DF1E',
      'ts-color': '#007ACC',
      'python-color': '#306998',
      'rust-color': '#FF5800',
      'lua-color': '#0000FF',
      'vue-color': '#42b883',
      'shell-color': '#89e051',
      'java-color': '#FF0000',
      'docker-color': '#2496ED',
      'sql-color': '#F29111',
      'react-color': '#61DAFB',
      'c-color': '#A8B9CC',
      'cpp-color': '#00599C',
      
      // Frameworks
      'spring-color': '#6DB33F',

      // Social 
      'github-color': '#181717',
      'twitter-color': '#1DA1F2',
      'linkedin-color': '#0077B5',
      'instagram-color': '#E1306C',
      'youtube-color': '#FF0000',
      'twitch-color': '#9146FF',
      'discord-color': '#7289DA',
      'reddit-color': '#FF4500',
      'arc-color': '#2962FF',
      'aws-color': '#FF9900',
      'gitlab-color': '#FCA121',
      
      // System
      'arch-color': '#1793D1',
      'linux-color': '#FCC624',
      'windows-color': '#0078D6',
      
      // Tools
      'vscode-color': '#007ACC',
      'vim-color': '#019733',
      'git-color': '#F05032',
      'node-color': '#339933',
      'orange-color': '#FFA500',
      'raspberry-color': '#C51A4A',
      'yarn-color': '#2C8EBB',
      'npm-color': '#CB3837',
      
      // Database
      'mysql-color': '#4479A1',
      'mongo-color': '#47A248',
      'postgres-color': '#336791',
      'redis-color': '#DC382D',
      
      'tailwind-color': '#38B2AC',
    },
    fontFamily: {
      fira: ['Fira Code', 'monospace'],
    },
  },
  plugins: [],
};
