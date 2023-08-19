import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  const { ipaddr, status } = await request.json();
  const jbody = {
    id: 0,
    method: 'Switch.Set',
    params: {
      id: 0,
      on: status
    }
  };

  try {
    const response = await axios.post(`http://${ipaddr}/rpc`, jbody);
    if (response.data.result.was_on === !status) {
      return NextResponse.json({ status: true });
    } else {
      return NextResponse.json({ status: false, error: "Mismatched state" });
    }
  } catch (err) {
    return NextResponse.json({ error: 'An error occurred' });
  }
}

