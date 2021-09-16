import React, { useState } from "react";
import ButtonOutline from "./ButtonOutline";
import ButtonPrimary from "./ButtonPrimary";
import VideoCard from "./VideoCard";
import ThumbNail from "./images/yoga_1.png";
import DP from "./images/dp.png";
import IG from "./images/ig.svg";
import FB from "./images/fb.svg";
import Spotify from "./images/spotify.svg";
import Linkedin from "./images/linkedin.svg";
import Twitter from "./images/twitter.svg";
import YT from "./images/yt.svg";
import Speak from "./images/speak.svg";
import Location from "./images/location.svg";

import ArrowRightButton from "./images/arrow_right.svg";

const ProfileCard = () => {
  return (
    <div className="md:border border-white rounded-md bg-primary p-4 md:w-7/12 w-screen shadow-2xl absolute left-1/2 top-60 transform -translate-x-1/2 z-40">
      <div className="bg-white rounded-md md:p-14 p-7">
        <div className="md:flex grid justify-between md:mb-7  mb-4 gap-4 md:gap-0">
          <div className="flex gap-4 ">
            <div className="border-2 border-primary rounded-md p-3">
              <img className="object-cover w-20" src={DP.src} />
            </div>
            <div className="flex gap-1 flex-wrap w-40 h-0 text-sm text-gray-600">
              <div className="px-3 py-1 border-primary border rounded-2xl">
                Yoga
              </div>
              <div className="px-3 py-1 border-primary border  rounded-2xl">
                Wellness
              </div>
              <div className="px-3 py-1 border-primary border  rounded-2xl">
                Fitness
              </div>
            </div>
          </div>
          <div className="md:grid flex md:gap-4 gap-2 md:h-0">
            <ButtonPrimary
              title="Book Trial"
              padding="py-1 px-2.5"
              size="text-sm"
            />

            <ButtonOutline
              title="Contact me"
              padding="py-1 px-2.5"
              size="text-sm"
            />
          </div>
        </div>
        <div>
          <h1 className="text-textDark mb-1 text-xl">Jane Doe</h1>
          <p className="text-darkerGray text-sm mb-4 leading-relaxed">
            Hi, I am Jane Doe, your next door fitness instructor with just one
            goal - Make people fit and healthy.Loren ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum
          </p>
          <div className="flex gap-8 mb-4 items-center">
            <a href="">
              <img src={IG.src} />
            </a>
            <a href="">
              <img src={FB.src} />
            </a>
            <a href="">
              <img src={YT.src} />
            </a>
            <a href="">
              <img src={Twitter.src} />
            </a>
            <a href="">
              <img src={Linkedin.src} />
            </a>
            <a href="">
              <img src={Spotify.src} />
            </a>
          </div>
          <hr className="mb-4" />
          <div className="flex mb-2 items-center gap-3">
            <div className="text-textDark flex gap-2 font-semibold">
              <img src={Location.src} />
              <span>Lives in</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-1">New Delhi</div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="text-textDark flex gap-2 font-semibold">
              <img src={Speak.src} />
              <span>Speaks</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-1">English</div>
            <div className="bg-gray-100 rounded-lg p-1">Hindi</div>
            <div className="bg-gray-100 rounded-lg p-1">Punjabi</div>
          </div>
          <div className="md:flex grid justify-between mt-10">
            <div>
              <h3 className="text-textDark mb-4 font-semibold text-2xl   md:w-auto">
                Check out my video about 30 min yoga for beginners
              </h3>
              <a
                href=""
                className="text-primary font-semibold text-xl flex items-center md:mt-7 mb-4 md:mb-0"
              >
                Contact me
                <span>
                  <img src={ArrowRightButton.src} />
                </span>
              </a>
            </div>
            <VideoCard
              width=" md:w-full"
              height="h-auto md:h-full"
              scale="75 md:50"
              img={ThumbNail.src}
            />
          </div>
          <div className="border border-gray-300 p-4 rounded-xl mt-7">
            <h4 className="mb-2 font-normal text-gray-800">
              Subscribe to my profile and never miss another update from me.
            </h4>
            <form className="md:flex grid gap-3">
              <input
                type="email"
                className="border outline-none border-gray-300 px-3.5 py-1.5 rounded-md w-full"
                placeholder="Enter your Email"
              />
              <ButtonPrimary title="Subscribe" padding="px-4 py-2 md:py-0" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
