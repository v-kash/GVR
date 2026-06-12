"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });


    if (error) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    // Store token in cookie so middleware can read it
    document.cookie = `sb-access-token=${data.session.access_token}; path=/; max-age=3600; SameSite=Strict`;
    router.push("/admin/dashboard");
  }

  return (
    <main
      className={`${montserrat.className} min-h-screen bg-[#f5f0e7] flex items-center justify-center px-6`}
    >
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        {/* Logo / Brand */}
        <div className="text-center mb-4 pr-6">
          <div className="flex justify-center ">
            <Image
              src="/GVRLOGO.png"
              alt="GVR Fresh Foods Logo"
              width={160}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Card */}
        <div
          className="bg-white/50 rounded-[12px] p-8"
          style={{ border: "1px solid rgba(110,126,69,0.18)" }}
        >
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                style={{ fontWeight: 600 }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@gvrfreshfoods.com"
                className={`${montserrat.className} w-full px-4 py-3 rounded-[8px] text-[13px] text-[#241A12] bg-[#f5f0e7] outline-none transition-all duration-200 placeholder:text-[#5f5146]/40`}
                style={{
                  border: "1px solid rgba(110,126,69,0.25)",
                  fontWeight: 400,
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6E7E45")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(110,126,69,0.25)")
                }
              />
            </div>

            {/* Password */}
            {/* Password */}
<div className="flex flex-col gap-1.5">
  <label
    className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
    style={{ fontWeight: 600 }}
  >
    Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      placeholder="••••••••"
      className={`${montserrat.className} w-full px-4 py-3 pr-12 rounded-[8px] text-[13px] text-[#241A12] bg-[#f5f0e7] outline-none transition-all duration-200 placeholder:text-[#5f5146]/40`}
      style={{
        border: "1px solid rgba(110,126,69,0.25)",
        fontWeight: 400,
      }}
      onFocus={(e) => (e.target.style.borderColor = "#6E7E45")}
      onBlur={(e) =>
        (e.target.style.borderColor = "rgba(110,126,69,0.25)")
      }
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#5f5146] hover:text-[#6E7E45] transition-colors"
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? (
        <EyeOff size={20} />
      ) : (
        <Eye size={20} />
      )}
    </button>
  </div>
</div>

            {/* Error */}
            {error && (
              <p
                className={`${montserrat.className} text-[12px] text-red-600`}
                style={{ fontWeight: 400 }}
              >
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`${montserrat.className} mt-2 w-full py-3 rounded-[8px] text-[11px] uppercase tracking-[0.2em] text-[#f5f0e7] transition-all duration-200`}
              style={{
                fontWeight: 600,
                background: loading ? "rgba(26,46,20,0.5)" : "#1a2e14",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
