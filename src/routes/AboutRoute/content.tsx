import React from 'react';
import { ResumeLink } from './styled';

export const technologies = [
  {
    key: '1',
    label: 'Technologies',
    children: (
      <ul>
        <li>
          JavaScript, React, Next.js, Typescript, Redux, Redux-saga, Redux-Thunk, Redux-toolkit, AWS-s3, Redux-persist,
          mobx-state-tree, Node.js(basics).
        </li>
        <li>HTML5, CSS3, SASS, Styled-components, Material UI, ant-design, BEM methodology.</li>
        <li>Git, NPM, Figma, Photoshop, Prettier, Eslint.</li>
      </ul>
    ),
  },
  {
    key: '2',
    label: 'Commercial Experience',
    children: (
      <ul>
        <li>
          <h3>Holidayfind.de</h3>
          <p>About:</p>
          <p>Searching, comparing and booking a climate-friendly personalized trip.</p>
          <ul>
            <li> Technologies: SASS; JavaScript, ES6, React JS, Redux, Redux Saga, HTML5, Git, Swagger.</li>
            <li>Responsibilities: developing</li>
          </ul>
        </li>
        <li>
          <h3>Best-tours</h3>
          <p>About:</p>
          <p>Booking service with admin panel and user site. B2B system for booking hotels</p>
          <ul>
            <li>
              Technologies: CSS; JavaScript, Typescript, ES6,Next js, Redux-toolkit, Redux, Redux-persist, React-pdf,
              React-quill, HTML5, i18next, i18, Styled-components, AWS-s3, Cypress, Git, Swagger.
            </li>
            <li>Responsibilities: developing. mentoring. manage the front-end team. code review.</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    key: '3',
    label: 'Pet projects',
    children: (
      <ul>
        <li>
          <h3>Pagination</h3>
          <p>
            technologies: React.js, Next.js, Typescript, antd, Redux, Redux-toolkit, styled-components, react-toastify
          </p>
          <ResumeLink href="https://pagination-test-d1aj.vercel.app/" target="_blank">
            Preview
          </ResumeLink>
          {'  '}
          <ResumeLink href="https://github.com/RomSmile/pagination-test/tree/main" target="_blank">
            Code
          </ResumeLink>
        </li>
        <li>
          <h3>Tic-tac-toe</h3>
          <p>technologies: React.js, Typescript, antd, styled-components</p>
          <ResumeLink href="https://tic-tac-toe-woad-rho.vercel.app/" target="_blank">
            Preview
          </ResumeLink>
          {'  '}
          <ResumeLink href="https://github.com/RomSmile/tic-tac-toe/tree/main" target="_blank">
            Code
          </ResumeLink>
        </li>
      </ul>
    ),
  },
];
