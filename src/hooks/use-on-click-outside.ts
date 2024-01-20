// custom hook
import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  // allows passing in of a ref and handler
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      // element passed via "ref"
      const el = ref?.current;
      // Check if the element or event target is not available.
      // If either is present, it means the click event is within the specified element.
      if (!el || el.contains((event?.target as Node) || null)) {
        // If the click is within the element, return early and do nothing.
        return;
      }

      // If the click is outside of the specified element, call the provided handler function.
      handler(event);
      console.log(handler, event)
    };

    // Desktop
    document.addEventListener("mousedown", listener);
    // Mobile
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};
