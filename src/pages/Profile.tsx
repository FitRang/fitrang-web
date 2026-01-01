import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar } from "lucide-react";

export default function Profile() {
  return (
    <article className="w-full min-h-screen p-4 sm:p-6 md:p-8 lg:p-15 mt-12">
      <section className="max-w-4xl mx-auto">
        <Card className="overflow-hidden">
          <div className="h-32 bg-rose-400"></div>
          <CardContent className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8 pt-0">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-end -mt-12 sm:-mt-16 mb-4 sm:mb-6">
              <Avatar className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 border-4 border-black shadow-xl">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="User avatar" />
                <AvatarFallback className="text-2xl bg-rose-400 text-white">NA</AvatarFallback>
              </Avatar>
              <div className="flex-1 pt-2 sm:pt-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-rose-400">
                  Noaman Ahmed
                </h1>
                <p className="text-base sm:text-lg text-slate-500 mt-1">@noamanahmed</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-rose-400 border-2 border-black">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="outline" className="mb-2 border-2 border-black text-black">Email</Badge>
                      <p className="font-semibold text-slate-900 truncate">noaman@example.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-rose-400 border-2 border-black">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="outline" className="mb-2 border-2 border-black text-black">Joined</Badge>
                      <p className="font-semibold text-slate-900">17 January 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>
    </article>
  );
}
