import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="animate-fade-in text-center px-6 py-16 max-w-lg">
        <h1 className="text-5xl font-bold tracking-tight text-primary mb-4">
          Hello, World!
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Welcome to your new application. Start building something amazing.
        </p>
        <Button size="lg" className="px-8 text-base">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Index;
