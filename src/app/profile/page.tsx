import { UserProfile } from "@/components/sections/UserProfile";

export default function ProfilePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <UserProfile />
      </div>
    </div>
  );
}
