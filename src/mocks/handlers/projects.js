import { rest } from 'msw';

const dummyData = [
  {
    directory_id: 1,
    directory_title: "test",
    member_idx: 1230,
    create_data: "2023-12-1",
    type: "public",
    stack: "Java",
  },
  {
    directory_id: 2,
    directory_title: "react-app",
    member_idx: 1230,
    create_data: "2023-12-10",
    type: "private",
    stack: "Python",
  },

];


export const projects = [

  rest.get('http://13.125.30.49:8080/api/container/list', async (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json(dummyData),
    );
  }),

  rest.post('http://13.125.30.49:8080/api/container/list', async (req, res, ctx) => {

    const newData = {
      directory_id: 3,
        directory_title: "create-test",
        member_idx: 1230,
        create_data: "2023-12-20",
        type: "private",
        stack: "Javascript",
    }
    dummyData.push(newData);
    return res(
      ctx.status(201),
      ctx.json(dummyData),
    );
  }),
]


