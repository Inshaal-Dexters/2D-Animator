import { Button } from "@/components/ui/button";
import React from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const CallToActionSection = () => {
  return (
    <>
      <section className="call-to-action-section w-full px-3 md:px-6 lg:px-12 2xl:px-0">
        <div className="inner-container w-full max-w-7xl flex flex-col items-center gap-16 mx-auto py-16">
          <div className="w-full bg-linear-to-b from-primary/60 via-transparent to-transparent rounded-2xl p-8 md:p-12 xl:p-16">
            <div className="max-w-4xl flex flex-col gap-5 mx-auto">
              <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-center">
                Ready to Showcase Your Animation?
              </h2>
              <h3 className="text-base md:text-lg 2xl:text-xl font-semibold text-center">
                Join thousands of animators building their careers on
                <span className="text-primary"> 2D-Animator.com</span>
              </h3>
              <p className="text-base xl:text-lg text-center">
                Whether you're a seasoned professional or just starting out,
                2D-Animator is your platform to share your work, get discovered,
                and connect with a community that gets it.
              </p>
              <div className="btn-area w-full flex flex-col md:flex-row justify-center items-center gap-5 mt-3">
                <Button
                  className={`cursor-pointer w-full md:w-fit py-6 md:py-6 px-0 md:px-10 text-base`}
                >
                  Create Your Free Profile
                </Button>
                <Button
                  variant="outline"
                  className={`cursor-pointer w-full md:w-fit py-6 md:py-6 px-0 md:px-10 text-base`}
                >
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToActionSection;
