import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React, { useState, useEffect, Fragment } from 'react';
import questionApi from 'apis/questionApi';
import Questions from 'components/Questions'; 
import QuestionsType2 from 'components/QuestionsType2';

function Question({ topicID, lessonID }) {
  useTitle('Question');
  useScrollTop();

  // console.log(topicID + "/" + lessonID);
  // console.log(typeof lessonID);

  const [state, setState] = useState(0);
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const getQuestion = async () => {
      try {
        const apiRes = await questionApi.getQuestionList(topicID, lessonID);
        if (apiRes.status === 200) {
          setQuestionList(apiRes.data);
          if (lessonID === 2) {
            setState(2);
          }
          if (lessonID === 1) {
            setState(1);
          }
        } else {
          setState(0);
        }
      } catch (error) {
        setState(0);
      }
    };
    getQuestion();
  }, []);

  // console.log('hi');
  // console.log(questionList);

  return (
    <React.Fragment>
      {state === 0 ? (
        <></>
      ) : state === 1 ? (
        <Questions list={questionList}/>
      ) : (
        <QuestionsType2 list={questionList}/>
      )}
    </React.Fragment>
  );
}

export default Question;
