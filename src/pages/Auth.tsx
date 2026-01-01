import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false)

  return (
    <article
      className="
        h-screen
        flex items-center justify-center
        relative
        bg-[linear-gradient(to_right,#0003_1px,transparent_1px),linear-gradient(to_bottom,#0003_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            {isSignup ? "Create an account" : "Login to your account"}
          </CardTitle>
          <CardDescription>
            {isSignup
              ? "Enter your details below to create your account"
              : "Enter your email below to login to your account"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>

              {isSignup && (
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    required
                  />
                </div>
              )}
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            {isSignup ? "Sign up" : "Login"}
          </Button>

          <div className="mt-4 text-center text-sm">
            {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignup((v) => !v)}
              className="underline underline-offset-4"
            >
              {isSignup ? "Login" : "Sign up"}
            </button>
          </div>
        </CardFooter>
      </Card>
    </article>
  )
}
