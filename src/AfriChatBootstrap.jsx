import { useEffect } from "react";
import { createMyAfriChat } from "my-africhat";
import { afriChatConfig } from "./africhat.config";

export function AfriChatBootstrap() {
  useEffect(() => {
    const widget = createMyAfriChat(afriChatConfig).mount();
    return () => widget.destroy();
  }, []);

  return null;
}