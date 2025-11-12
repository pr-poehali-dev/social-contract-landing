import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent, source: string) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        title: 'Заполните все поля',
        description: 'Пожалуйста, укажите имя и телефон',
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в течение 15 минут',
    });
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Получите <span className="text-primary">350 000 ₽</span> от государства на старт вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Бесплатно. Безвозвратно. По социальному контракту. Мы поможем подготовить бизнес-план и пройти отбор.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={24} />
                <span>Без возврата</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={24} />
                <span>Легально</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={24} />
                <span>Быстро</span>
              </div>
            </div>
          </div>

          <Card className="bg-card border-2 border-primary/20 shadow-2xl animate-scale-in">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold">Получить консультацию</h3>
              <form onSubmit={(e) => handleSubmit(e, 'hero')} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                />
                <Input
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                />
                <Button type="submit" className="w-full h-12 text-lg font-semibold">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-center">
              Мечтаете о своем деле, но не знаете с чего начать?
            </h2>
            <div className="bg-card p-8 rounded-lg border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Государство готово выделить вам 350 000 рублей на открытие бизнеса, но сложный процесс оформления 
                и строгие требования к бизнес-плану останавливают большинство заявителей.
              </p>
              <div className="bg-destructive/10 border border-destructive/30 p-6 rounded-lg">
                <p className="text-xl font-semibold text-center">
                  <span className="text-destructive">9 из 10 заявок</span> получают отказ из-за ошибок в документах
                </p>
              </div>
            </div>
            <div className="text-center pt-4">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Узнайте, как избежать ошибок →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Мы превращаем вашу идею в одобренный бизнес-план
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'FileText',
                title: 'Профессиональный бизнес-план',
                description: 'Разрабатываем финансовую модель и стратегию, которые полностью соответствуют требованиям органов соцзащиты.'
              },
              {
                icon: 'Users',
                title: 'Сопровождение до получения денег',
                description: 'Помогаем собрать документы, заполнить заявление и подготовиться к собеседованию.'
              },
              {
                icon: 'Shield',
                title: 'Легальность и прозрачность',
                description: 'Все наши услуги абсолютно законны. Вы получаете деньги напрямую от государства.'
              }
            ].map((service, index) => (
              <Card key={index} className="bg-card hover:bg-secondary/50 transition-all duration-300 hover:scale-105 border-2 border-border hover:border-primary/50">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Всего 4 шага до вашего стартапа
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { number: '01', title: 'Консультация', description: 'Бесплатно анализируем ваши шансы на получение соцконтракта', icon: 'MessageSquare' },
              { number: '02', title: 'Разработка', description: 'Создаем убедительный бизнес-план "под ключ"', icon: 'PenTool' },
              { number: '03', title: 'Подача', description: 'Помогаем подать заявление с полным пакетом документов', icon: 'Send' },
              { number: '04', title: 'Получение', description: 'Вы получаете финансирование и начинаете свой бизнес', icon: 'Trophy' }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <Icon name={step.icon} className="text-primary" size={24} />
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Наши клиенты уже получили финансирование
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: '🎂',
                title: 'Пекарня "Сладкие радости"',
                amount: '350 000 ₽',
                description: 'Анна из Твери открыла кондитерскую. Бизнес-план был одобрен с первого раза.',
                result: 'Окупаемость за 8 месяцев'
              },
              {
                icon: '💻',
                title: 'Онлайн-школа программирования',
                amount: '350 000 ₽',
                description: 'Сергей из Казани запустил онлайн-школу для детей. Закуплено все необходимое оборудование.',
                result: '120+ учеников за первый год'
              }
            ].map((story, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-secondary border-2 border-primary/30 hover:border-primary transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="text-6xl">{story.icon}</div>
                  <h3 className="text-2xl font-bold">{story.title}</h3>
                  <div className="text-3xl font-bold text-primary">{story.amount}</div>
                  <p className="text-muted-foreground">{story.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">{story.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Почему нам доверяют?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Award', title: 'Опыт', description: 'Более 5 лет специализируемся на гос. финансировании' },
              { icon: 'TrendingUp', title: 'Статистика', description: '95% наших клиентов успешно получают соцконтракт' },
              { icon: 'Briefcase', title: 'Экспертиза', description: 'В команде бывшие сотрудники соцзащиты и финансовые аналитики' }
            ].map((reason, index) => (
              <Card key={index} className="bg-card text-center hover:bg-secondary/50 transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Icon name={reason.icon} className="text-primary" size={40} />
                  </div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ваш бизнес может стать реальностью уже через 30 дней
            </h2>
            <p className="text-xl text-muted-foreground">
              Места на бесплатную консультацию ограничены. Оставьте заявку прямо сейчас, 
              и мы перезвоним вам в течение 15 минут.
            </p>
            <Card className="bg-card border-2 border-primary/30 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={(e) => handleSubmit(e, 'final')} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                  <Input
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                  <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold">
                    Забронировать консультацию!
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Ваши данные конфиденциальны и защищены
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-secondary border-t border-border">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-muted-foreground">
            © 2024 Соцконтракт 350 000. Все права защищены.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
