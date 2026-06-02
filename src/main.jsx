import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  CalendarCheck,
  HeartHandshake,
  PawPrint,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from 'lucide-react';
import './styles.css';

const products = [
  {
    name: '活力幼犬成长粮',
    tag: '热卖',
    price: '¥129',
    description: '高蛋白配方搭配益生元，帮助幼犬健康成长。',
  },
  {
    name: '猫咪云朵逗趣套装',
    tag: '新品',
    price: '¥89',
    description: '耐抓磨材质与羽毛挂件，让猫咪在家也能尽情玩耍。',
  },
  {
    name: '四季舒适宠物窝',
    tag: '精选',
    price: '¥169',
    description: '可拆洗外套与透气内胆，为毛孩子打造安心睡眠角。',
  },
];

const services = [
  { icon: Scissors, title: '精致洗护', text: '按犬猫毛发类型定制护理流程，温和清洁不刺激。' },
  { icon: HeartHandshake, title: '领养咨询', text: '协助家庭完成性格匹配、用品准备与新宠适应计划。' },
  { icon: CalendarCheck, title: '健康提醒', text: '建立疫苗、驱虫与复诊档案，关键节点自动提醒。' },
];

const benefits = [
  '48 小时内同城配送',
  '严选安全材质用品',
  '7 天无忧退换',
  '会员专属护理折扣',
];

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="PawPal 首页">
            <span className="brand-mark"><PawPrint size={24} /></span>
            PawPal
          </a>
          <div className="nav-links">
            <a href="#products">精选商品</a>
            <a href="#services">服务</a>
            <a href="#visit">到店</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={16} /> 专注每一位毛孩子的日常</span>
            <h1 id="hero-title">给宠物更安心、更有趣的生活方式</h1>
            <p>
              PawPal 将优质宠物用品、专业洗护和领养咨询集中在一个温暖空间，
              帮你轻松照顾猫猫狗狗的吃、玩、睡与健康。
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#products">查看精选商品</a>
              <a className="button secondary" href="#visit">预约到店体验</a>
            </div>
            <div className="trust-row" aria-label="顾客评分">
              <span><Star size={18} fill="currentColor" /> 4.9/5 顾客评分</span>
              <span><ShieldCheck size={18} /> 品质严选</span>
            </div>
          </div>

          <aside className="hero-card" aria-label="今日店内亮点">
            <div className="pet-bubble">🐶</div>
            <h2>今日护理空位</h2>
            <p>下午 3:00、5:30 仍可预约基础洗护与局部修剪。</p>
            <div className="mini-stats">
              <span><strong>1200+</strong>会员家庭</span>
              <span><strong>30+</strong>精选品牌</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="benefits" aria-label="购物保障">
        {benefits.map((benefit) => (
          <div className="benefit" key={benefit}>
            <Truck size={20} />
            <span>{benefit}</span>
          </div>
        ))}
      </section>

      <section className="section" id="products" aria-labelledby="products-title">
        <div className="section-heading">
          <span className="eyebrow">PawPal Picks</span>
          <h2 id="products-title">本周精选用品</h2>
          <p>从营养主粮到互动玩具，全部优先选择安全、耐用且易清洁的产品。</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <span className="tag">{product.tag}</span>
              <div className="product-icon"><ShoppingBag size={34} /></div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="price-row">
                <strong>{product.price}</strong>
                <button type="button">加入清单</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section services" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <span className="eyebrow">Services</span>
          <h2 id="services-title">不止售卖，更懂陪伴</h2>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={30} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="visit" id="visit" aria-labelledby="visit-title">
        <div>
          <span className="eyebrow">Visit us</span>
          <h2 id="visit-title">周末带上毛孩子来店里玩吧</h2>
          <p>营业时间：10:00 - 21:00｜地址：城市公园旁 PawPal 宠物生活馆</p>
        </div>
        <a className="button primary" href="tel:400-888-2026">电话预约</a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
