import express from 'express';
import { file } from './blob-file';

const router = express.Router({
  mergeParams: true,
});

router.route('/file')
  .post((req, res, next) => {
    file.save('D:/projects/sad-dcm/package.json');
    res.end();
  })
  .get((req, res, next) => {
    res.send(file.get('package.json'));
  });

  exports.router = router;
