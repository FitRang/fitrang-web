import { useState } from "react"
import { Loader2 } from "lucide-react"
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
import { signUpAndGetToken } from "@/services/SignUp"

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false)
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleLogin = async () => {
    try {
      setLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("LOGIN", { email, password })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    try {
      setLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 1500))
      const token = await signUpAndGetToken({ email, password })
      console.log("SIGNUP", { token })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    isSignup ? handleSignup() : handleLogin()
  }

  return (
    <article
      className="
        min-h-screen
        flex items-center justify-center
        px-4 sm:px-6
        bg-[linear-gradient(to_right,#0003_1px,transparent_1px),linear-gradient(to_bottom,#0003_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
    >
      <Card className="w-full max-w-sm sm:max-w-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-xl sm:text-2xl">
            {isSignup ? "Create an account" : "Login to your account"}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            {isSignup
              ? "Enter your details below to create your account"
              : "Enter your email below to login to your account"}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-4 sm:px-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              {isSignup && (
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    disabled={loading}
                    required
                  />
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : isSignup ? (
                  "Sign up"
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2 pb-6">
          <p className="text-center text-sm">
            {isSignup
              ? "Already have an account?"
              : "Don’t have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignup((v) => !v)}
              disabled={loading}
              className="underline underline-offset-4 disabled:opacity-50"
            >
              {isSignup ? "Login" : "Sign up"}
            </button>
          </p>
        </CardFooter>
      </Card>
    </article>
  )
}
