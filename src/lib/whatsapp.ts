import { siteConfig } from "@/lib/site-config";

export function buildWhatsAppLink(message: string) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${siteConfig.whatsappNumber}?${params.toString()}`;
}
