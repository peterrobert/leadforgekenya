import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+254 700 000 000",
      href: "https://wa.me/254700000000",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@leadforgestudio.com",
      href: "mailto:hello@leadforgestudio.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 700 000 000",
      href: "tel:+254700000000",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div className="space-y-6">
      <Card className="border-forge-navy/10 bg-forge-navy text-forge-cream">
        <CardHeader>
          <CardTitle className="font-display text-xl">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <a
                key={index}
                href={detail.href}
                className="flex items-start gap-4 group transition-colors"
                target={detail.href.startsWith("http") ? "_blank" : undefined}
                rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-forge-orange transition-colors group-hover:bg-forge-orange group-hover:text-white">
                  <detail.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-forge-cream/50">
                    {detail.label}
                  </p>
                  <p className="text-sm font-medium group-hover:text-forge-orange transition-colors">
                    {detail.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-forge-cream/60">
              <Clock className="h-4 w-4 text-forge-orange" />
              <span className="text-xs">Office Hours: Mon - Fri, 9am - 5pm EAT</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-forge-navy">Follow us:</span>
        <div className="flex gap-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-forge-navy/10 text-forge-navy transition-colors hover:bg-forge-orange hover:border-forge-orange hover:text-white"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}