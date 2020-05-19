import client from './client';
import * as qs from 'querystring';

/**
 * 로그인
 */
export const login = ({ user_id, user_password }) => {
  client.post(
    '/api/auth/login',
    qs.stringify({ "user_id": user_id, "user_password": user_password }),
  )
};

/**
 * 회원가입
 */
export const register = ({ user_id, user_email, user_password, area_id, sigungu_id, user_name }) => (
  client.post(
        '/api/auth/register',
        qs.stringify({ "user_id": user_id, "user_email": user_email, "user_password": user_password, "area_id": area_id,
                            "sigungu_id": sigungu_id, 'user_name': user_name}),
  //       {
  //       headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  // }
  )
);

// export const register = ({ email, password }) => {
//     client.post(
//         '/api/user/createUser',
//         qs.stringify({ "user_email": email, "user_password": password }),
//         {
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     })
//       .then(res => {
//           return res
//       })
//       .catch(err => {
//           throw err;
//       });
// };

/**
 * 현재 로그인 상태 확인
 */
export const check = () => {
    client.get('/api/auth/check');
};
