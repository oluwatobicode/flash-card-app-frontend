import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, User, Mail, Zap, Layers, Award } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const ProfileDataSchema = z.object({
  userName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  bio: z.string().optional(),
});

type ProfileSchema = z.infer<typeof ProfileDataSchema>;

const ProfileForm = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const stats = [
    { icon: <Zap size={20} />, label: "Day Streak", value: "12" },
    { icon: <Layers size={20} />, label: "Total Decks", value: "5" },
    { icon: <Award size={20} />, label: "Mastery Avg", value: "84%" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileSchema>({
    resolver: zodResolver(ProfileDataSchema),
    defaultValues: {
      userName: "Coding Ninja",
      email: "ninja@example.com",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    console.log(file);

    if (file) {
      const url = URL.createObjectURL(file);
      console.log(url);
      setPreviewUrl(url);
    }
  };

  const onSubmit = (data: ProfileSchema) => {
    console.log("Form Data:", data);
    console.log("Image URL:", previewUrl);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
      <div className="w-full md:w-[320px] shrink-0 flex flex-col items-center space-y-8">
        <div className="md:hidden text-center">
          <h1 className="text-3xl font-black text-[#2E1401] uppercase tracking-wide">
            Student ID
          </h1>
        </div>

        <div className="relative group">
          <div className="w-48 h-48 rounded-full border-4 border-[#2E1401] shadow-[6px_6px_0_0px_#000] overflow-hidden bg-gray-100 flex items-center justify-center relative">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={80} className="text-gray-300" />
            )}
          </div>

          <label
            htmlFor="image-upload"
            className="absolute bottom-2 right-2 bg-[#F8CB46] border-2 border-[#2E1401] p-3 rounded-full cursor-pointer shadow-[3px_3px_0_0px_#000] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all active:scale-95"
          >
            <Camera size={24} color="#2E1401" />
          </label>

          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        <div className="w-full bg-white border-2 border-[#2E1401] shadow-[4px_4px_0_0px_#000] rounded-xl p-5">
          <h2 className="text-center font-black text-[#2E1401] uppercase mb-4 border-b-2 border-[#2E1401] pb-2">
            Performance
          </h2>
          <div className="grid grid-cols-3 gap-2 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-2"
              >
                <div className="mb-1 text-[#2E1401] bg-[#F8CB46] p-2 rounded-full border border-[#2E1401] shadow-[2px_2px_0_0px_#000]">
                  {stat.icon}
                </div>
                <h3 className="font-black text-xl text-[#2E1401] leading-none">
                  {stat.value}
                </h3>
                <p className="text-[10px] font-bold text-[#6D5B4D] uppercase mt-1 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex-1">
        <div className="mb-8 hidden md:block">
          <h1 className="text-4xl font-black text-[#2E1401] mb-2 uppercase tracking-wide">
            Edit Credentials
          </h1>
          <p className="text-[#6D5B4D] font-medium text-lg">
            Update your student details.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="text-base font-bold text-[#2E1401]">
              Codename (Username)
            </label>
            <div className="relative">
              <input
                {...register("userName")}
                type="text"
                className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-[#2E1401] shadow-[4px_4px_0_0px_#000] focus:shadow-[2px_2px_0_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px] outline-none transition-all bg-white text-lg font-medium"
              />
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={24}
              />
            </div>
            {errors.userName && (
              <p className="text-red-500 text-sm font-bold mt-1">
                {errors.userName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-base font-bold text-[#2E1401]">
              Comm Link (Email)
            </label>
            <div className="relative">
              <input
                {...register("email")}
                type="email"
                className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-[#2E1401] shadow-[4px_4px_0_0px_#000] focus:shadow-[2px_2px_0_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px] outline-none transition-all bg-white text-lg font-medium"
              />
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={24}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm font-bold mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full h-16 bg-[#2E1401] text-white rounded-xl font-black text-xl uppercase tracking-wider shadow-[5px_5px_0_0px_#000] hover:shadow-[2px_2px_0_0px_#888] hover:translate-y-[3px] hover:translate-x-[3px] transition-all active:scale-[0.99]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
