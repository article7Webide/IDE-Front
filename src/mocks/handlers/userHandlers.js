import { rest } from 'msw';
export const userHandlers = [

  rest.post('http://13.125.30.49:8080/auth/login', async (req, res, ctx) => {
    let dummyData = [
      {
        "id": "eunv0000",
        "nickname": "eunv",
        "member_idx": "randomIdx12",
      }
    ];
    return res(
      ctx.status(200),
      ctx.json(dummyData),
    );
  }),
  // GET method인 /get-names를 호출하면 다음과 같이 response가 되도록 mocking 정의
  rest.get('http://13.125.30.49:8080/auth/signup', (req, res, ctx) => {
    const userInfo = [
      {
        "id": "eunv0000",
        "nickname": "eunv",
      }
    ]
    return res(
      ctx.status(200),
      ctx.json(userInfo),
    )
  })
]

