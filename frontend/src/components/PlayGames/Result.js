import Button from '@material-ui/core/Button';
import WrongIcon from '@material-ui/icons/Cancel';
import RightIcon from '@material-ui/icons/CheckCircle';
import CoinIcon from '@material-ui/icons/MonetizationOn';
import accountApi from 'apis/accountApi';
import highscoreApi from 'apis/highscoreApi';
import winAudioSrc from 'assets/audios/win.mp3';
import cupIcon from 'assets/icons/others/cup.png';
import { COINS, MAX, ROUTES } from 'constant';
import { HIGHSCORE_NAME } from 'constant/game';
import { onPlayAudio } from 'helper/speaker.helper';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUserCoin } from 'redux/slices/userInfo.slice';
import { cwResultStyle } from './CorrectWord/style';

function CorrectQuestionResult({ nRight, nWrong, onReplay }) {
  const classes = cwResultStyle();
  const history = useHistory();
  const dispatch = useDispatch();

  // play win audio
  useEffect(() => {
    // onPlayAudio(winAudioSrc);
  }, []);

  const onGoBack = () => {
    history.push(ROUTES.HOME);
  };

  return (
    <div className={`${classes.root} flex-center-col`}>
      <img className={classes.img} src={cupIcon} alt="Cup Photo" />

      <div className={`${classes.result} flex-center--ver`}>
        <b>{nRight}</b>&nbsp;Đúng
        <RightIcon className={`${classes.icon} right`} />
        &nbsp;-&nbsp;
        <b>{nWrong}</b>&nbsp;Sai
        <WrongIcon className={`${classes.icon} wrong`} />
      </div>


      <div className="mt-10">
        <Button
          className="_btn _btn-outlined-stand mr-5"
          variant="outlined"
          onClick={onGoBack}>
          Trang chủ
        </Button>
        <Button className="_btn _btn-primary" onClick={onReplay}>
          Ôn  lại
        </Button>
      </div>
    </div>
  );
}

CorrectQuestionResult.propTypes = {
  nRight: PropTypes.number,
  nWrong: PropTypes.number,
  onReplay: PropTypes.func,
};

CorrectQuestionResult.defaultProps = {
  nRight: 0,
  nWrong: 0,
  onReplay: function () {},
};

export default CorrectQuestionResult;
