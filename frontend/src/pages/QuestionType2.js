import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React, { useState, useEffect, Fragment } from 'react';
import questionApi from 'apis/questionApi';
import Questions from 'components/Questions'; 

function Question({ topicID, lessonID }) {
  useTitle('Question');
  useScrollTop();

  const [state, setState] = useState(0);
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const getQuestion = async () => {
      try {
        const apiRes = await questionApi.getQuestionList(topicID, lessonID);
        if (apiRes.status === 200) {
          setQuestionList(apiRes.data);
          setState(1);
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
      ) : (
        <Questions list={questionList}/>
      )}
    </React.Fragment>
  );
}

export default Question;
