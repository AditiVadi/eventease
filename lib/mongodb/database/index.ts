import mongoose from 'mongoose';

const MONGOOB_URI = process.env.MONGOOB_URI;

let cached = (global as any).mongoose || {conn: null,promise: null}

export const connectToDatabase = async ()=>{
    if(cached.conn) return cached.conn;

    if(!MONGOOB_URI) throw new Error('MONGOOB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGOOB_URI,{
        dbName:'EventEase',
        bufferCommands:false,
})
   
    cached.conn = await cached.promise;

    return cached.conn;
}