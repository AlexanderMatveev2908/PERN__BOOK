import { FC, useCallback, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import "./Toast.css";
import { closeToast, getToast, reopenToast } from "./toastSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Toast.css";
import { EventApp } from "@/types/types";

/* IMPORTANT => {
THE FLOW TO MAKE IN A WAY THE ALL WORK IN RIGHT DIRECTION FOR SMOOTH UI AND SYNC IS 
USER MAKE SOMETHING
UPDATE REDUX STATE WITH PAYLOAD AND PREV BOOLEAN IS CURRENT BOOLEAN
IF PREV IS FALSE I JUST ANIMATE TOAST REMOVING FIRST PREV CLASSES AND ADDING NEW ONE  AND AFTER 3S I CALL CLOSE TOAST IN TIMEOUT , IS ESSENTIAL TO USE A REF FOR CLICK OR I U REFRESH PAGE WILL SEE A TOAST HANGING AROUND FOR NO REASON
IF PREV IS TRUE  I REMOVE TOAST IN , NOT CLASS OF TIMER IN DIV THAT KEEP COUNT OF CURR TIMING OF TOAST CAUSE I PREFER LEAVE IT, I USE REQ ANIMATION BROWSER TO ADD IMMEDIATELY CLOSE__TOAST CLASS, IT TAKE 300MS , I WANT THEN I CALL REOPEN IN REDUX THE TRIGGERS AGAIN RERENDER CAUSE IT SET TOAST TRUE BUT ALSO PREV FALSE,
SO  IT LL RERUN AGAIN ANIMATE SIMPLE EXPLAINED ABOVE,
IF TOAST IS FALSE I RESET CLICK REF CAUSE HAVE BEEN SET TRUE BY TIMER OR CLICK TO BE ALLOWED TO RUN, REMOVE TOAST IN AND ASK BROWSER TO ADD TOAST_OUT REDUX WILL SET CURR AND PREV TOAST FALSE CAUSE IT HAD ALL THE TIME TO RUN AND HANG AROUND BOUNCING IN WINDOW OF USER
IS IMPORTANT TO BALANCE BETWEEN RERENDER IN STATE IN REFS THAT ARE REALLY USEFUL NINJA THAT DO THEIR JOB WITHOUT TRIGGERING RERENDER
}

*/

const Toast: FC = () => {
  const toastRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const clickRef = useRef<boolean>(false);

  const toastState = useSelector(getToast);
  const { toast, isToast, isToastPrev } = toastState;
  const dispatch = useDispatch();

  const animateIn = useCallback(() => {
    (toastRef.current as HTMLDivElement).classList.remove("toast__out");
    (counterRef.current as HTMLDivElement).classList.remove("el__timer_toast");

    requestAnimationFrame(() => {
      toastRef?.current?.classList.add("toast__in");
      counterRef?.current?.classList.add("el__timer_toast");
    });

    timerRef.current = setTimeout(() => {
      clearTimeout(timerRef.current as NodeJS.Timeout);
      timerRef.current = null;
      clickRef.current = true;
      dispatch(closeToast());
    }, 3000);
  }, [dispatch]);

  const animateOut = useCallback(() => {
    clickRef.current = false;
    toastRef?.current?.classList.remove("toast__in");
    (counterRef.current as HTMLDivElement).classList.remove("el__timer_toast");
    clearTimeout(timerRef.current as NodeJS.Timeout);
    timerRef.current = null;

    requestAnimationFrame(() => {
      toastRef?.current?.classList.add("toast__out");
    });
  }, []);

  const animatePrev = useCallback(() => {
    toastRef?.current?.classList.remove("toast__in");
    requestAnimationFrame(() => {
      toastRef?.current?.classList.add("toast__out");
    });
    clearTimeout(timerRef.current as NodeJS.Timeout);
    timerRef.current = null;

    setTimeout(() => {
      dispatch(reopenToast());
    }, 300);
  }, [dispatch]);

  useEffect(() => {
    const animate = () => {
      if (!toastRef || !counterRef) return;

      if (isToast && isToastPrev) animatePrev();
      else if (isToast && !isToastPrev) animateIn();
      else if (!isToast && clickRef.current) animateOut();
    };
    animate();
  }, [isToast, animateIn, animateOut, animatePrev, isToastPrev]);

  useEffect(() => {}, []);

  const handleCLick = () => {
    clickRef.current = true;
    dispatch(closeToast());
  };

  return (
    <div
      ref={toastRef}
      className={`z__toast fixed top-5 right-5 border-[3px] bg-[#000] rounded-xl w-fit min-w-[300px] sm:min-w-[450px] max-w-[80vw] sm:max-w-[500px] md:max-w-[600px] el__toast_container overflow-hidden ${
        toast?.type === EventApp.OK ? "border-green-600" : "border-red-600"
      }`}
      style={{
        transform: "translateX(150%)",
        opacity: 0,
      }}
    >
      <div className="w-full grid justify-items-start relative pb-2">
        {/* TYPE EVENT */}
        <div
          className={`w-full flex justify-start pt-[4px] px-8 ${
            toast?.type === EventApp.OK ? "text-green-600" : "text-red-600"
          }`}
        >
          <div className="w-full flex items-center gap-3">
            <span className="txt__5">{toast?.statusCode ?? ""}</span>
            <span className="txt__4">{toast?.type}</span>
          </div>
        </div>

        {/* SIDE LINE */}
        <div
          className={`absolute top-0 bottom-0 left-0 min-w-[10px] min-h-[120%] ${
            toast?.type === EventApp.OK ? "bg-green-600" : "bg-red-600"
          }`}
        ></div>

        {/* CLOSE BTN */}
        <button
          onClick={handleCLick}
          className="appearance-none top-[4px] right-[4px] absolute btn__toast"
        >
          <IoClose className="icon__md text-red-600" />
        </button>

        {/* TEXT */}
        <div className="w-full flex justify-start txt__col py-1 px-8">
          <span className="txt__3">{toast?.msg?.toUpperCase()}</span>
        </div>

        {/* TIMER */}
        <div
          ref={counterRef}
          className={`absolute left-0 bottom-0 h-[3px] ${
            toast?.type === EventApp.OK ? "bg-green-600" : "bg-red-600"
          }`}
          style={{
            width: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Toast;
