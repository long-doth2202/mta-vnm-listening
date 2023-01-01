import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Item from 'components/FeatureBox';
import lessonApi from 'apis/lessonAPI';

function Lesson({ topicID }) {
  useTitle('Lesson');
  useScrollTop();

  const [lessonList, setLessonList] = useState([]);

  useEffect(() => {
    const getLesson = async () => {
      try {
        const apiRes = await lessonApi.getLessonList(topicID);
        if (apiRes.status === 200) {
          setLessonList(apiRes.data);
        } else {
          console.log('Not found!');
        }
      } catch (error) {}
    };
  
    getLesson();
  }, []);

  // console.log(topicID);
  console.log(lessonList);

  return (
    <div className="container my-10">
      <Grid container spacing={2}>
      {lessonList.map((box, index) => (
          <Grid item xs={12} key={index}>
            <Item
              imgUrl={box.imgUrl}
              title={box.title}
              to={'/topic_' + box._topicID + '/lesson_' + box._lessonID}
              subTitle={box.subTitle}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Lesson;
