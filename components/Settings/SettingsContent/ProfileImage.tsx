"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SVGPencil from "./SVGPencil";
import { Card } from "@/components/ui/card";
import {getSignedURL } from "@/app/settings/actions";
import { Button } from "@/components/ui/button";
import {  useUserStore} from "@/store/store";

import UserAvatar from "@/components/reusable/UserAvatar";
import { useRouter } from "next/navigation";

const ProfileImage = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);

    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }

    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    } else {
      setFileUrl(undefined);
    }
  };
  const { avatar, setAvatar } = useUserStore();
   



  const computeSHA256 = async (file: File) => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  };



  // const { data } = useQuery({
  //   queryKey: ["user", avatar, name],
  //   queryFn: async () => {
  //     const result = await getAvatarImage();
  //     setAvatar(result?.success?.avatar);
  //     setName(result?.success?.name);
  //     return result;
  //   },
    
  // });




  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (file) {
        const checksum = await computeSHA256(file);
        const signedURLResult = await getSignedURL(
          file.type,
          file.size,
          checksum
        );
        if (signedURLResult.failure !== undefined) {
          throw new Error(signedURLResult.failure);
        }

        const { url } = signedURLResult.success;
       
        await fetch(url, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        });

        const correctURL = url.split("?")[0]
       
        
        await setAvatar(correctURL)
       

      // router.push("/settings")
      //  router.refresh();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 w-full flex flex-col items-center"
    >
      <div className="relative">
        <Label>Profile Picture</Label>
        <Avatar className="border h-48 w-48">
          {file && fileUrl ? (
            <>
              <UserAvatar image={fileUrl}/>
            </>
          ) : (
            <>
             <UserAvatar image={avatar } />
            </>
          )}
     
        </Avatar>
        <Popover>
          <PopoverTrigger className="absolute bottom-3 left-0">
            <Card className=" flex px-2 py-1 justify-center items-center gap-1">
              <SVGPencil />
              Edit
            </Card>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-4 max-w-40">
            <Label className="cursor-pointer" htmlFor="profile-image">
              Upload a photo...
            </Label>
            <Input
              type="file"
              id="profile-image"
              className="hidden"
              accept="image/ipeg,image/png,image/webp"
              onChange={handleFileChange}
            />
            <Label className="cursor-pointer">Remove photo</Label>
          </PopoverContent>
        </Popover>
      </div>

     {file && fileUrl ?  <Button>Save</Button> : null}
    </form>
  );
};

export default ProfileImage;
