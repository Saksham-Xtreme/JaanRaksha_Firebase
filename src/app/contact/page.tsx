import { ContactForm } from './ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-background py-12 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Get In Touch</h1>
          <p className="mt-4 text-muted-foreground">
            Have a question or want to get involved? We'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
