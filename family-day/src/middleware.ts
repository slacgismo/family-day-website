import { NextRequest, NextResponse } from 'next/server';
import Cors from 'cors';

// Initialize the CORS middleware.
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
});

// Helper method to run middleware.
function runMiddleware(req: NextRequest, res: NextResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export async function middleware(request: NextRequest) {
  await runMiddleware(request, new NextResponse(), cors);
  // Continue to the next middleware/route handler
  return NextResponse.next();
}
