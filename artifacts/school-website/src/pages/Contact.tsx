import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We will get back to you shortly.",
        variant: "default",
        className: "bg-primary text-primary-foreground border-none",
      });
      form.reset();
    }, 500);
  }

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-secondary text-secondary-foreground mb-4">Get In Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you have a question about admissions, curriculum, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">Our Address</h3>
                    <p className="text-sm text-muted-foreground">Jigjigayr, Hargeisa<br/>Somalia</p>
                  </CardContent>
                </Card>
                
                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">Call Us</h3>
                    <p className="text-sm text-muted-foreground">+252 634 225 577</p>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">Email Us</h3>
                    <p className="text-sm text-muted-foreground">sunshine@sunshineschools.net</p>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">Monday - Friday<br/>8:00 AM - 4:00 PM</p>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-[300px] bg-muted rounded-xl border border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Springfield&zoom=14&size=800x400&sensor=false')] bg-cover bg-center opacity-40 grayscale"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <MapPin className="h-10 w-10 text-primary mb-2" />
                  <span className="font-bold text-foreground bg-white/80 px-4 py-2 rounded-lg shadow-sm backdrop-blur-sm">View on Google Maps</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} data-testid="input-name" />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Admissions Inquiry" {...field} data-testid="input-subject" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[150px] resize-y" 
                            {...field} 
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full text-lg h-12" data-testid="button-submit-contact">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
