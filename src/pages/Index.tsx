
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // Популярные блюда
  const popularDishes = [
    {
      id: 1,
      name: "Маргарита",
      description: "Классическая пицца с томатами, моцареллой и базиликом",
      price: 399,
      image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Пицца"],
      tags: ["Вегетарианское"]
    },
    {
      id: 2,
      name: "Бургер Классический",
      description: "Сочная говяжья котлета с сыром, листьями салата и соусом",
      price: 299,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Бургеры"],
      tags: []
    },
    {
      id: 3,
      name: "Цезарь с курицей",
      description: "Свежий салат с куриным филе, сыром пармезан и соусом цезарь",
      price: 349,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Салаты"],
      tags: []
    },
    {
      id: 4,
      name: "Суши-сет Токио",
      description: "Набор из 16 роллов с лососем, тунцом, креветкой и авокадо",
      price: 899,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Суши"],
      tags: []
    }
  ];

  // Отзывы клиентов
  const reviews = [
    {
      id: 1,
      name: "Анна К.",
      rating: 5,
      text: "Очень вкусная еда и быстрая доставка! Рекомендую всем.",
      date: "10.04.2025"
    },
    {
      id: 2,
      name: "Михаил Д.",
      rating: 4,
      text: "Заказывал пиццу и роллы, все привезли горячим. Буду заказывать еще.",
      date: "02.05.2025"
    },
    {
      id: 3,
      name: "Елена В.",
      rating: 5,
      text: "Лучшая доставка еды в городе! Всегда свежие ингредиенты и отличное обслуживание.",
      date: "28.04.2025"
    }
  ];

  // Преимущества компании
  const benefits = [
    {
      icon: "Clock",
      title: "Быстрая доставка",
      description: "Привозим заказ в течение 60 минут или бесплатно"
    },
    {
      icon: "UtensilsCrossed",
      title: "Свежие ингредиенты",
      description: "Используем только свежие и качественные продукты"
    },
    {
      icon: "Wallet",
      title: "Удобная оплата",
      description: "Принимаем наличные и банковские карты"
    }
  ];

  // Слайдер с акциями
  const promotions = [
    {
      id: 1,
      title: "Скидка 20% на первый заказ",
      description: "Используйте промокод FIRST20",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      color: "bg-gradient-to-r from-red-500 to-amber-500"
    },
    {
      id: 2,
      title: "Бесплатная доставка",
      description: "При заказе от 1500 рублей",
      image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      color: "bg-gradient-to-r from-blue-500 to-purple-500"
    },
    {
      id: 3,
      title: "Комбо-набор со скидкой 30%",
      description: "Пицца + напиток + десерт",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Хедер */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Icon name="UtensilsCrossed" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">ВкусноЕда</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-foreground hover:text-primary font-medium">Главная</Link>
            <Link to="/menu" className="text-foreground hover:text-primary font-medium">Меню</Link>
            <Link to="/order" className="text-foreground hover:text-primary font-medium">Заказ</Link>
            <Link to="/about" className="text-foreground hover:text-primary font-medium">О нас</Link>
            <Link to="/contacts" className="text-foreground hover:text-primary font-medium">Контакты</Link>
            <Link to="/faq" className="text-foreground hover:text-primary font-medium">FAQ</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon" className="relative">
              <Link to="/order">
                <Icon name="ShoppingCart" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">3</span>
              </Link>
            </Button>
            <Button asChild className="hidden md:flex">
              <Link to="/order">Заказать</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Баннер с акциями */}
        <section className="py-6 md:py-10">
          <div className="container">
            <Carousel className="w-full">
              <CarouselContent>
                {promotions.map((promo) => (
                  <CarouselItem key={promo.id}>
                    <div className={`${promo.color} rounded-xl overflow-hidden h-56 md:h-80 w-full relative`}>
                      <div className="absolute inset-0 bg-black/30 z-10"></div>
                      <img src={promo.image} alt={promo.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold mb-2">{promo.title}</h2>
                        <p className="text-lg md:text-xl mb-6">{promo.description}</p>
                        <Button size="lg" className="mt-2">Заказать сейчас</Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </section>

        {/* Популярные блюда */}
        <section className="py-10 bg-muted/30">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Популярные блюда</h2>
              <Button variant="outline" asChild>
                <Link to="/menu">Смотреть все</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {popularDishes.map((dish) => (
                <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                    {dish.tags.length > 0 && (
                      <div className="absolute top-2 left-2">
                        {dish.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="mr-1">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{dish.name}</h3>
                      <span className="font-medium text-primary">{dish.price} ₽</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{dish.description}</p>
                    <Button className="w-full">Добавить в корзину</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-10">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Почему выбирают нас</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Отзывы клиентов */}
        <section className="py-10 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Отзывы наших клиентов</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="font-bold text-primary">{review.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">{review.name}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i}
                              name="Star" 
                              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                              fill={i < review.rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="ml-auto text-sm text-muted-foreground">
                        {review.date}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="py-10 bg-primary text-primary-foreground">
          <div className="container text-center py-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Голодны? Закажите прямо сейчас!</h2>
            <p className="mb-6 max-w-lg mx-auto">Доставка в течение 60 минут. Сделайте заказ в несколько кликов.</p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/menu">Перейти в меню</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-zinc-900 text-zinc-200 py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="UtensilsCrossed" className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-white">ВкусноЕда</span>
              </div>
              <p className="text-zinc-400 mb-4">Вкусная еда с доставкой на дом в течение 60 минут.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="Facebook">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="Instagram">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="Twitter">
                  <Icon name="Twitter" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Меню</h3>
              <ul className="space-y-2">
                <li><Link to="/menu" className="text-zinc-400 hover:text-primary transition-colors">Все блюда</Link></li>
                <li><Link to="/menu?category=pizza" className="text-zinc-400 hover:text-primary transition-colors">Пицца</Link></li>
                <li><Link to="/menu?category=sushi" className="text-zinc-400 hover:text-primary transition-colors">Суши</Link></li>
                <li><Link to="/menu?category=burgers" className="text-zinc-400 hover:text-primary transition-colors">Бургеры</Link></li>
                <li><Link to="/menu?category=drinks" className="text-zinc-400 hover:text-primary transition-colors">Напитки</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-zinc-400 hover:text-primary transition-colors">О нас</Link></li>
                <li><Link to="/blog" className="text-zinc-400 hover:text-primary transition-colors">Блог</Link></li>
                <li><Link to="/contacts" className="text-zinc-400 hover:text-primary transition-colors">Контакты</Link></li>
                <li><Link to="/faq" className="text-zinc-400 hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4 text-primary" />
                  <span className="text-zinc-400">ул. Пушкина, д. 10, Москва</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 text-primary" />
                  <span className="text-zinc-400">+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4 text-primary" />
                  <span className="text-zinc-400">info@vkusnoeda.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" className="h-4 w-4 text-primary" />
                  <span className="text-zinc-400">Ежедневно: 10:00 - 22:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-6 bg-zinc-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">© 2025 ВкусноЕда. Все права защищены.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-zinc-400 hover:text-primary text-sm transition-colors">Политика конфиденциальности</Link>
              <Link to="/terms" className="text-zinc-400 hover:text-primary text-sm transition-colors">Условия обслуживания</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
