import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  const { ipaddr } = await request.json();
  try {
    const response = await axios.get(`http://${ipaddr}/rpc/Switch.GetStatus?id=0`);
    const ret = {
      amps: response.data.current,
      watts: response.data.apower,
      volts: response.data.voltage
    };
    return NextResponse.json(ret);
  } catch (err) {
    return NextResponse.json({ error: 'An error occurred' });
  }    
}
