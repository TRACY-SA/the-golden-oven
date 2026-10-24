"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getYear() {
  return new Date().getFullYear();
}

function getServerYear() {
  return 2026;
}

export function CopyrightYear() {
  return useSyncExternalStore(subscribe, getYear, getServerYear);
}
