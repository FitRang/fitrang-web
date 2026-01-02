import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

export default function CreateProfile() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log({ fullName, username, avatar: avatarPreview });
    alert("Profile created successfully!");
  };

  const getInitials = () => {
    if (!fullName) return "NA";
    const names = fullName.trim().split(" ");
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  return (
    <article className="w-full min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <section className="w-full max-w-2xl">
        <Card className="overflow-hidden border-2 border-black shadow-xl">
          <CardContent className="p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-32 w-32 border-4 border-black shadow-lg">
                  {avatarPreview ? (
                    <AvatarImage src={avatarPreview} alt="Avatar preview" />
                  ) : (
                    <AvatarFallback className="text-3xl bg-rose-400 text-white">
                      {getInitials()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="flex flex-col items-center gap-2">
                  <Label
                    htmlFor="avatar-upload"
                    className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-lg border-2 border-black shadow-md transition-colors"
                  >
                    <Upload className="h-4 w-4" />
                    Upload Avatar
                  </Label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                  <p className="text-xs text-slate-500">PNG, JPG up to 5MB</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullname" className="text-sm font-semibold text-slate-700">
                  Full Name
                </Label>
                <Input
                  id="fullname"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="border-2 border-black focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-semibold text-slate-700">
                  Username
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
                    @
                  </span>
                  <Input
                    id="username"
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                    className="border-2 border-black focus:ring-2 focus:ring-rose-400 pl-8"
                  />
                </div>
                <p className="text-xs text-slate-500">
                  Only lowercase letters, numbers, and underscores
                </p>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!fullName || !username}
                className="w-full"
              >
                Create Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </article>
  );
}
