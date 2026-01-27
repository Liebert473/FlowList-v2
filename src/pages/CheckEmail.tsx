import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EmailSvg } from "@/components/common/svg/EmailSvg";

export default function CheckEmail() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg border-border bg-card shadow-xl overflow-hidden text-center">
        <CardHeader className="p-0 pt-10">
          {/* Main Illustration Area */}
          <div className="flex justify-center px-8">
            <div className="w-full max-w-[280px]">
              <EmailSvg />
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 p-8 pt-8">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Check your email
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              We sent a verification link to your inbox. Open the email and
              verify to continue.
            </p>
          </div>

          <a className="pt-4" href="https://mail.google.com/mail">
            <Button size="lg" className="w-full h-12 text-base font-semibold">
              Verify your email
            </Button>
          </a>

          <p className="text-sm text-muted-foreground pt-2">
            Didn't receive the email?{" "}
            <button className="font-semibold text-primary hover:underline underline-offset-4 transition-colors">
              Resend link
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
