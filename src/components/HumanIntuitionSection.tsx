
import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Brain, Zap, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HumanIntuitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Initialize intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = sectionRef.current?.querySelectorAll('.animate-item');
    animatedElements?.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Contextual Understanding",
      description: "Learns from interactions to build a comprehensive framework of human preferences and behaviors."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Adaptive Learning",
      description: "Continuously refines its approach based on feedback and changing environments."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Natural Collaboration",
      description: "Works alongside humans with an intuitive understanding of unspoken social dynamics."
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Predictive Assistance",
      description: "Anticipates needs before they're expressed, providing proactive support."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="human-intuition" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-item opacity-0">
            <div className="pulse-chip mb-4">
              <span>Human-Like Intuition</span>
            </div>
            <h2 className="section-title mb-6 text-gradient bg-clip-text text-transparent bg-hero-gradient-2">
              Beyond Algorithms to True Understanding
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Atlas goes beyond programmed responses to develop contextual awareness and
              adaptive learning patterns that mirror human intuition. This enables natural
              interactions that feel like working with a human colleague rather than a machine.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex flex-col p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white animate-item opacity-0"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="h-12 w-12 rounded-full bg-pulse-100 text-pulse-500 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block animate-item opacity-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-pulse-500 opacity-10 rounded-3xl blur-xl"></div>
              <Carousel className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-elegant">
                <CarouselContent>
                  {[
                    "/public/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
                    "/public/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png", 
                    "/public/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png"
                  ].map((image, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-0">
                        <CardContent className="p-0 aspect-video">
                          <img 
                            src={image} 
                            alt={`Pulse Robot AI capabilities ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              
              <div className="absolute bottom-4 left-8 right-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-pulse-500 rounded-full animate-pulse-slow"></div>
                  <p className="text-sm font-medium">Atlas AI actively processing human behavior patterns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanIntuitionSection;
