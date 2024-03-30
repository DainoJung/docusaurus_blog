import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
  flutter: [
    'intro-flutter',
    {
      type: 'category',
      label: '문법',
      items: [{
        type: 'autogenerated',
        dirName: 'flutter-grammar',
      }],
    },
    {
      type: 'category',
      label: '패키지',
      items: [{
        type: 'autogenerated',
        dirName: 'flutter-package',
      }],
    },
    {
      type: 'category',
      label: '상태관리',
      items: [{
        type: 'autogenerated',
        dirName: 'flutter-state-manegement',
      }],
    },
    {
      type: 'category',
      label: '파이어베이스',
      items: [{
        type: 'autogenerated',
        dirName: 'firebase',
      }],
    },
  ],
  python: [
    'intro-python',
    {
      type: 'category',
      label: '문법',
      items: [{
        type: 'autogenerated',
        dirName: 'python-grammar',
      }],
    },
    {
      type: 'category',
      label: '패키지',
      items: [{
        type: 'autogenerated',
        dirName: 'python-package',
      }],
    },
  ],
  ai: [
    'intro-ai',
    {
      type: 'category',
      label: '머신러닝',
      items: [{
        type: 'autogenerated',
        dirName: 'machine-learning',
      }],
    },
    {
      type: 'category',
      label: '딥러닝',
      items: [{
        type: 'autogenerated',
        dirName: 'deep-learning',
      }],
    },
    {
      type: 'category',
      label: '파이토치',
      items: [{
        type: 'autogenerated',
        dirName: 'pytorch',
      }],
    },
    {
      type: 'category',
      label: '텐서플로',
      items: [{
        type: 'autogenerated',
        dirName: 'tensorflow',
      }],
    },
  ],
  data: [
    'intro-data',
    {
      type: 'category',
      label: 'SQL',
      items: [{
        type: 'autogenerated',
        dirName: 'sql',
      }],
    },
  ],
  etc: [
    {
      type: 'category',
      label: '개발지식',
      items: [{
        type: 'autogenerated',
        dirName: 'etc-knowledge',
      }],
    },
    {
      type: 'category',
      label: 'Node.js',
      items: [{
        type: 'autogenerated',
        dirName: 'node-js',
      }],
    },
  ],
};

export default sidebars;
