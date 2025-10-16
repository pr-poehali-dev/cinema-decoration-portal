import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Clapperboard",
      title: "Декорации для кино",
      description: "Создание масштабных декораций для кинопроектов любой сложности",
      image: "https://cdn.poehali.dev/projects/e6699741-215c-4783-bc7b-82eb2728613d/files/2b55b069-70b1-4df6-b222-f1242eeebb0b.jpg"
    },
    {
      icon: "ScrollText",
      title: "Монтаж баннеров",
      description: "Профессиональный монтаж рекламных баннеров на любых объектах",
      image: "https://cdn.poehali.dev/projects/e6699741-215c-4783-bc7b-82eb2728613d/files/140cd27b-a65a-4006-a47f-8f8d0a123495.jpg"
    }
  ];

  const projects = [
    {
      title: "Масштабный киносет",
      category: "Декорации для кино",
      year: "2024",
      image: "https://cdn.poehali.dev/projects/e6699741-215c-4783-bc7b-82eb2728613d/files/2b55b069-70b1-4df6-b222-f1242eeebb0b.jpg"
    },
    {
      title: "Рекламная кампания",
      category: "Баннеры",
      year: "2024",
      image: "https://cdn.poehali.dev/projects/e6699741-215c-4783-bc7b-82eb2728613d/files/140cd27b-a65a-4006-a47f-8f8d0a123495.jpg"
    },
    {
      title: "Театральные декорации",
      category: "Декорации",
      year: "2023",
      image: "https://cdn.poehali.dev/projects/e6699741-215c-4783-bc7b-82eb2728613d/files/23495371-3f56-4e88-82bd-5930427116ec.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111]">
      <nav className="fixed top-0 w-full z-50 bg-[#111111]/80 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#D4AF37]">КИНОДЕКОРАЦИИ & БАННЕРЫ</h1>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors">Услуги</a>
            <a href="#portfolio" className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors">Портфолио</a>
            <a href="#contact" className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#111111] to-[#D4AF37]/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/e6699741-215c-4783-bc7b-82eb2728613d/files/23495371-3f56-4e88-82bd-5930427116ec.jpg)` }}
        />
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold text-[#F5F5F5] mb-6 leading-tight">
            СОЗДАЁМ<br />
            <span className="text-[#D4AF37]">КИНЕМАТОГРАФ</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#8B7355] mb-8 max-w-2xl mx-auto">
            Строительство декораций для кино и монтаж баннеров любой сложности
          </p>
          <Button 
            size="lg" 
            className="bg-[#D4AF37] text-[#111111] hover:bg-[#8B7355] text-lg px-8 py-6 border-2 border-[#D4AF37] font-semibold"
          >
            СМОТРЕТЬ ПОРТФОЛИО
          </Button>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-[#111111]">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-16 text-center">УСЛУГИ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-[#1A1A1A] border-[#D4AF37]/30 overflow-hidden group hover:border-[#D4AF37] transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <Icon name={service.icon as any} className="text-[#D4AF37] mb-4" size={48} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[#F5F5F5] mb-4">{service.title}</h3>
                  <p className="text-[#8B7355] text-lg">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 bg-[#0D0D0D]">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-16 text-center">ПОРТФОЛИО</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#D4AF37] text-sm mb-2">{project.category} • {project.year}</span>
                  <h3 className="text-3xl font-bold text-[#F5F5F5]">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-[#111111]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-16 text-center">КОНТАКТЫ</h2>
          <Card className="bg-[#1A1A1A] border-[#D4AF37]/30 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="text-[#D4AF37] mb-2 block font-semibold">ИМЯ</label>
                <Input className="bg-[#0D0D0D] border-[#D4AF37]/30 text-[#F5F5F5] focus:border-[#D4AF37]" placeholder="Ваше имя" />
              </div>
              <div>
                <label className="text-[#D4AF37] mb-2 block font-semibold">EMAIL</label>
                <Input className="bg-[#0D0D0D] border-[#D4AF37]/30 text-[#F5F5F5] focus:border-[#D4AF37]" placeholder="example@mail.com" type="email" />
              </div>
            </div>
            <div className="mb-8">
              <label className="text-[#D4AF37] mb-2 block font-semibold">СООБЩЕНИЕ</label>
              <Textarea className="bg-[#0D0D0D] border-[#D4AF37]/30 text-[#F5F5F5] min-h-32 focus:border-[#D4AF37]" placeholder="Расскажите о вашем проекте..." />
            </div>
            <Button className="w-full bg-[#D4AF37] text-[#111111] hover:bg-[#8B7355] text-lg py-6 border-2 border-[#D4AF37] font-semibold">
              ОТПРАВИТЬ ЗАЯВКУ
            </Button>
          </Card>
        </div>
      </section>

      <footer className="bg-[#0D0D0D] border-t border-[#D4AF37]/20 py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="text-[#8B7355]">© 2024 Кинодекорации & Баннеры. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
