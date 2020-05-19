import React, {useEffect, useState,} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {create} from 'apisauce';
import SelectArea from './SelectArea';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';

// 맛집, 관광지 페이지(foodPage, tourPage)의 게시판 컴포넌트

export default function Board({ type, open }) {
  const classes = useStyles();

  const [boardList, setBoardList] = useState([]);
  const [area, setArea] = useState([]);           // 도시
  const [region, setRegion] = useState([]);       // 시군구

  const api = create({baseURL: 'http://54.180.115.91:8000/api/'});

  useEffect(() => {
    fetchBoard();
  }, []);

  const fetchBoard = async () => {
    let res = await api.get('board/list', {authkey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTgsImlhdCI6MTU4MjY0OTAxMywiZXhwIjoxNTgyNjkyMjEzfQ.RAX0La9BiNHBmfQKzUD7Np8LemWn8iJxg1LUUpDNeyE'});
    if(!res){return}
    let board = res.data;
    //let board = res.data.board;
    //setBoardList(board);
    console.log(board);
    setBoardList(board.boards);
    setArea(board.boards[0].area_id);
    setRegion(board.boards[0].sigungu_id);
  };

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div style={{display: 'flex', justifyContent: 'flex-end', marginLeft: 400, marginBottom: 50}}>
              <SelectArea area={area} region={region}/>
            </div>
            {open === false ? (
              type === 'foodBoard' ? (
                <>
                  {console.log('a')}
                  {console.log(boardList[0])}
                  <TableContainer className={classes.root}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>번호</TableCell>
                          <TableCell>제목</TableCell>
                          <TableCell>조회수</TableCell>
                          <TableCell>작성자</TableCell>
                          <TableCell>작성일</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          boardList && boardList.map((item)=>(
                            <TableRow>
                              <TableCell>{item.write_id}</TableCell>
                              <TableCell>{item.board_title}</TableCell>
                              <TableCell>조회수</TableCell>
                              <TableCell>작성자</TableCell>
                              <TableCell>{item.create_date}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              ) : (
                <>
                  <TableContainer className={classes.root}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>번호</TableCell>
                          <TableCell>제목</TableCell>
                          <TableCell>작성자</TableCell>
                          <TableCell>조회수</TableCell>
                          <TableCell>작성일</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          boardList && boardList.map((item)=>(
                            <TableRow>
                              <TableCell>{item.write_id}</TableCell>
                              <TableCell>{item.board_title}</TableCell>
                              <TableCell>작성자</TableCell>
                              <TableCell>조회수</TableCell>
                              <TableCell>{item.create_date}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                /> */}
                </>
              )
            ) : ('')}
            {(open = false)}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '200%',
  },
  card: {
    display: 'flex',
    width: '134%',
    minHeight: '600px',
  },
  container: {
    width: '100%'
  }
}));
