import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ### Classname helper: cn() ###
// Resolves tailwind class conflicts by merging with twMerge
// Uses clsx to support object inputs
//
// Syntax example:
//
// cn("DEFAULT_CLASS_NAMES", "OVERRIDE_CLASS_NAMES", { "CONDITIONAL_CLASS_NAMES": CONDITIONAL_EXPRESSION })
//
// Practical example:
// - blue text is the default state
// - we're passing the className prop from a parent component which allows us to use <MyComponent className="text-indigo-500" />
// - we're passing a conditional expression which allows us to use <MyComponent isRed={true} /> or <MyComponent isGreen={true} />
//
// cn("text-blue-500", className, { "text-red-500": isRed, "text-green-500": isGreen })
//
// More details: https://youtu.be/re2JFITR7TI
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
