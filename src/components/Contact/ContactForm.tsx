import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  projectType: z.string({
    required_error: "Please select a project type.",
  }),
  budgetRange: z.string({
    required_error: "Please select your budget range.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      projectType: "",
      budgetRange: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const whatsappNumber = "254770501786";

    const message = `
Hello Leadforge Studio,

My name is ${values.fullName}.

Email: ${values.email}
Project Type: ${values.projectType}
Budget Range: ${values.budgetRange}

Project Details:
${values.message}

I'd like to discuss this project with you.
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <Card className="overflow-hidden rounded-2xl border-forge-navy/10 bg-white shadow-xl">
      <CardHeader className="border-b border-forge-navy/10 bg-forge-cream/30 p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forge-orange text-white">
            <MessageCircle className="h-5 w-5" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-forge-orange">
            Start a conversation
          </span>
        </div>

        <CardTitle className="font-display text-2xl font-bold text-forge-navy sm:text-3xl">
          Let&apos;s talk about your project
        </CardTitle>

        <CardDescription className="mt-2 max-w-lg leading-6 text-forge-gray">
          Tell us what you&apos;re building, and we&apos;ll continue the
          conversation with you directly on WhatsApp.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 sm:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-forge-navy">
                      Full Name
                    </FormLabel>

                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="h-12 rounded-xl border-forge-navy/10 bg-forge-cream/30 transition-colors focus:border-forge-orange focus:ring-forge-orange"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-forge-navy">
                      Email
                    </FormLabel>

                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                        className="h-12 rounded-xl border-forge-navy/10 bg-forge-cream/30 transition-colors focus:border-forge-orange focus:ring-forge-orange"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Project Type & Budget */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-forge-navy">
                      Project Type
                    </FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl border-forge-navy/10 bg-forge-cream/30 focus:ring-forge-orange">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="Business Website">
                          Business Website
                        </SelectItem>

                        <SelectItem value="Website Redesign">
                          Website Redesign
                        </SelectItem>

                        <SelectItem value="Landing Page">
                          Landing Page
                        </SelectItem>

                        <SelectItem value="Custom Web Application">
                          Custom Web Application
                        </SelectItem>

                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budgetRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-forge-navy">
                      Budget Range
                    </FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl border-forge-navy/10 bg-forge-cream/30 focus:ring-forge-orange">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="Under KSh 25,000">
                          Under KSh 25,000
                        </SelectItem>

                        <SelectItem value="KSh 25,000–50,000">
                          KSh 25,000–50,000
                        </SelectItem>

                        <SelectItem value="KSh 50,000–100,000">
                          KSh 50,000–100,000
                        </SelectItem>

                        <SelectItem value="KSh 100,000+">
                          KSh 100,000+
                        </SelectItem>

                        <SelectItem value="Not sure yet">
                          Not sure yet
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-forge-navy">
                    Tell us about your project
                  </FormLabel>

                  <FormControl>
                    <Textarea
                      placeholder="Tell us what you need, what you're trying to achieve, or any ideas you already have..."
                      className="min-h-[140px] resize-none rounded-xl border-forge-navy/10 bg-forge-cream/30 leading-6 transition-colors focus:border-forge-orange focus:ring-forge-orange"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* WhatsApp CTA */}
            <div className="space-y-4 pt-2">
              <Button
                type="submit"
                className="group w-full rounded-2xl bg-[#25D366] py-7 text-lg font-bold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/30 active:scale-[0.98]"
              >
                <MessageCircle className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                Continue on WhatsApp
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-forge-gray">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />

                <span>Usually responds within a few hours</span>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
