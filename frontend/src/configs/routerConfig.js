import { ROUTES } from 'constant';
import HomePage from 'pages/Home';
import { Route } from 'react-router';
import React, { useEffect, useRef, useState } from 'react';
const RegisterPage = React.lazy(() => import('pages/Register'));
const LoginPage = React.lazy(() => import('pages/Login'));
const IPAPage = React.lazy(() => import('pages/IPA'));
const ContributionPage = React.lazy(() => import('pages/Contribution'));
const PlayGamesPage = React.lazy(() => import('pages/PlayGames'));
const FlashcardPage = React.lazy(() => import('pages/Flashcard'));
const DynoDictionaryPage = React.lazy(() => import('pages/DynoDictionary'));
const Lesson = React.lazy(() => import('pages/Lesson'));
const Question = React.lazy(() => import('pages/Question'));
const CommunicationPhrasePage = React.lazy(() =>
  import('pages/CommunicationPhrase'),
);
const CorrectWordPage = React.lazy(() => import('pages/PlayGames/CorrectWord'));
const WordMatchGamePage = React.lazy(() => import('pages/PlayGames/WordMatch'));
const FastGamePage = React.lazy(() => import('pages/PlayGames/FastGame'));
const GrammarPage = React.lazy(() => import('pages/Grammar'));
const FavoriteDictionaryPage = React.lazy(() =>
  import('pages/FavoriteDictionary'),
);
const IrregularVerbPage = React.lazy(() => import('pages/IrregularVerb'));
const ForgotPasswordPage = React.lazy(() => import('pages/ForgotPassword'));
const UserAccountPage = React.lazy(() => import('pages/UserAccount'));
const LeaderBoardPage = React.lazy(() => import('pages/LeaderBoard'));

const routes = [
  {
    path: ROUTES.HOME,
    exact: true,
    isProtect: false,
    component: () => <HomePage />,
  },
];

for (let i = 1; i <= 16; i++) {
  routes.push({
    path: '/topic_' + i.toString(),
    exact: true,
    isProtect: false,
    component: () => <Lesson topicID={i}/>
  });
}

for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 2; j++) {
    routes.push({
      path: '/topic_' + i.toString() + '/lesson_' + j.toString(),
      exact: true,
      isProtect: false,
      component: () => <Question topicID={i} lessonID={j}/>
    });
  }
}

const renderRoutes = (routes, isAuth = false) => {
  return routes.map((route, index) => {
    const { path, exact, component, isProtect } = route;
    return (
      <Route path={path} exact={exact} key={index} component={component} />
    );
  });
};

export default {
  routes,
  renderRoutes,
};
