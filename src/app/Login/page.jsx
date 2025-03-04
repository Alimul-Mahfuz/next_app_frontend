"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>

          {/* Password Input */}
          <div className="space-y-2 mt-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>

          {/* Sign-in Button */}
          <Button className="w-full mt-4">Sign in</Button>

          {/* OR Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">OR</span>
            </div>
          </div>

          {/* Google Sign-in Button */}
          <Button variant="outline" className="w-full flex items-center gap-2">
            <FcGoogle size={20} /> Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
