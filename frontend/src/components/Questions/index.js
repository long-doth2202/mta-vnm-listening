import WrongIcon from '@material-ui/icons/Cancel';
import RightIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';
import ReactAudioPlayer from 'react-audio-player';
import logoGame from 'assets/icons/games/correct-word.png';
import { UX } from 'constant';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import CorrectQuestionResult from 'components/PlayGames/Result';
import useStyle from './style';

function addClassAnswerItem(status, answerIndex, index, word, answer) {
  if (status !== 0) {
    if (word === answer) return 'right';
    if (answerIndex === index) return 'wrong';
  }
  return '';
}

function Questions ({ list }) { //{ question, answer, answerList { word } }
  console.log("question 1");

  const classes = useStyle();
  const isSubscribe = useRef(true);
  const [state, setState] = useState({
    current: 0,
    nRight: 0,
    nWrong: 0,
    status: 0, // status 0 - reading question, 1 - show right result, 2 - show wrong result
    answerList: list[0].answerList,
    answerIndex: -1,
  });
  const [isDone, setIsDone] = useState(false);

  const nQuestions = list.length;
  const { current, nRight, nWrong, status, answerList, answerIndex } = state;
  const { question, answer, audioURL } = list[current];

  console.log(list[current].answerList);

  useEffect(() => {
    return () => (isSubscribe.current = false);
  }, []);

  const onAnswer = (answerChoose, answerIndex) => {
    if (answerChoose === answer) {
      setState({
        ...state,
        nRight: nRight + 1,
        status: 1,
        answerIndex,
      });
    } else {
      setState({
        ...state,
        nWrong: nWrong + 1,
        status: 2,
        answerIndex,
      });
    }

    if (current !== list.length - 1) {
      setTimeout(() => {
        const newAnswerList = list[current + 1].answerList;
  
        isSubscribe.current &&
          setState((preState) => ({
            ...preState,
            status: 0,
            answerIndex: -1,
            current: current + 1,
            answerList: newAnswerList,
          }));
      }, UX.DELAY_ANSWER);
    } else {
      setTimeout(() => {
        isSubscribe.current && setIsDone(true);
      }, UX.DELAY_ANSWER);
    }
  };

  const handleReplay = () => {
    setIsDone(false);
    setState({
      current: 0,
      nRight: 0,
      nWrong: 0,
      status: 0, // status 0 - reading question, 1 - show right result, 2 - show wrong result

      answerList: list[0].answerList,
      answerIndex: -1,
    });
  };

  return (
    <div className="flex-center-col h-100vh container">
      <div className={`${classes.root} container dyno-game-box`}>
        {/* title */}
        <div className="dyno-game-title">
          <img src={logoGame} alt="game photo" />
          <h1>Chọn từ điền vào chỗ trống</h1>
        </div>

        {!isDone ? (
          <>
            {/* summary */}
            <div className={`${classes.summary} flex-center-between`}>
              <div className="flex-center--ver">
                Câu&nbsp;<b>{current + 1}</b>
                &nbsp;/&nbsp;
                <b>{nQuestions}</b>
              </div>

              <div className="flex-center--ver">
                <b>{nRight}</b>&nbsp;Đúng
                <RightIcon className={`${classes.summaryIcon} right`} />
                &nbsp;-&nbsp;
                <b>{nWrong}</b>&nbsp;Sai
                <WrongIcon className={`${classes.summaryIcon} wrong`} />
              </div>
            </div>

            {/* body */}
            <div className="t-center">
              
            <div
              className={`${classes.mainContent} ${
                status !== 0 ? 'disabled' : 'ani-fade'
              }`}>
              {/* question */}
              <div className="flex-center-col">
              <ReactAudioPlayer
                src={audioURL}
                // autoPlay
                controls
              />
              </div>
                <p
                  style={{ visibility: status === 0 ? 'hidden' : 'visible' }}
                  className={`${classes.result} ${
                    status === 1 ? 'right' : 'wrong'
                  }`}>
                  {status === 1 ? 'Chính xác' : 'Sai rồi'}
                </p>
                <span className={`${classes.question} t-center`}>
                {question.split('\n').map(function(item, key) {
                    return (
                      <p key={key}>{item}</p>
                    )
                })}
                </span>
              </div>

              {/* answers */}
              <div className={classes.answers}>
                {answerList.map((answers, index) => (
                  <div
                    onClick={() => onAnswer(answers.word, index)}
                    className={`${
                      classes.answerItem
                    } flex-center-col p-5 ${addClassAnswerItem(
                      status,
                      answerIndex,
                      index,
                      answer,
                      answers.word,
                    )}`}
                    key={index}>
                    <p className="mb-2 t-center">{answers.word}</p>
                    {/* {answer.phonetic && (
                      <span className="phonetic t-center">
                        /{answer.phonetic}/
                      </span>
                    )} */}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <CorrectQuestionResult
            onReplay={handleReplay}
            nRight={nRight}
            nWrong={nWrong}
          />
        )}
      </div>
    </div>
  );
}

export default Questions;
