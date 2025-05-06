
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/Icon";

const Index = () => {
  // Популярные блюда
  const popularDishes = [
    {
      id: 1,
      name: "Пицца Маргарита",
      description: "Классическая итальянская пицца с томатами, моцареллой и базиликом",
      price: 499,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop",
      category: "Пицца",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Бургер Классический",
      description: "Сочная говяжья котлета с сыром, салатом и нашим фирменным соусом",
      price: 350,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
      category: "Бургеры",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Паста Карбонара",
      description: "Традиционная итальянская паста с беконом и сливочным соусом",
      price: 420,
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
      category: "Паста",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Салат Цезарь",
      description: "Свежий салат с куриным филе, сыром пармезан и гренками",
      price: 320,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop",
      category: "Салаты",
      rating: 4.6,
    },
  ];

  // Отзывы клиентов
  const reviews = [
    {
      id: 1,
      name: "Анна М.",
      text: "Очень быстрая доставка и невероятно вкусная еда! Особенно понравилась пицца Маргарита.",
      rating: 5,
      date: "20.04.2025",
    },
    {
      id: 2,
      name: "Иван К.",
      text: "Заказываю регулярно в течение года. Всегда свежие продукты и пунктуальная доставка.",
      rating: 5,
      date: "15.04.2025",
    },
    {
      id: 3,
      name: "Елена Д.",
      text: "Большие порции и отличное качество! Рекомендую попробовать их фирменные бургеры.",
      rating: 4,
      date: "10.04.2025",
    },
  ];

  const sliders = [
    {
      id: 1,
      title: "Скидка 20% на первый заказ",
      description: "Используйте промокод FIRST20 при оформлении заказа",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      buttonText: "Заказать сейчас",
    },
    {
      id: 2,
      title: "Новое сезонное меню",
      description: "Попробуйте наши новые блюда с сезонными ингредиентами",
      image: "https://images.unsplash.com/photo-1616645258469-ec681c17f3ee?q=80&w=1200&auto=format&fit=crop",
      buttonText: "Смотреть меню",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Хедер */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="UtensilsCrossed" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">ВкусноЕда</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/menu" className="text-gray-700 hover:text-primary transition-colors">Меню</Link>
            <Link to="/order" className="text-gray-700 hover:text-primary transition-colors">Заказ</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">О нас</Link>
            <Link to="/contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</Link>
            <Link to="/faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button asChild variant="default" className="hidden md:inline-flex">
              <Link to="/order">Заказать</Link>
            </Button>
            
            <button className="md:hidden text-gray-500">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Слайдер/баннер */}
        <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {sliders[0].title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {sliders[0].description}
                </p>
                <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                  {sliders[0].buttonText}
                </Button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={sliders[0].image} 
                  alt="Специальное предложение" 
                  className="rounded-lg shadow-xl w-full h-[300px] object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Популярные блюда */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Популярные блюда</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDishes.map((dish) => (
                <Card key={dish.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <Badge className="absolute top-2 right-2">{dish.category}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{dish.name}</h3>
                      <div className="flex items-center">
                        <Icon name="Star" size={16} className="text-yellow-500 mr-1" />
                        <span className="text-sm">{dish.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dish.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">{dish.price} ₽</span>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Icon name="Plus" size={16} className="mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link to="/menu">Смотреть все меню</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Отзывы клиентов */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name={i < review.rating ? "Star" : "StarOff"} 
                          size={18} 
                          className={i < review.rating ? "text-yellow-500" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{review.name}</span>
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name="Truck" size={30} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Быстрая доставка</h3>
                <p className="text-gray-600">Доставляем за 30 минут или заказ бесплатно</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name="Utensils" size={30} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Свежие продукты</h3>
                <p className="text-gray-600">Используем только свежие и качественные ингредиенты</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name="HeartHandshake" size={30} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Забота о клиентах</h3>
                <p className="text-gray-600">Внимательно относимся к пожеланиям и предпочтениям</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="UtensilsCrossed" size={24} />
                <h3 className="text-xl font-bold">ВкусноЕда</h3>
              </div>
              <p className="text-gray-400 mb-4">Доставка вкусной еды в любую точку города</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Меню</h4>
              <ul className="space-y-2">
                <li><Link to="/menu/pizza" className="text-gray-400 hover:text-white transition-colors">Пицца</Link></li>
                <li><Link to="/menu/burgers" className="text-gray-400 hover:text-white transition-colors">Бургеры</Link></li>
                <li><Link to="/menu/pasta" className="text-gray-400 hover:text-white transition-colors">Паста</Link></li>
                <li><Link to="/menu/salads" className="text-gray-400 hover:text-white transition-colors">Салаты</Link></li>
                <li><Link to="/menu/desserts" className="text-gray-400 hover:text-white transition-colors">Десерты</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О нас</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Блог</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <span>info@vkusnoeda.ru</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>г. Москва, ул. Примерная, 123</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span>Ежедневно: 10:00 - 22:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 ВкусноЕда. Все права защищены.</p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Политика конфиденциальности</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Условия обслуживания</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
