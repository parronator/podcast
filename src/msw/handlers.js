import { rest } from 'msw';
import { list, detail } from './mocks';

const delayMilliseconds = 2000;
export const handlers = [
  rest.get('*/list', (req, res, ctx) => {
    return res(
      ctx.delay(delayMilliseconds),
      ctx.json(list)
    );
  }),
  // Handles a GET /user request
  rest.get('*/detail', (req, res, ctx) => {
    return res(
      ctx.delay(delayMilliseconds),
      ctx.json(detail)
    )
  })
];
