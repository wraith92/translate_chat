
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { NextAuthOptions } from "next-auth";
import  GoogleProvider  from "next-auth/providers/google";
import { adminDb } from "./firebase-admin";
export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        

        }),
    ],
    callbacks:{
        jwt: async (token, user) => {
            if (user) {
                token.sub = user.id;
            }
            return token;
        },
        session: async (session, token) => {
            if(session?.user){
              if(token?.sub){
                session.user.id = token.sub;
              }
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    adapter: FirestoreAdapter(adminDb),
    };