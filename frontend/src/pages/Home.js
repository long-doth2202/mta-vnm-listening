import Grid from '@material-ui/core/Grid';
import communicateIcon from 'assets/icons/communicate.png';
import dictionaryIcon from 'assets/icons/dictionary.png';
import editIcon from 'assets/icons/edit.png';
import favoriteIcon from 'assets/icons/favorite.png';
import flashcardIcon from 'assets/icons/flashcard.png';
import friendsIcon from 'assets/icons/friends.png';
import gameIcon from 'assets/icons/game.png';
import grammarIcon from 'assets/icons/grammar.png';
import ipaIcon from 'assets/icons/ipa.png';
import toeicIcon from 'assets/icons/toeic.png';
import verbIcon from 'assets/icons/verb.png';
import medalIcon from 'assets/icons/medal.png';
import FeatureBox from 'components/FeatureBox';
import { ROUTES } from 'constant';
import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import topicApi from 'apis/topicApi';
import { TOPICS } from 'constant/topics';
import NotFoundPage from 'pages/NotFound';
const FastGamePage = React.lazy(() => import('pages/PlayGames/FastGame'));

function HomePage() {
  useTitle('mtaVNM - Website dạy nghe Tiếng việt miễn phí');
  useScrollTop();

  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    const getTopic = async () => {
      try {
        const apiRes = await topicApi.getTopicList();
        if (apiRes.status === 200) {
          setTopicList(apiRes.data);
        } else {
          console.log('Not found!');
        }
      } catch (error) {}
    };
  
    getTopic();
  }, []);
  
  console.log(topicList);

  return (
    <div className="container my-10">
      <Grid container spacing={3}>
        {topicList.map((box, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <FeatureBox
              imgUrl={box.imgUrl}
              title={box.title}
              to={box.route}
              subTitle={box.subTitle}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );

  /* return (
    <div className="container my-10">
      <Grid container spacing={3}>
        {FEATURE_LIST.map((box, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <FeatureBox
              imgUrl={box.imgUrl}
              title={box.title}
              to={box.to}
              subTitle={box.subTitle}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  ); */
}

export default HomePage;
