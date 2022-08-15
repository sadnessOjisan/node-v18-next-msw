import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),
  // Handles a GET /user request
  rest.get('https://hacker-news.firebaseio.com/v0/item/8863.json', (req,res,ctx)=>{
      console.log('fire');
      return res(
          ctx.status(200),
          ctx.json({
              
          })
      )
  }),
]
