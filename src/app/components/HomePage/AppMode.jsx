"use client";

import Image from "next/image";
import React from "react";

function AppMode() {
  return (
    <div className="relative ">
      <div className="absolute w-full h-full bg-linear-to-br from-[#8FD4F0]/10 via-[#8FD4F0]/20 to-[#8FD4F0]/1 blur-2xl -z-10"></div>
      <div className="max-w-[1440px] mx-auto w-11/12 py-12 lg:py-20 relative">
        {/* star icon */}
        <div className="absolute top-12 -z-10 -left-[331px] opacity-50 rotate-45">
          <Image
            src={"/images/dots.png"}
            width={400}
            height={400}
            alt="Star icon"
            className="w-44 h-44 lg:w-auto lg:h-[250px]"
          />
        </div>
        <div className="absolute -bottom-6 -right-[351px] -z-10 opacity-50 rotate-45">
          <Image
            src={"/images/dots.png"}
            width={400}
            height={400}
            alt="Star icon"
            className="w-44 h-44 lg:w-auto lg:h-[302px]"
          />
        </div>
        <div className="text-center py-12 space-y-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-lato leading-normal text-dark">
            App Features
          </h1>
        </div>
        <br />
        <br />

        <div className="flex flex-wrap justify-center lg:justify-between gap-16 items-center">
          <div className="flex flex-col gap-12 items-center justify-center max-w-[280px] lg:max-w-[350px] h-auto">
            <Image
              src={"/images/aiChatBot.png"}
              height={1200}
              width={1500}
              alt="Mama Mode Screenshot"
              className="rounded-3xl bg-center bg-cover "
            />
            <p className="text-dark text-center">
              You Can Practice Realtime Conversation Through HelpMeSpeak AI Chat
            </p>
          </div>
          <div className="flex flex-col gap-12 items-center justify-center max-w-[280px] lg:max-w-[350px] h-auto">
            <Image
              src={"/images/InstantDictionary.png"}
              height={1200}
              width={1500}
              alt="Mama Mode Screenshot"
              className="rounded-3xl bg-center bg-cover "
            />
            <p className="text-dark text-center">
              Instant Translator Can Translate Real-Time Voice or Text Perfect
              for Quick Conversations, Travel Or Learning
            </p>
          </div>
          <div className="flex flex-col gap-12 items-center justify-center max-w-[280px] lg:max-w-[350px] h-auto">
            <Image
              src={"/images/phreaseBox.png"}
              height={1200}
              width={1500}
              alt="Mama Mode Screenshot"
              className="rounded-3xl bg-center bg-cover "
            />
            <p className="text-dark text-center">
              Learn & Get Useful Phrase for Categorized Everyday Conversation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppMode;
