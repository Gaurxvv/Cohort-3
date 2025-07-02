import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <div className="w-[10rem] bg-amber-200">Header</div>
      <body>{children}</body>
      <div className="w-[10rem] bg-amber-200"> Footer</div>
    </html>
  );
}
