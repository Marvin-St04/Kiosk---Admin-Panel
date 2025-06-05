import SessionWrapper from '@/components/auth/SessionWrapper';

export const metadata = {
    title: "Admin Panel",
    description: "Kiosk Admin Panel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <SessionWrapper>
                    {children}
                </SessionWrapper>
            </body>
        </html>
    );
}
