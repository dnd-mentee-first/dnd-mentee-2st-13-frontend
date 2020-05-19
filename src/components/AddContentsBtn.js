import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// 글쓰기 버튼

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: 600
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen} variant="contained" color="primary" size="large" style={{marginTop: 16}}>
          글쓰기
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <CKEditor
              editor={ClassicEditor}
              data="<p>여기에 데이터 입력</p>"
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
            />
            <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
              <Button type="button" onClick={handleOpen} variant="contained" color="primary" size="large"
                      style={{marginTop: 16, marginRight: 16}}>
                저장
              </Button>
              <Button type="button" onClick={handleClose} variant="contained" color="primary" size="large" style={{marginTop: 16}}>
                취소
              </Button>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
