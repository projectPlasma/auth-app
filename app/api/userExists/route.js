import User from '@/models/user';
import { connectMongoDB } from '@/utils/mongodb';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select('_id');
    console.log('user: ', user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(`This is your error: ${error}`);
  }
};
