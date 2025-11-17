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
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Что такое соцконтракт и как его получить?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-lg border-2 border-primary/30 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Info" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Что это такое?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Социальный контракт — это программа государственной поддержки, по которой можно получить 
                      <span className="text-primary font-semibold"> до 350 000 рублей безвозмездно</span> на открытие своего дела. 
                      Деньги не нужно возвращать, если вы выполните условия контракта.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border-2 border-border space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Кто может получить?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span>Граждане РФ с доходом ниже прожиточного минимума</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span>Многодетные семьи</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span>Безработные, состоящие на учете</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span>Выпускники детских домов</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border-2 border-primary/30">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Icon name="ClipboardList" className="text-primary" size={28} />
                  Процесс получения
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'Обратитесь в МФЦ или соцзащиту по месту жительства' },
                    { step: '2', text: 'Подготовьте бизнес-план с финансовым обоснованием' },
                    { step: '3', text: 'Соберите пакет документов (паспорт, СНИЛС, справки о доходах)' },
                    { step: '4', text: 'Пройдите комиссию и защитите свой проект' },
                    { step: '5', text: 'Получите решение в течение 30 дней' },
                    { step: '6', text: 'Откройте ИП и получите деньги на расчетный счет' }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <p className="text-foreground pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border-2 border-primary/30">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  <Icon name="AlertCircle" className="inline-block text-primary mr-2" size={20} />
                  Самая частая причина отказа — неправильный бизнес-план
                </p>
                <Button className="w-full" size="lg">
                  Заказать профессиональный бизнес-план
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-destructive/20 via-background to-destructive/20">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card border-4 border-destructive/50 rounded-lg p-8 md:p-12 space-y-8 shadow-2xl">
            <div className="text-center space-y-4">
              <div className="inline-block bg-destructive/20 px-6 py-2 rounded-full border-2 border-destructive">
                <p className="text-destructive font-bold uppercase tracking-wider flex items-center gap-2 justify-center">
                  <Icon name="AlertTriangle" size={20} />
                  Важная информация
                </p>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">
                Квоты на соцконтракт по районам ограничены!
              </h2>
              <p className="text-xl text-muted-foreground">
                Успейте подать заявку до исчерпания финансирования
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/50 p-6 rounded-lg border-2 border-destructive/30">
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-destructive flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Бюджет расходуется быстро</h3>
                    <p className="text-muted-foreground text-sm">
                      В некоторых регионах квоты заполняются уже к середине года. 
                      Чем раньше подадите заявку — тем выше шансы.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 p-6 rounded-lg border-2 border-destructive/30">
                <div className="flex items-start gap-4">
                  <Icon name="TrendingDown" className="text-destructive flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Конкуренция растет</h3>
                    <p className="text-muted-foreground text-sm">
                      С каждым годом о программе узнают всё больше людей. 
                      Количество заявок увеличивается, а бюджет остается прежним.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-destructive/10 to-primary/10 p-6 rounded-lg border-2 border-primary/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" className="text-primary-foreground" size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Не упустите свой шанс!</p>
                    <p className="text-sm text-muted-foreground">Оставьте заявку сегодня и увеличьте шансы на одобрение</p>
                  </div>
                </div>
                <Button size="lg" className="whitespace-nowrap font-bold shadow-lg">
                  Подать заявку сейчас
                </Button>
              </div>
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

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Ответы на частые вопросы
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Нужно ли возвращать деньги по соцконтракту?',
                answer: 'Нет, это безвозмездная помощь. Деньги не нужно возвращать, если вы выполните условия контракта — откроете ИП, используете средства по назначению и будете вести бизнес минимум 1 год.'
              },
              {
                question: 'Сколько времени занимает получение соцконтракта?',
                answer: 'В среднем от подачи заявки до получения денег проходит 1-2 месяца. Комиссия рассматривает документы до 30 дней, затем еще 10-15 дней на оформление ИП и перечисление средств.'
              },
              {
                question: 'На что можно потратить деньги?',
                answer: 'Средства можно использовать на покупку оборудования, аренду помещения, закупку товара, обучение, регистрацию ИП, рекламу — всё, что связано с открытием и запуском бизнеса. Траты должны быть указаны в бизнес-плане.'
              },
              {
                question: 'Что если мне откажут?',
                answer: 'При работе с нами вероятность отказа минимальна — 95% одобрений. Если всё же получите отказ, мы бесплатно доработаем документы и поможем подать заявку повторно через 6 месяцев.'
              },
              {
                question: 'Обязательно ли иметь готовую бизнес-идею?',
                answer: 'Нет! Мы поможем подобрать подходящую бизнес-идею исходя из ваших навыков, опыта и условий вашего региона. Также разработаем детальный бизнес-план с нуля.'
              },
              {
                question: 'Сколько стоят ваши услуги?',
                answer: 'Первичная консультация — бесплатно. Стоимость разработки бизнес-плана и полного сопровождения рассчитывается индивидуально и составляет 15-25% от суммы гранта. Оплата после получения средств.'
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-card hover:bg-secondary/30 transition-all border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="HelpCircle" className="text-primary" size={20} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Остались вопросы? Получите бесплатную консультацию прямо сейчас
            </p>
            <Button size="lg" className="font-bold">
              Задать свой вопрос
            </Button>
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
              Свяжитесь со мной удобным способом для бесплатной консультации
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
              <a
                href="https://t.me/RifatSaitgalin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-6 px-8 rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                <Icon name="Send" size={24} />
                <span>Telegram</span>
              </a>
              <a
                href="https://wa.me/89656410740"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold py-6 px-8 rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                <Icon name="MessageCircle" size={24} />
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
              <Icon name="Phone" size={20} />
              <a href="tel:+89656410740" className="hover:text-primary transition-colors font-semibold">
                +7 (965) 641-07-40
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 bg-secondary border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Соцконтракт 350 000</h3>
              <p className="text-muted-foreground text-sm">
                Помогаем получить государственную поддержку для открытия бизнеса
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Контакты</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:+89656410740" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 (965) 641-07-40
                </a>
                <a href="https://t.me/RifatSaitgalin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Send" size={16} />
                  Telegram
                </a>
                <a href="https://wa.me/89656410740" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={16} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold">Социальные сети</h4>
              <div className="flex gap-4">
                <a
                  href="https://t.me/RifatSaitgalin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0088cc] hover:bg-[#0077b3] flex items-center justify-center text-white transition-all hover:scale-110"
                  aria-label="Telegram"
                >
                  <Icon name="Send" size={20} />
                </a>
                <a
                  href="https://wa.me/89656410740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1fb855] flex items-center justify-center text-white transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a
                  href="https://www.instagram.com/rif.sr1?igsh=d2lpbzdpM3Y4NmNt&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040] hover:opacity-90 flex items-center justify-center text-white transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center space-y-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Соцконтракт 350 000. Все права защищены.
            </p>
            <div className="flex justify-center gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;