
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Хедер и Футер компоненты те же, что и на других страницах
const Header = () => (
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
);

const Footer = () => (
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
);

// Данные для примера
const cartItems = [
  {
    id: 1,
    name: "Маргарита",
    description: "Классическая пицца с томатами, моцареллой и базиликом",
    price: 399,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Бургер Классический",
    description: "Сочная говяжья котлета с сыром, листьями салата и соусом",
    price: 299,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Фреш апельсиновый",
    description: "Свежевыжатый сок из спелых апельсинов",
    price: 199,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

// Главный компонент заказа
const Order = () => {
  const [items, setItems] = useState(cartItems);
  const [orderStep, setOrderStep] = useState("cart"); // cart, delivery, payment, confirmation
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    comment: "",
    deliveryMethod: "standard",
    paymentMethod: "card"
  });

  // Обработчик изменения количества товара
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Обработчик удаления товара
  const handleRemoveItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Обработчик изменения формы
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Обработчик изменения метода доставки или оплаты
  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Расчет общей стоимости
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = formData.deliveryMethod === "express" ? 199 : 99;
  const total = subtotal + deliveryFee;

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderStep === "cart" && items.length > 0) {
      setOrderStep("delivery");
    } else if (orderStep === "delivery") {
      setOrderStep("payment");
    } else if (orderStep === "payment") {
      setOrderStep("confirmation");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">Оформление заказа</h1>

          <div className="hidden md:flex items-center justify-center mb-8">
            <div className={`flex items-center ${orderStep === "cart" ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${orderStep === "cart" ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>1</div>
              <span className="ml-2 font-medium">Корзина</span>
            </div>
            <div className={`w-16 h-1 ${orderStep === "cart" ? "bg-muted" : "bg-primary"} mx-2`}></div>
            
            <div className={`flex items-center ${orderStep === "delivery" ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${orderStep === "delivery" ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>2</div>
              <span className="ml-2 font-medium">Доставка</span>
            </div>
            <div className={`w-16 h-1 ${orderStep === "cart" || orderStep === "delivery" ? "bg-muted" : "bg-primary"} mx-2`}></div>
            
            <div className={`flex items-center ${orderStep === "payment" ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${orderStep === "payment" ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>3</div>
              <span className="ml-2 font-medium">Оплата</span>
            </div>
            <div className={`w-16 h-1 ${orderStep === "cart" || orderStep === "delivery" || orderStep === "payment" ? "bg-muted" : "bg-primary"} mx-2`}></div>
            
            <div className={`flex items-center ${orderStep === "confirmation" ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${orderStep === "confirmation" ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>4</div>
              <span className="ml-2 font-medium">Подтверждение</span>
            </div>
          </div>

          <div className="md:hidden mb-4">
            <Tabs value={orderStep} onValueChange={setOrderStep}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="cart" disabled={orderStep !== "cart"}>1</TabsTrigger>
                <TabsTrigger value="delivery" disabled={orderStep !== "delivery"}>2</TabsTrigger>
                <TabsTrigger value="payment" disabled={orderStep !== "payment"}>3</TabsTrigger>
                <TabsTrigger value="confirmation" disabled={orderStep !== "confirmation"}>4</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Основное содержимое */}
            <div className="flex-1">
              {/* Этап корзины */}
              {orderStep === "cart" && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Ваша корзина</h2>
                  
                  {items.length === 0 ? (
                    <div className="text-center py-12 border rounded-lg">
                      <div className="mb-4">
                        <Icon name="ShoppingCart" className="mx-auto h-12 w-12 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Ваша корзина пуста</h3>
                      <p className="text-muted-foreground mb-4">Добавьте что-нибудь из нашего меню, чтобы сделать заказ</p>
                      <Button asChild>
                        <Link to="/menu">Перейти в меню</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <Card key={item.id} className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="flex flex-col sm:flex-row">
                              <div className="w-full sm:w-32 h-24 sm:h-auto">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 p-4">
                                <div className="flex justify-between">
                                  <h3 className="font-semibold">{item.name}</h3>
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-8 w-8 p-0 text-muted-foreground"
                                    onClick={() => handleRemoveItem(item.id)}
                                  >
                                    <Icon name="X" className="h-4 w-4" />
                                  </Button>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                                  {item.description}
                                </p>
                                <div className="flex items-center justify-between mt-2">
                                  <div className="flex items-center border rounded-md">
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      className="h-8 w-8 p-0"
                                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    >
                                      <Icon name="Minus" className="h-4 w-4" />
                                    </Button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      className="h-8 w-8 p-0"
                                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    >
                                      <Icon name="Plus" className="h-4 w-4" />
                                    </Button>
                                  </div>
                                  <div className="font-medium">
                                    {item.price} ₽ × {item.quantity} = {item.price * item.quantity} ₽
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Этап доставки */}
              {orderStep === "delivery" && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Информация о доставке</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Имя и фамилия *</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="Введите ваше имя" 
                            required 
                            value={formData.name}
                            onChange={handleFormChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            placeholder="+7 (___) ___-__-__" 
                            required 
                            value={formData.phone}
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="email@example.com" 
                          value={formData.email}
                          onChange={handleFormChange}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="address">Адрес доставки *</Label>
                        <Input 
                          id="address" 
                          name="address" 
                          placeholder="Город, улица, дом, квартира" 
                          required 
                          value={formData.address}
                          onChange={handleFormChange}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="comment">Комментарий к заказу</Label>
                        <Textarea 
                          id="comment" 
                          name="comment" 
                          placeholder="Например: код домофона, этаж, как найти подъезд и т.д." 
                          value={formData.comment}
                          onChange={handleFormChange}
                        />
                      </div>
                      
                      <div>
                        <Label className="mb-2 block">Выберите способ доставки</Label>
                        <RadioGroup 
                          value={formData.deliveryMethod}
                          onValueChange={(value) => handleRadioChange("deliveryMethod", value)}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="standard" id="standard" />
                            <Label htmlFor="standard" className="cursor-pointer">
                              <div>Стандартная доставка</div>
                              <div className="text-sm text-muted-foreground">60-90 минут, 99 ₽</div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="express" id="express" />
                            <Label htmlFor="express" className="cursor-pointer">
                              <div>Экспресс-доставка</div>
                              <div className="text-sm text-muted-foreground">30-45 минут, 199 ₽</div>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setOrderStep("cart")}
                      >
                        Назад
                      </Button>
                      <Button type="submit">Продолжить</Button>
                    </div>
                  </form>
                </div>
              )}

              {/* Этап оплаты */}
              {orderStep === "payment" && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Способ оплаты</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <RadioGroup 
                          value={formData.paymentMethod}
                          onValueChange={(value) => handleRadioChange("paymentMethod", value)}
                        >
                          <div className="grid gap-4">
                            <div className="border rounded-lg p-4">
                              <div className="flex items-start space-x-3">
                                <RadioGroupItem value="card" id="card" className="mt-1" />
                                <div className="flex-1">
                                  <Label htmlFor="card" className="cursor-pointer flex justify-between">
                                    <div>
                                      <div>Банковская карта</div>
                                      <div className="text-sm text-muted-foreground">Visa, Mastercard, МИР</div>
                                    </div>
                                    <div className="flex space-x-1">
                                      <Icon name="CreditCard" className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                  </Label>
                                  
                                  {formData.paymentMethod === "card" && (
                                    <div className="mt-4 ml-6 grid gap-4">
                                      <div>
                                        <Label htmlFor="cardNumber">Номер карты</Label>
                                        <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                                      </div>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <Label htmlFor="expiry">Срок действия</Label>
                                          <Input id="expiry" placeholder="ММ/ГГ" />
                                        </div>
                                        <div>
                                          <Label htmlFor="cvv">CVV</Label>
                                          <Input id="cvv" placeholder="000" />
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center space-x-3">
                                <RadioGroupItem value="cash" id="cash" />
                                <Label htmlFor="cash" className="cursor-pointer flex justify-between w-full">
                                  <div>
                                    <div>Наличными курьеру</div>
                                    <div className="text-sm text-muted-foreground">Оплата при получении</div>
                                  </div>
                                  <Icon name="Banknote" className="h-5 w-5 text-muted-foreground" />
                                </Label>
                              </div>
                            </div>
                            
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center space-x-3">
                                <RadioGroupItem value="online" id="online" />
                                <Label htmlFor="online" className="cursor-pointer flex justify-between w-full">
                                  <div>
                                    <div>Онлайн-кошельки</div>
                                    <div className="text-sm text-muted-foreground">ЮMoney, PayPal, СБП</div>
                                  </div>
                                  <Icon name="Wallet" className="h-5 w-5 text-muted-foreground" />
                                </Label>
                              </div>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setOrderStep("delivery")}
                      >
                        Назад
                      </Button>
                      <Button type="submit">
                        {formData.paymentMethod === "card" ? "Оплатить" : "Продолжить"}
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {/* Этап подтверждения */}
              {orderStep === "confirmation" && (
                <div className="text-center py-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon name="Check" className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Спасибо за заказ!</h2>
                  <p className="text-muted-foreground mb-6">
                    Ваш заказ №{Math.floor(Math.random() * 10000)} успешно оформлен и будет доставлен в течение {formData.deliveryMethod === "express" ? "30-45" : "60-90"} минут.
                  </p>
                  
                  <div className="mb-6 max-w-md mx-auto border rounded-lg p-4 bg-muted/30">
                    <div className="text-left">
                      <div className="mb-2">
                        <span className="text-muted-foreground">Имя: </span>
                        <span className="font-medium">{formData.name}</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-muted-foreground">Телефон: </span>
                        <span className="font-medium">{formData.phone}</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-muted-foreground">Адрес: </span>
                        <span className="font-medium">{formData.address}</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-muted-foreground">Способ доставки: </span>
                        <span className="font-medium">
                          {formData.deliveryMethod === "express" ? "Экспресс-доставка" : "Стандартная доставка"}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Способ оплаты: </span>
                        <span className="font-medium">
                          {formData.paymentMethod === "card" 
                            ? "Банковская карта" 
                            : formData.paymentMethod === "cash" 
                            ? "Наличными курьеру" 
                            : "Онлайн-кошельки"}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="outline">
                      <Link to="/">На главную</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/menu">Заказать ещё</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Боковая информация о заказе */}
            <div className="w-full lg:w-80">
              <div className="bg-muted/30 p-6 rounded-lg sticky top-24">
                <h3 className="font-semibold mb-4">Ваш заказ</h3>
                
                {items.length > 0 ? (
                  <>
                    <div className="space-y-2 mb-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>{item.name} × {item.quantity}</span>
                          <span className="font-medium">{item.price * item.quantity} ₽</span>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Подытог</span>
                        <span className="font-medium">{subtotal} ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Доставка</span>
                        <span className="font-medium">{deliveryFee} ₽</span>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Итого</span>
                      <span>{total} ₽</span>
                    </div>
                    
                    {orderStep === "cart" && (
                      <Button className="w-full mt-4" onClick={handleSubmit}>
                        Оформить заказ
                      </Button>
                    )}
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-muted-foreground mb-2">Корзина пуста</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/menu">В меню</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Order;
