import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "E-Mail", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Debug hier
                console.log("Login attempt:", credentials);

                if (
                    credentials?.email === "admin@site.de" &&
                    credentials?.password === "admin"
                ) {
                    return { id: "1", name: "Admin", email: "admin@site.de" };
                }

                return null; // Keine Anmeldung
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
