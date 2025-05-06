
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Хедер компонент для повторного использования на всех страницах
const Header = () => (
  <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
    <div className="container flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <Icon name="utensils" className="h-6 w-6 text-primary" />
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
            <Icon name="shoppingCart" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">3</span>
          </Link>
        </Button>
        <Button asChild className="hidden md:flex">
          <Link to="/order">Заказать</Link>
        </Button>
      </div>
    </div>
  </header>
);

// Футер компонент для повторного использования на всех страницах
const Footer = () => (
  <footer className="bg-zinc-900 text-zinc-200 py-10">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Icon name="utensils" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-white">ВкусноЕда</span>
          </div>
          <p className="text-zinc-400 mb-4">Вкусная еда с доставкой на дом в течение 60 минут.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="Twitter">
              <Icon name="twitter" />
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
              <Icon name="mapPin" className="h-4 w-4 text-primary" />
              <span className="text-zinc-400">ул. Пушкина, д. 10, Москва</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 text-primary" />
              <span className="text-zinc-400">+7 (999) 123-45-67</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 text-primary" />
              <span className="text-zinc-400">info@vkusnoeda.ru</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-primary" />
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
);

// Данные для меню
const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Сырные палочки",
      description: "Хрустящие палочки из тянущегося сыра моцарелла с соусом на выбор",
      price: 299,
      image: "https://images.unsplash.com/photo-1600891963935-9e2e13096d72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Закуски"],
      tags: ["Вегетарианское"],
      rating: 4.8,
      popularity: 95
    },
    {
      id: 2,
      name: "Начос с гуакамоле",
      description: "Кукурузные чипсы с соусом гуакамоле, сальсой и сметаной",
      price: 349,
      image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Закуски"],
      tags: ["Вегетарианское", "Острое"],
      rating: 4.7,
      popularity: 88
    },
    {
      id: 3,
      name: "Крылышки BBQ",
      description: "Куриные крылышки в пикантном соусе барбекю с соусом блю чиз",
      price: 399,
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Закуски"],
      tags: ["Острое"],
      rating: 4.9,
      popularity: 97
    },
  ],
  mainCourses: [
    {
      id: 4,
      name: "Маргарита",
      description: "Классическая пицца с томатами, моцареллой и базиликом",
      price: 399,
      image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Пицца"],
      tags: ["Вегетарианское"],
      rating: 4.8,
      popularity: 96
    },
    {
      id: 5,
      name: "Бургер Классический",
      description: "Сочная говяжья котлета с сыром, листьями салата и соусом",
      price: 299,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Бургеры"],
      tags: [],
      rating: 4.6,
      popularity: 90
    },
    {
      id: 6,
      name: "Цезарь с курицей",
      description: "Свежий салат с куриным филе, сыром пармезан и соусом цезарь",
      price: 349,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Салаты"],
      tags: [],
      rating: 4.5,
      popularity: 85
    },
    {
      id: 7,
      name: "Суши-сет Токио",
      description: "Набор из 16 роллов с лососем, тунцом, креветкой и авокадо",
      price: 899,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Суши"],
      tags: [],
      rating: 4.9,
      popularity: 92
    },
  ],
  drinks: [
    {
      id: 8,
      name: "Фреш апельсиновый",
      description: "Свежевыжатый сок из спелых апельсинов",
      price: 199,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Напитки"],
      tags: ["Вегетарианское"],
      rating: 4.7,
      popularity: 88
    },
    {
      id: 9,
      name: "Смузи ягодный",
      description: "Микс из свежих ягод с йогуртом и мёдом",
      price: 249,
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Напитки"],
      tags: ["Вегетарианское"],
      rating: 4.6,
      popularity: 84
    },
    {
      id: 10,
      name: "Кофе Латте",
      description: "Эспрессо с молоком и нежной молочной пенкой",
      price: 149,
      image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Напитки"],
      tags: ["Вегетарианское"],
      rating: 4.5,
      popularity: 86
    },
  ],
  desserts: [
    {
      id: 11,
      name: "Чизкейк Нью-Йорк",
      description: "Классический американский чизкейк с сырным кремом и ягодным соусом",
      price: 299,
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Десерты"],
      tags: ["Вегетарианское"],
      rating: 4.9,
      popularity: 96
    },
    {
      id: 12,
      name: "Тирамису",
      description: "Итальянский десерт с маскарпоне, кофе и печеньем савоярди",
      price: 279,
      image: "https://images.unsplash.com/photo-1571877899582-ab4884e8f843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Десерты"],
      tags: ["Вегетарианское"],
      rating: 4.8,
      popularity: 94
    },
    {
      id: 13,
      name: "Шоколадный фондан",
      description: "Теплый шоколадный кекс с жидкой начинкой и шариком мороженого",
      price: 349,
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categories: ["Десерты"],
      tags: ["Вегетарианское"],
      rating: 4.9,
      popularity: 98
    },
  ]
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filters, setFilters] = useState({
    vegetarian: false,
    spicy: false,
    glutenFree: false
  });
  const [sortBy, setSortBy] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");

  // Объединение всех блюд для режима "Все"
  const allDishes = [
    ...menuData.appetizers,
    ...menuData.mainCourses,
    ...menuData.drinks,
    ...menuData.desserts
  ];

  // Получение текущего списка блюд в зависимости от выбранной категории
  const getCurrentDishes = () => {
    let dishes;
    switch(selectedCategory) {
      case "appetizers":
        dishes = menuData.appetizers;
        break;
      case "mainCourses":
        dishes = menuData.mainCourses;
        break;
      case "drinks":
        dishes = menuData.drinks;
        break;
      case "desserts":
        dishes = menuData.desserts;
        break;
      default:
        dishes = allDishes;
    }

    // Фильтрация по тегам
    dishes = dishes.filter(dish => {
      const matchesVegetarian = !filters.vegetarian || dish.tags.includes("Вегетарианское");
      const matchesSpicy = !filters.spicy || dish.tags.includes("Острое");
      const matchesGlutenFree = !filters.glutenFree || dish.tags.includes("Без глютена");
      const matchesPrice = dish.price >= priceRange[0] && dish.price <= priceRange[1];
      const matchesSearch = !searchTerm || 
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        dish.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesVegetarian && matchesSpicy && matchesGlutenFree && matchesPrice && matchesSearch;
    });

    // Сортировка
    if (sortBy === "priceAsc") {
      dishes.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceDesc") {
      dishes.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      dishes.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "popular") {
      dishes.sort((a, b) => b.popularity - a.popularity);
    }

    return dishes;
  };

  const displayedDishes = getCurrentDishes();

  // Форматирование цены
  const formatPrice = (price) => {
    return `${price} ₽`;
  };

  // Обработчик изменения фильтров
  const handleFilterChange = (filterName) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Меню</h1>
            <p className="text-muted-foreground">Выберите блюда из нашего разнообразного меню. Доставка в течение 60 минут.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Боковая панель фильтров */}
            <div className="w-full md:w-64 space-y-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-4">Поиск</h3>
                <div className="space-y-2">
                  <Input 
                    placeholder="Найти блюдо..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-4">Категории</h3>
                <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
                  <TabsList className="grid grid-cols-2 w-full mb-4">
                    <TabsTrigger value="all">Все</TabsTrigger>
                    <TabsTrigger value="appetizers">Закуски</TabsTrigger>
                    <TabsTrigger value="mainCourses">Основные</TabsTrigger>
                    <TabsTrigger value="drinks">Напитки</TabsTrigger>
                    <TabsTrigger value="desserts">Десерты</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-4">Фильтры</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="vegetarian" 
                      checked={filters.vegetarian}
                      onCheckedChange={() => handleFilterChange('vegetarian')}
                    />
                    <Label htmlFor="vegetarian">Вегетарианское</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="spicy" 
                      checked={filters.spicy}
                      onCheckedChange={() => handleFilterChange('spicy')}
                    />
                    <Label htmlFor="spicy">Острое</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="glutenFree" 
                      checked={filters.glutenFree}
                      onCheckedChange={() => handleFilterChange('glutenFree')}
                    />
                    <Label htmlFor="glutenFree">Без глютена</Label>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-4">Цена</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-4">Сортировка</h3>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите сортировку" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="priceAsc">Сначала дешевле</SelectItem>
                    <SelectItem value="priceDesc">Сначала дороже</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full" variant="outline">Сбросить фильтры</Button>
            </div>

            {/* Основной контент с блюдами */}
            <div className="flex-1">
              {displayedDishes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedDishes.map((dish) => (
                    <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative overflow-hidden">
                        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                        {dish.tags.length > 0 && (
                          <div className="absolute top-2 left-2">
                            {dish.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="mr-1 mb-1">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <div className="absolute top-2 right-2">
                          <Badge variant="primary" className="flex items-center gap-1">
                            <Icon name="star" className="h-3 w-3 fill-current" />
                            {dish.rating}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{dish.name}</h3>
                          <span className="font-medium text-primary">{formatPrice(dish.price)}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{dish.description}</p>
                        <Button className="w-full">Добавить в корзину</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-4">
                    <Icon name="searchX" className="mx-auto h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Ничего не найдено</h3>
                  <p className="text-muted-foreground mb-4">Попробуйте изменить параметры поиска или фильтры</p>
                  <Button variant="outline" onClick={() => {
                    setSearchTerm("");
                    setPriceRange([0, 1000]);
                    setFilters({
                      vegetarian: false,
                      spicy: false,
                      glutenFree: false
                    });
                    setSortBy("popular");
                    setSelectedCategory("all");
                  }}>
                    Сбросить все фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
