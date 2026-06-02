import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Heart,
  PawPrint,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Star,
  Stethoscope,
  Truck,
} from 'lucide-react';
import './styles.css';

const products = [
  {
    name: '天然冻干主粮',
    tag: '猫狗通用',
    price: '¥129',
    description: '高蛋白配方，添加益生元，适合挑食和肠胃敏感的毛孩子。',
  },
  {
    name: '云朵舒睡窝',
    tag: '新品',
    price: '¥219',
    description: '可拆洗绒面与防滑底座，给宠物一个安稳、透气的休息角落。',
  },
  {
    name: '互动嗅闻玩具',
    tag: '热卖',
    price: '¥69',
    description: '通过藏食游戏释放精力，帮助宠物建立更健康的日常节奏。',
  },
];

const services = [
  { icon: Scissors, title: '精致洗护', text: '按犬猫体型与毛质定制护理方案，使用温和低敏产品。' },
  { icon: Stethoscope, title: '健康咨询', text: '营养、驱虫、疫苗提醒一站式记录，门店顾问持续跟进。' },
  { icon: Truck, title: '同城配送', text: '常用口粮与用品最快当日送达，满 ¥199 免配送费。' },
];

const reviews = [
  '店员会认真询问我家猫的口味和过敏史，推荐的粮真的很合适。',
  '洗护区很干净，还会拍照反馈护理过程，第一次送狗狗来也很安心。',
  '领养咨询特别耐心，帮我们准备了新手清单，少走了很多弯路。',
];

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="PawPal 首页">
            <PawPrint size={28} />
            <span>PawPal</span>
          </a>
          <div className="nav-links">
            <a href="#products">精选用品</a>
            <a href="#services">门店服务</a>
            <a href="#visit">预约到店</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">有温度的城市宠物店</p>
            <h1 id="hero-title">让每一次陪伴，都更健康快乐</h1>
            <p className="hero-text">
              PawPal 提供严选宠物用品、专业洗护、健康咨询与领养支持，帮你轻松照顾家里的毛茸茸伙伴。
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#products">浏览精选商品</a>
              <a className="button secondary" href="#visit">预约护理服务</a>
            </div>
            <div className="trust-list" aria-label="服务亮点">
              <span><ShieldCheck size={18} /> 正品保障</span>
              <span><Heart size={18} /> 领养友好</span>
              <span><Star size={18} /> 4.9 顾客评分</span>
            </div>
          </div>
          <div className="hero-card" aria-label="宠物护理套餐卡片">
            <div className="pet-portrait">🐶</div>
            <div>
              <p className="card-label">本周推荐</p>
              <h2>春夏清爽护理套餐</h2>
              <p>洗护、耳部清洁、爪垫护理与营养小样，一次预约全部搞定。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="products" aria-labelledby="products-title">
        <div className="section-heading">
          <p className="eyebrow">Shop</p>
          <h2 id="products-title">精选宠物用品</h2>
          <p>从日常口粮到舒适寝具，优先选择配方透明、体验友好的商品。</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-icon"><ShoppingBag size={28} /></div>
              <div className="product-meta">
                <span>{product.tag}</span>
                <strong>{product.price}</strong>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button type="button">加入愿望清单</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section services" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Care</p>
          <h2 id="services-title">专业又安心的门店服务</h2>
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

      <section className="reviews" aria-labelledby="reviews-title">
        <h2 id="reviews-title">顾客怎么说</h2>
        <div className="review-grid">
          {reviews.map((review) => (
            <blockquote key={review}>“{review}”</blockquote>
          ))}
        </div>
      </section>

      <section className="visit" id="visit" aria-labelledby="visit-title">
        <div>
          <p className="eyebrow">Visit</p>
          <h2 id="visit-title">来店里认识我们吧</h2>
          <p>营业时间：周一至周日 10:00 - 21:00 · 可提前电话预约洗护与营养咨询。</p>
        </div>
        <a className="button primary" href="tel:400-668-8866">拨打 400-668-8866</a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
